// middleware.ts

import { NextResponse, type NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

// Define the secret used to encrypt the token
const secret = process.env.JWT_SECRET;

export async function middleware(req: NextRequest) {
    // Get the token from the request
    const token = await getToken({ req, secret });

    // Define protected paths
    const protectedPaths = ['/dashboard', '/profile', '/admin'];
    const AuthRoutes = ["/login", "/register"]

    // Check if the request URL matches any protected path
    if (protectedPaths.some(path => req.nextUrl.pathname.startsWith(path))) {
        // If the token is not available, redirect to the sign-in page
        if (!token) {
            const url = req.nextUrl.clone();
            url.pathname = '/login';
            url.searchParams.set('callbackUrl', req.nextUrl.pathname); // Redirect to the requested page after login
            return NextResponse.redirect(url);
        }
    }
    if (AuthRoutes.some(path => req.nextUrl.pathname.startsWith(path))) {
        if (token) {
            const url = req.nextUrl.clone();
            url.pathname = '/dashboard';

            return NextResponse.redirect(url);
        }
    }

    return NextResponse.next();
}

// Middleware configuration
export const config = {
    matcher: ['/dashboard/:path*', '/profile/:path*', '/admin/:path*', "/login", "/register", '/api/:path*']
};
