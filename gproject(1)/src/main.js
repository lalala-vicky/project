import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

// // 引入antd
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
Vue.use(Antd);

// 引入echarts
import echarts from "echarts";
Vue.prototype.$echarts = echarts;

// 引入axios
import axios from "axios";
Vue.prototype.$axios = function (url, params={}) {
  const token = localStorage.getItem('token')
  const _params = new URLSearchParams();
  if (Object.keys(params).length) {
    Object.keys(params).map(item => {
      _params.append(item, params[item]);
    })
  }
  return axios.create({
    baseURL: 'http://127.0.0.1:3007',
    timeout: 10000,
    headers: {
      Authorization: token,
    }
  }).post(url, _params).then(res => res.data)
}
// 引入element-ui
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
