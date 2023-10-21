import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    debug: true,
    publicRoutes: ["/", "/admin", "/api/users"]
});

export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}