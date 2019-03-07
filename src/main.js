import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { ContainerMixin, ElementMixin } from 'vue-slicksort';

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
