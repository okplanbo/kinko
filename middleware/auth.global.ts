import { allowedRoutes } from "~/constants";

export default defineNuxtRouteMiddleware(async (to, from) => {
    const user = await getCurrentUser();

    if (!user && !allowedRoutes.includes(to.path)) {
        return navigateTo({ path: '/NoAccess' });
    }
});
