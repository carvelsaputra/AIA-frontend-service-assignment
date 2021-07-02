import Vue from "vue";
import Axios from "axios";

Vue.prototype.$request = Axios.create({
    baseURL: ""
});
