import '@babel/polyfill';
import '@fortawesome/fontawesome-free/js/all';

// ==============================================================
//                   PIMPORT ALL STYLES
// ==============================================================
import './assets/scss/style.scss';

// ==============================================================
//                   PIMPORT ALL PLUGINS
// ==============================================================
import Vue from 'vue';
import './plugins/bootstrap-vue'
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
