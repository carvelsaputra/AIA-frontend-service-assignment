import axios from "../../../src/plugins/axios";

export default {
  namespaced: true,
  state: {
    list: [],
    isLoading: false,
  },
  mutations: {
    setList(state, newList) {
      state.list = newList.map((row) => {
        row.title = String(row.title).trim();
        return row;
      });
    },
    isFetching(state, newCondition) {
      state.isLoading = newCondition;
    },
  },
  actions: {
    fetch({ commit }) {
      commit("isFetching", true);

      return axios.get("public-image").then((res) => {
        commit("setList", res.data);
        commit("isFetching", false);
      });
    },
  },
  getters: {
    list: (state) =>
      state.list.map((row) => {
        return row;
      }),
    fetching: (state) => state.isLoading,
  },
};
