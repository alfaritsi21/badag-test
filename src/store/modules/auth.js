import axios from 'axios'
import router from '../../router/index'
export default {
  state: {
    urlApi: process.env.VUE_APP_URL,
    user: {},
    token: localStorage.getItem('token') || null,
    isPt: false,
    isRegist: false,
    isOn: false
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
      state.token = payload.token
    },
    delUser(state) {
      state.user = {}
      state.token = null
      state.isPt = false
      state.isOn = false
    },
    setTrigger(state, payload) {
      state.isPt = payload[1]
      state.isRegist = payload[0]
    },
    setLogin(state, payload) {
      state.isOn = payload
    }
  },
  actions: {
    login(context, payload) {
      //   console.log([payload, context.state.urlApi])
      return new Promise((resolve, reject) => {
        axios
          .post(`${context.state.urlApi}users/login-user`, payload)
          .then(response => {
            context.commit('setUser', response.data.data)
            context.commit('setLogin', true)
            localStorage.setItem('token', response.data.data.token)
            resolve(response.data)
          })
          .catch(error => {
            if (error.response === undefined) {
              alert('Tidak dapat terhubung ke server')
            } else {
              reject(error.response)
            }
          })
      })
    },
    loginPt(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${context.state.urlApi}users/login-company`, payload)
          .then(response => {
            context.commit('setUser', response.data.data)
            context.commit('setLogin', true)
            localStorage.setItem('token', response.data.data.token)
            resolve(response.data)
          })
          .catch(error => {
            if (error.response === undefined) {
              alert('Tidak dapat terhubung ke server')
            } else {
              reject(error.response)
            }
          })
      })
    },
    register(context, payload) {
      return new Promise((resolve, reject) => {
        console.log(payload)
        axios
          .post(`${context.state.urlApi}register`, payload)
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            if (error.response === undefined) {
              alert('Tidak dapat terhubung ke server')
            } else {
              reject(error.response)
            }
          })
      })
    },
    registerPt(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${context.state.urlApi}register/recruiter`, payload)
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            if (error.response === undefined) {
              alert('Tidak dapat terhubung ke server')
            } else {
              reject(error.response)
            }
          })
      })
    },
    userRole(context, payload) {
      if (payload === 'public') {
        context.commit('setTrigger', [false, false])
      } else {
        context.commit('setTrigger', [false, true])
      }
    },
    userRoleRegist(context, payload) {
      if (payload === 'public') {
        context.commit('setTrigger', [true, false])
      } else {
        context.commit('setTrigger', [true, true])
      }
    },
    logout(context, payload) {
      alert('Anda akan dialihkan ke halaman login')
      console.log(context.state.isOn)
      if (context.state.isOn === true) {
        router.push('/auth')
        localStorage.removeItem('token')
        context.commit('delUser')
      } else {
        return null
      }
    },
    interceptorRequest(context) {
      axios.interceptors.request.use(
        function(config) {
          config.headers.Authorization = `Bearer ${context.state.token}`
          return config
        },
        function(error) {
          return Promise.reject(error)
        }
      )
    },
    interceptorResponse(context) {
      axios.interceptors.response.use(
        function(response) {
          return response
        },
        function(error) {
          if (error.response.status === 400) {
            if (
              error.response.data.msg === 'invalid token' ||
              error.response.data.msg === 'invalid signature'
            ) {
              localStorage.removeItem('token')
              context.commit('delUser')
              router.push('/')
              alert('Invalid Token, Relogin required')
            } else if (error.response.data.msg === 'jwt expired') {
              localStorage.removeItem('token')
              context.commit('delUser')
              router.push('/')
              alert('Token Expired, Relogin required')
            }
          }
          return Promise.reject(error)
        }
      )
    }
  },
  getters: {
    isLogin(state) {
      return state.token !== null
    },
    userData(state) {
      return state.user
    },
    isPt(state) {
      return state.isPt
    },
    isRegist(state) {
      return state.isRegist
    },
    isLogin2(state) {
      return state.isOn
    }
  }
}
