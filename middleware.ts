import { NextResponse, type NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  // Check if user is accessing dashboard without being authenticated
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    // Check for the supabase session cookie
    const token = request.cookies.get('sb-uuzzdlulivmlcdjasagy-auth-token');

    if (!token) {
      // No session, redirect to sign in
      const redirectUrl = new URL('/auth/signin', request.url);
      redirectUrl.searchParams.set('redirectTo', request.nextUrl.pathname);
      return NextResponse.redirect(redirectUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - api (API routes)
     */
    '/((?!_next/static|_next/image|favicon.ico|api).*)',
  ],
};
