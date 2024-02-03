import { createStore } from 'vuex';

const store = createStore({
  state: {
    isLoggedIn: false,
    username: "",
    token: "",
  },
  mutations: {
    setLoggedIn(state, payload) {
      const { value, username, token } = payload;
      state.isLoggedIn = value;
      state.username = username;
      state.token = token;
    }
  },
  actions: {
   async updateLoggedIn({ commit }, payload) {
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
