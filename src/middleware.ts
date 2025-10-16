import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default function middleware(req: NextRequest) {
    const { nextUrl } = req;
    const pathname = nextUrl.pathname;

    // Simple session check
    const hasAuthCookie = req.cookies.get('next-auth.session-token')?.value 
                       || req.cookies.get('__Secure-next-auth.session-token')?.value;

    // Public paths (adjust as needed)
    const isPublic = ['/', '/login', '/register', '/about'].includes(pathname);
    
    // Auth pages - redirect if already logged in
    if ((pathname === '/login' || pathname === '/register') && hasAuthCookie) {
        return NextResponse.redirect(new URL('/members', nextUrl));
    }
    
    // Protected pages - redirect to login if not authenticated
    if (!hasAuthCookie && !isPublic) {
        return NextResponse.redirect(new URL('/login', nextUrl));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
};