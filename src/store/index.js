import Vue from 'vue'
import Vuex from 'vuex'
import Auth from './modules/auth'
import Reset from './modules/reset'
import Users from './modules/home'
import ProfileIcon from './modules/profileIcon'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: { Auth, Reset, Users, ProfileIcon },
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  plugins: [
    createPersistedState({
      paths: [
        'Auth.user',
        'Auth.isPt',
        'Auth.isRegister',
        'Auth.isOn',
        'Auth.urlApi'
      ],
      storage: window.sessionStorage
    })
  ]
})
