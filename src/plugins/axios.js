import Vue from "vue";
import Axios from "axios";
const axios = Axios.create({
  baseURL: process.env.VUE_APP_SERVER_HOST,
});
Vue.prototype.$request = axios;

export default axios;