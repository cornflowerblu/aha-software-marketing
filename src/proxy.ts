import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Premium content routes require authentication
  // The actual subscription check happens server-side in page components
  // This proxy just ensures there's an auth cookie present
  if (pathname.startsWith('/premium/')) {
    const token = request.cookies.get('payload-token')
    if (!token) {
      const loginUrl = new URL('/login', request.url)
      loginUrl.searchParams.set('redirect', pathname)
      return NextResponse.redirect(loginUrl)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/premium/:path+'],
}
