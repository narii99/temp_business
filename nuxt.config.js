// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  ssr: true,

  modules: ["@nuxt/eslint", "@nuxt/fonts", "@nuxt/icon", "@nuxt/image", "@nuxt/scripts"],

  /**
   * IMPORTANT
   * Nuxt 4에서 `@`/`~` alias가 `app/` 기준으로 잡히는 경우가 있어,
   * 루트 `assets/`를 참조할 때는 `~~/`(root) alias를 사용합니다.
   */
  css: ["~~/assets/styles/main.scss"],

  app: {
    head: {
      meta: [{ name: "color-scheme", content: "light dark" }],
      /**
       * FOUC 최소화: 첫 페인트 전에 localStorage 테마를 data-theme으로 적용
       * (Nuxt hydration 이후에 바뀌는 깜빡임 방지)
       */
      script: [
        {
          children:
            '(function(){try{var k="theme";var v=localStorage.getItem(k);var r=document.documentElement;if(v==="light"||v==="dark"){r.setAttribute("data-theme",v);}else{r.removeAttribute("data-theme");}}catch(e){}})();',
        },
      ],
    },
  },
});


