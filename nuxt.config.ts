// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'nuxt-icons',
    '@vueuse/nuxt',
    'nuxt-icon',
    '@vee-validate/nuxt',
    '@pinia/nuxt',
    'nuxt-jwt-auth'
    // '@sidebase/nuxt-auth'

  ],
  nuxtJwtAuth: {
    baseUrl: 'https://dummyjson.com', // URL of your backend
    endpoints: {
      login: '/auth/login', // Where to request login (POST)
      logout: '/logout', // Where to request logout (POST)
      user: '/user', // Where to request user data (GET)
      signup: '/signup' // Where to request signup (POST)
    },
    redirects: {
      home: '/', // Where to redirect after successfull login and logout
      login: '/login', // Where to redirect if user is not logged in and accesses a logged-only route
      logout: '/logout' // Where to redirect if user is logged in and accesses a guest-only route 
    }
  },
 
  devtools: { enabled: true }
})
