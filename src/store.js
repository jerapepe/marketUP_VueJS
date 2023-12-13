import { createStore } from 'vuex';

const store = createStore({
  state: {
    isLoggedIn: false
  },
  mutations: {
    setLoggedIn(state, value) {
      state.isLoggedIn = value;
    }
  },
  actions: {
    updateLoggedIn({ commit }, value) {
      commit('setLoggedIn', value);
    }
  },
  getters: {
    isLoggedIn: state => state.isLoggedIn
  }
});

export default store;
