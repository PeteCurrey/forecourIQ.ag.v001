import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  // Protect dashboard routes
  if (!session && (req.nextUrl.pathname.startsWith('/dashboard') || 
                   req.nextUrl.pathname.startsWith('/stock') || 
                   req.nextUrl.pathname.startsWith('/leads') || 
                   req.nextUrl.pathname.startsWith('/analytics') || 
                   req.nextUrl.pathname.startsWith('/settings'))) {
    const url = req.nextUrl.clone()
    url.pathname = '/login'
    return NextResponse.redirect(url)
  }

  // Redirect authenticated users from auth pages
  if (session && (req.nextUrl.pathname.startsWith('/login') || 
                  req.nextUrl.pathname.startsWith('/register'))) {
    const url = req.nextUrl.clone()
    url.pathname = '/dashboard'
    return NextResponse.redirect(url)
  }

  return res
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
