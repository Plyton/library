import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "materialize-css/dist/js/materialize.min";
import "./assets/less/style.less";

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
