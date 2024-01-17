import { useAuthStore } from "@/stores/auth";

export default defineNuxtRouteMiddleware((to, from) => {
    const authStore = useAuthStore();

    function loginDataValidation() {
        if (
            authStore.loginData.mobile.toString().length < 10
            &&
            authStore.loginData.type.toString().length == 0) {
            return false;
        }
        return true
    }

    function pageValidation() {

        if (Object.keys(authStore.loginData).length == 0) {
            console.log('one')
            return navigateTo('/auth/login')
        } else {
            if (loginDataValidation == false) {
                console.log('two')
                return navigateTo('/auth/login')
            }
        }

    }

    return pageValidation()
})
