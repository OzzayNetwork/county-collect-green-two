
  /* eslint-disable */
  import { createApp } from 'vue'
  import App from './App.vue'
  import router from "@/router";
  import vueHelmet from "vue-helmet/src/VueHelmet";
  import * as VueGoogleMaps from "vue3-google-map";

  createApp(App)
      .use(VueGoogleMaps,{ load: {key: "AIzaSyAGPbYfcYqdbSBeXdIpH5iWrznfU886Qk8"}})
      .use(router)
      .use(vueHelmet)
      .mount('#app')



