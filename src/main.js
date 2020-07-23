// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'
import request from "vue-resource/src/http/request";
import response from "vue-resource/src/http/response";
// import Home from "./components/first/Home";

Vue.use(VueResource);
Vue.http.options.root = 'https://vuejs-http-start-2020.firebaseio.com/';

Vue.http.interceptors.push((request, next) => {
  console.log(request);
  if (request.method === 'POST') {
    request.method = 'PUT';
  }
  next(response => {
    response.json = () => {
      return {messages: response.body}
    }
  });
});

Vue.filter('to-lowercase', function (value) {
  return value.toLowerCase();
});

// Vue.mixin({
//   created() {
//     console.log('Global Mixin - Created Hook ')
//   }
// });

export const eventBus = new Vue({
  methods: {
    changeAge(age) {
      this.$emit('ageWasEdited', age)
    }
  }
});

Vue.config.productionTip = false;

// Vue.component('app-servers', Home);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
});

// import Vue from 'vue'
// import App from './App.vue'
//
// new Vue({
//   el: '#app',
//   render: h => h(App)
// })
