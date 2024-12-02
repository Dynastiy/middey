export default {
  namespaced: true,
  state: {
    user: null,
    categories: [],
    sub_categories: [],
    tags: [],
    order: null,
    loading: false,
    _middey_user_token: null,
    validationErrors: null,
  },

  mutations: {
    setUser(state, data) {
      state.user = data
    },

    login(state, { token, user }) {
      state._middey_user_token = token;
      state.user = user;
    },

    async LOGOUT(state) {
      state.user = null
      state._middey_user_token = null
      localStorage.clear()
    },

    RESET(state) {
      Object.keys(state).forEach((key) => {
        Object.assign(state[key], null)
      })
    }
  },

  actions: {
    logout({ commit }) {
      commit('LOGOUT')
    }
  },
  
  getters: {
    auth: (state) => state.auth,
    isLoading: (state) => state.loading,
    getUser: (state) => state.user,
    getAddress: (state) => state.address,
    getMeta: (state) => state.meta,
    getAuthenticated: (state) => !!state._middey_user_token
  }
}
