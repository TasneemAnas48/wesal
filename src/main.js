import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import './scss/global/_reset.scss';
import './scss/main.scss';

// Import Bootstrap and BootstrapVue CSS files 
import 'bootstrap/dist/css/bootstrap.min.css'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)


import i18n from './i18n';

import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);

import VueScrollTo from 'vue-scrollto';
Vue.use(VueScrollTo)

import ScrollAnimation from "./directives/scrollanimation";
Vue.directive('scrollanimation', ScrollAnimation)

Vue.config.productionTip = false;

new Vue({
  i18n,
  router,
  render: (h) => h(App),
}).$mount("#app");
