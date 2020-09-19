// import axios from 'axios'
export default {
  state: {
    urlApi: process.env.VUE_APP_URL,
    profileClick: false
  },
  mutations: {
    setProfile(state, payload) {
      state.profileClick = payload
    }
  },
  actions: {
    profileClick(context, payload) {
      console.log(payload)
      context.commit('setProfile', payload)
    }
  },
  getters: {
    isProfileClick(state) {
      return state.profileClick
    }
  }
}
