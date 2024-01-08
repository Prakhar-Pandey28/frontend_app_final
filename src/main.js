import Vue from 'vue';
import App from './App.vue';
import router from './router'; // Ensure the correct path for your router

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
