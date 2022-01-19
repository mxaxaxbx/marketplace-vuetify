import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';

// impport app styles
import './assets/css/app.css';

// vuex store
import store from './store';

// Vuew router
import { router } from './router';

// i18n
import { i18n } from './i18n';

// filters
import './filters';

Vue.config.productionTip = false

new Vue({
  vuetify,
  store,
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
