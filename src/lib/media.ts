/**
 * Resolve a Payload media URL to a publicly accessible path.
 *
 * On Vercel, Payload's filesystem is read-only so /api/media/file/* URLs
 * will 500. If the file exists in public/assets/, rewrite to that path.
 * If not, return the original URL (works locally where Payload can serve files).
 */
export function resolveMediaUrl(url: string | undefined | null): string | null {
  if (!url) return null

  // Already a static asset path
  if (url.startsWith('/assets/')) return url

  // Rewrite Payload media URLs to static asset paths
  if (url.startsWith('/api/media/file/')) {
    const filename = url.replace('/api/media/file/', '')
    return `/assets/${filename}`
  }

  // External URLs (CDN, etc.) — pass through
  if (url.startsWith('http')) return url

  return url
}
