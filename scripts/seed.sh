#!/bin/bash
# Seed script — creates test content via Payload REST API
# Usage: ./scripts/seed.sh <base-url> <email> <password>

BASE_URL="${1:-http://localhost:3000}"
EMAIL="${2:-roger@ahasw.com}"
PASS="${3:-troy-LAYING-somewhat}"

echo "Seeding $BASE_URL..."

# Login
TOKEN=$(curl -sf -X POST "$BASE_URL/api/users/login" \
  -H "Content-Type: application/json" \
  -d "{\"email\":\"$EMAIL\",\"password\":\"$PASS\"}" | jq -r '.token')

if [ -z "$TOKEN" ] || [ "$TOKEN" = "null" ]; then
  echo "ERROR: Login failed. Create an admin user first at $BASE_URL/admin"
  exit 1
fi
echo "Logged in"

# Upload images
echo "Uploading images..."
MEDIA1=$(curl -sf -X POST "$BASE_URL/api/media" \
  -H "Authorization: JWT $TOKEN" \
  -F "file=@public/assets/insight-server-room.png;type=image/png" \
  -F '_payload={"alt":"Server room with data racks"}' | jq -r '.doc.id')

MEDIA2=$(curl -sf -X POST "$BASE_URL/api/media" \
  -H "Authorization: JWT $TOKEN" \
  -F "file=@public/assets/insight-code-screen.png;type=image/png" \
  -F '_payload={"alt":"Code on screen"}' | jq -r '.doc.id')

MEDIA3=$(curl -sf -X POST "$BASE_URL/api/media" \
  -H "Authorization: JWT $TOKEN" \
  -F "file=@public/assets/hero-abstract.png;type=image/png" \
  -F '_payload={"alt":"Modern workspace"}' | jq -r '.doc.id')

echo "Media IDs: $MEDIA1, $MEDIA2, $MEDIA3"

# Create event
echo "Creating event..."
curl -sf -X POST "$BASE_URL/api/events" \
  -H "Content-Type: application/json" \
  -H "Authorization: JWT $TOKEN" \
  -d "{\"title\":\"The Future is Yesterday, Teams Who Adapt will Thrive.\",\"slug\":\"future-is-yesterday-workshop\",\"date\":\"2026-10-24T14:00:00.000Z\",\"endDate\":\"2026-10-24T16:30:00.000Z\",\"location\":\"Virtual Gallery Studio\",\"capacity\":500,\"price\":0,\"status\":\"upcoming\",\"registrationDeadline\":\"2026-10-20T23:59:00.000Z\",\"featuredImage\":$MEDIA3}" | jq '{id:.doc.id, title:.doc.title}'

# Create blog posts
echo "Creating blog posts..."
curl -sf -X POST "$BASE_URL/api/posts" \
  -H "Content-Type: application/json" \
  -H "Authorization: JWT $TOKEN" \
  -d "{\"title\":\"High-Quality Software Delivery: Beyond the Sprint.\",\"slug\":\"high-quality-software-delivery\",\"excerpt\":\"Why traditional agile metrics are failing your engineering culture and how to shift towards structural quality metrics that drive revenue.\",\"status\":\"published\",\"premium\":false,\"publishedAt\":\"2024-05-15T00:00:00.000Z\",\"featuredImage\":$MEDIA1,\"content\":{\"root\":{\"type\":\"root\",\"children\":[{\"type\":\"paragraph\",\"children\":[{\"type\":\"text\",\"text\":\"The software industry has spent the last two decades optimizing for velocity. Sprint velocity, deployment frequency, lead time for changes — these metrics have become the lingua franca of engineering leadership. But something is fundamentally broken.\"}]},{\"type\":\"paragraph\",\"children\":[{\"type\":\"text\",\"text\":\"Teams that ship fast often ship fragile. The cost of rework — the silent killer of engineering productivity — has been systematically ignored in favor of throughput metrics that look good in stakeholder reviews but mask deep structural issues.\"}]},{\"type\":\"paragraph\",\"children\":[{\"type\":\"text\",\"text\":\"At AHA Software, we have seen this pattern repeat across dozens of enterprise engagements. The solution is not to slow down. It is to redefine what quality means in the context of continuous delivery.\"}]}],\"direction\":null,\"format\":\"\",\"indent\":0,\"version\":1}}}" | jq '{id:.doc.id, title:.doc.title}'

curl -sf -X POST "$BASE_URL/api/posts" \
  -H "Content-Type: application/json" \
  -H "Authorization: JWT $TOKEN" \
  -d "{\"title\":\"DevOps for Modern Teams: Radical Automation.\",\"slug\":\"devops-radical-automation\",\"excerpt\":\"Implementing zero-touch deployments in complex legacy environments. A guide to navigating the friction between speed and safety.\",\"status\":\"published\",\"premium\":false,\"publishedAt\":\"2024-06-10T00:00:00.000Z\",\"featuredImage\":$MEDIA2,\"content\":{\"root\":{\"type\":\"root\",\"children\":[{\"type\":\"paragraph\",\"children\":[{\"type\":\"text\",\"text\":\"The promise of DevOps was simple: break down the wall between development and operations. Ship faster, fail less, recover quickly. But for most enterprise teams, the reality is far more complicated.\"}]},{\"type\":\"paragraph\",\"children\":[{\"type\":\"text\",\"text\":\"Radical automation is not about removing humans from the loop. It is about removing humans from the repetitive, error-prone tasks that slow delivery and introduce risk.\"}]}],\"direction\":null,\"format\":\"\",\"indent\":0,\"version\":1}}}" | jq '{id:.doc.id, title:.doc.title}'

curl -sf -X POST "$BASE_URL/api/posts" \
  -H "Content-Type: application/json" \
  -H "Authorization: JWT $TOKEN" \
  -d "{\"title\":\"The Art of the Digital Monograph\",\"slug\":\"art-of-digital-monograph\",\"excerpt\":\"Translating traditional publishing aesthetics into highly functional SaaS marketing engines.\",\"status\":\"published\",\"premium\":true,\"publishedAt\":\"2024-03-22T00:00:00.000Z\",\"featuredImage\":$MEDIA3,\"content\":{\"root\":{\"type\":\"root\",\"children\":[{\"type\":\"paragraph\",\"children\":[{\"type\":\"text\",\"text\":\"This is premium content. Only subscribers can see the full article below this point.\"}]},{\"type\":\"paragraph\",\"children\":[{\"type\":\"text\",\"text\":\"The traditional monograph has been the gold standard of thought leadership for centuries. In the digital age, we reinvent this format for the web.\"}]}],\"direction\":null,\"format\":\"\",\"indent\":0,\"version\":1}}}" | jq '{id:.doc.id, title:.doc.title, premium:.doc.premium}'

echo "Done seeding $BASE_URL"
