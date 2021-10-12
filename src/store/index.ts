import { createStore } from "vuex";

const state = {
  sum: 0,
};

const mutations = {
  setSum(state: any, payload: any) {
    state.sum = payload;
  },
};
const actions = {
  setSum(context: any, payload: any) {
    console.log(payload);
    context.commit("setSum", payload);
  },
};
const getters = {};

export default createStore({
  state,
  getters,
  actions,
  mutations,
});
