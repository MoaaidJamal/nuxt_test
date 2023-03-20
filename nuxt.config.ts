// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    buildModules: [
        '@nuxtjs/dotenv'
    ],
    runtimeConfig: {
        public: {
            apiBase: "",
        }
    }
})
