// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: [{ path: '~/components', extensions: ['vue'] }],
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
      
})
