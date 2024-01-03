import { createStore } from 'vuex';

const store = createStore({
  state: {
    isLoggedIn: false,
    username: "",
    token: "",
  },
  mutations: {
    setLoggedIn(state, payload) {
      state.isLoggedIn = payload.value;
      state.username = payload.username;
      state.token = payload.token;
    }
  },
  actions: {
    updateLoggedIn({ commit }, payload) {
      commit('setLoggedIn', payload);
    }
  },
  getters: {
    isLoggedIn: state => state.isLoggedIn,
    username: state => state.username,
    token: state => state.token,
  }
});

export default store;
