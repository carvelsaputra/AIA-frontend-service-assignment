import axios from "../../src/plugins/axios";
export default {
  state: {},
  mutations: {},
  actions: {
    publicImage() {
      return axios.get("public-image").then(res=>{
          console.log(res);
      });
    },
  },
  getters: {},
};
