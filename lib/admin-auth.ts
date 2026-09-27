import type { NextRequest } from 'next/server'

export function isAdminProtectedPath(pathname: string): boolean {
  if (pathname === '/admin' || pathname.startsWith('/admin/')) {
    return true
  }
  if (pathname === '/projects' || pathname.startsWith('/projects/')) {
    return true
  }
  if (pathname.startsWith('/api/projects')) {
    return true
  }
  if (pathname === '/api/generate' || pathname === '/api/deployments') {
    return true
  }
  if (pathname === '/api/validate') {
    return true
  }
  if (pathname.startsWith('/api/chats')) {
    return true
  }
  return false
}

export function verifyAdminBasicAuth(request: NextRequest): boolean {
  const adminPassword = process.env.ADMIN_PASSWORD
  if (!adminPassword) {
    return false
  }

  const authorization = request.headers.get('authorization')
  if (!authorization?.startsWith('Basic ')) {
    return false
  }

  const encoded = authorization.slice('Basic '.length)
  let decoded: string
  try {
    decoded = Buffer.from(encoded, 'base64').toString('utf8')
  } catch {
    return false
  }

  const separatorIndex = decoded.indexOf(':')
  const password =
    separatorIndex === -1 ? decoded : decoded.slice(separatorIndex + 1)

  return password === adminPassword
}
