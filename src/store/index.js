import { createStore } from "vuex";

const state = {
  sum: 0,
};

const mutations = {
  setSum(state, payload) {
    state.sum = payload;
  },
};
const actions = {
  setSum(context, payload) {
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
