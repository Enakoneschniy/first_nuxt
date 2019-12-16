
export const state = () => ({
  users: []
})

export const getters = {
  users (st) {
    return st.users
  },
  usersCount (st) {
    return st.users.length
  }
}

export const actions = {
  async loadUsers ({ commit }) {
    const users = await this.$axios.$get('/users')
    commit('setUsers', users)
  },
  async addUser ({ commit }, user) {
    const newUser = await this.$axios.$post('/users', user)
    commit('addUser', newUser)
  },
  async deleteUser ({ commit }, id) {
    await this.$axios.$delete(`/users/${id}`)
    commit('deleteUser', id)
  },
  async updateUser ({ commit }, { id, ...user }) {
    const resUser = await this.$axios.$patch(`/users/${id}`, user)
    commit('updateUser', resUser)
  }
}

export const mutations = {
  setUsers (state, users) {
    state.users = users
  },
  addUser (state, user) {
    state.users.push(user)
  },
  deleteUser (state, id) {
    const index = state.users.findIndex(user => user.id === id)
    state.users.splice(index, 1)
  },
  updateUser (state, user) {
    const index = state.users.findIndex(u => u.id === user.id)
    state.users.splice(index, 1, user)
  }
}
