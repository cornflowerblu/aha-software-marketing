---
description: Run quality checks, then split staged/unstaged changes into logical commits
---

## User Input

```text
$ARGUMENTS
```

You **MUST** consider the user input before proceeding (if not empty).
If the user provides a message, use it as context for commit messages.

## Execution Flow

### Step 1: Quality Gates

Run all three checks in parallel. All MUST pass before any commits are created.

1. **Lint & Typecheck**: `bun run lint && bunx tsc --noEmit`
2. **Unit & Integration Tests**: `bun run test`
3. **Build**: `bun run build`

If any gate fails:
- Report the failure clearly with the relevant output
- Do NOT proceed to committing
- Suggest fixes if the failure is obvious
- Stop and wait for the user to decide

### Step 2: Analyze Changes

Run these in parallel to understand what needs committing:

1. `git status` (never use `-uall`)
2. `git diff` (unstaged changes)
3. `git diff --cached` (staged changes)
4. `git log --oneline -10` (recent commit style reference)

### Step 3: Plan Logical Commits

Analyze ALL changes (staged + unstaged + untracked) and group them into
logical commits. Each commit should be a single coherent unit of work.

**Grouping rules** (in priority order):
- **By feature/concern**: changes to related files go together
  - e.g., a new component + its styles + its tests = one commit
  - e.g., a config change + the code that uses it = one commit
- **Docs separate from code**: documentation-only changes get their own commit
- **Config/tooling separate**: changes to CI, linting, package.json that aren't
  part of a feature get their own commit
- **Refactors separate from features**: if a refactor was done alongside a
  feature, split them unless they're inseparable
- **Tests with their implementation**: test files commit WITH the code they test,
  not in a separate "add tests" commit

**Commit message style**:
- Use conventional commits: `feat:`, `fix:`, `docs:`, `chore:`, `refactor:`, `test:`, `ci:`
- First line under 72 characters
- If the commit needs explanation, add a body after a blank line
- End every commit with: `Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>`

### Step 4: Present the Plan

Before executing, show the user the commit plan:

```
Commit plan (N commits):

  1. feat: add SpecKit constitution and templates
     - .specify/memory/constitution.md
     - .specify/templates/*.md
     
  2. docs: add project plan from 6-agent audit
     - docs/PROJECT-PLAN.md

  ...
```

Ask: "Proceed with these N commits?" and wait for confirmation.

If the user says yes, proceed. If they suggest changes, adjust the plan.

### Step 5: Execute Commits

For each planned commit, sequentially:

1. Stage ONLY the files for that commit (`git add <specific files>` — never `git add .` or `git add -A`)
2. Create the commit using a HEREDOC for the message
3. Verify with `git status` that it succeeded

After all commits, run `git log --oneline -N` (where N = number of commits created)
to show the user the result.

### Edge Cases

- **No changes**: If `git status` shows nothing to commit, say so and stop.
- **Only staged changes**: Respect what the user already staged — ask before unstaging.
- **Merge conflicts**: Do not attempt to resolve. Report and stop.
- **Single logical change**: If everything belongs in one commit, just make one. Don't force splits.
- **Sensitive files**: Never commit `.env`, credentials, or secrets. Warn if detected.
