import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
  "/", // Home page
  // "/dashboard",
  "/login(.*)", // Sign-in pages
  "/signup(.*)", // Sign-up pages
  // "/(api|trpc)(.*)", // API routes
  "/_next/(.*)(.css|.js|.woff|.woff2|.jpg|.jpeg|.png|.svg)", // Static assets
]);

export default clerkMiddleware(async (auth, req) => {
  if (!isPublicRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
