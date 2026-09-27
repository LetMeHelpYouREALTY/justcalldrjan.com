import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { isAdminProtectedPath, verifyAdminBasicAuth } from '@/lib/admin-auth'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-pathname', pathname)

  if (isAdminProtectedPath(pathname)) {
    if (!process.env.ADMIN_PASSWORD) {
      return new NextResponse('Admin access is not configured.', { status: 503 })
    }
    if (!verifyAdminBasicAuth(request)) {
      return new NextResponse('Authentication required.', {
        status: 401,
        headers: {
          'WWW-Authenticate': 'Basic realm="Admin", charset="UTF-8"',
        },
      })
    }
  }

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)',
  ],
}
