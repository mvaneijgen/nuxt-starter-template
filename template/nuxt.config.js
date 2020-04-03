const routerBase =
  process.env.DEPLOY_ENV === "GH_PAGES"
    ? {
      router: {
        base: "/",
      },
    }
    : {};

module.exports = {
  /*
  ** Headers of the page
  */
  ...routerBase,
  head: {
    title: "{{ name }}",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "{{ escape description }}",
      },
      { property: "og:type", content: "article" },
      { property: "og:title", content: "{{ name }}" },
      {
        property: "og:description",
        content: "{{ escape description }}",
      },
      { property: "og:url", content: "" },
      {
        property: "og:image",
        content: "",
      },
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "",
      },
    ],
  },
  // ⚙️  Nuxt pre generate the following pages as static HTML
  generate: {
    dir: "docs",
    // routes: [
    //   '/projecten',
    //   '/over',
    //   '/workflow',
    //   '/contact',
    //   '/privacy',
    //   '/project/websites',
    //   '/project/intranet',
    //   '/project/datavisualisatie',
    // ],
  },
  // END ⚙️ 
  // Nuxt 📦 modules
  modules: [
    // "@nuxtjs/axios",
    // "@nuxtjs/apollo",
    // '@nuxtjs/redirect-module',
  ],
  // apollo: {
  //   clientConfigs: {
  //     default: '@/apollo/client-configs/default.js'
  //   }
  // },
  render: {
    static: {
      maxAge: 1000 * 60 * 60 * 24 * 7
    }
  },
  manifest: {
    name: "{{ name }} | {{ escape author }}",
    short_name: "{{ name }}",
    lang: "en",
    icons: [
      {
        src: "android-chrome-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
    ],
    theme_color: "#0ba",
    background_color: "#0ba",
    display: "standalone",
  },
  // workbox: {
  //   runtimeCaching: [
  //     {
  //       // Should be a regex string. Compiles into new RegExp('https://my-cdn.com/.*')
  //       urlPattern: "https://mvaneijgen.nl/wish-list/.*",
  //       // Defaults to `networkFirst` if omitted
  //       handler: "cacheFirst",
  //       // Defaults to `GET` if omitted
  //       method: "GET",
  //     },
  //     {
  //       // Should be a regex string. Compiles into new RegExp('https://my-cdn.com/.*')
  //       urlPattern: "https://i.imgur.com/.*",
  //       // Defaults to `networkFirst` if omitted
  //       handler: "cacheFirst",
  //       // Defaults to `GET` if omitted
  //       method: "GET",
  //     },
  //   ],
  // },
  css: ["@/assets/css/main.scss"],
  /*
  ** Customize the progress bar color
  */
  loading: { color: "#F53" },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/,
        });
      }
    },
  },
};
