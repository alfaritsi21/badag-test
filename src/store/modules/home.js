import axios from 'axios'

export default {
  state: {
    search: '',
    totalPage: '',
    page: 1,
    limit: 3,
    sort: '',
    dataUsers: []
  },
  mutations: {
    setDataUsers(state, payload) {
      state.dataUsers = payload.data
      state.totalPage = payload.pagination.total_data
    },
    changePage(state, payload) {
      state.page = payload
    },
    sortUsers(state, payload) {
      state.sort = payload
    }
  },
  actions: {
    getDataUsers(context, payload) {
      axios
        .get(
          `${process.env.VUE_APP_URL}home?page=${context.state.page}&limit=${context.state.limit}&sort=${context.state.sort}&search=${context.state.search}`
        )
        .then(response => {
          console.log(response.data)
          context.commit('setDataUsers', response.data)
        })
        .catch(error => {
          console.log(error)
        })
    },
    getUser(context, payload) {
      axios
        .get(`${process.env.VUE_APP_URL}users/1`)
        .then(response => {
          console.log(response.data)
          // context.commit('setDataUsers', response.data)
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  getters: {
    getSearch(state) {
      return state.search
    },
    getLimit(state) {
      return state.limit
    },
    getPage(state) {
      return state.page
    },
    getSortUsers(state) {
      return state.sort
    },
    getDataUser(state) {
      return state.dataUsers
    },
    getTotalPage(state) {
      return state.totalPage
    }
  }
}
