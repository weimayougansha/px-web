// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  css: [
    '~/assets/css/tailwind.css'
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ['@element-plus/nuxt', 'nuxt-echarts'],
  elementPlus: { /** Options */ },
  echarts: {
    charts: ['MapChart'],
    components: ['DatasetComponent', 'GridComponent', 'TooltipComponent'],
  },
})