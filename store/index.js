export const actions = {
  async nuxtServerInit ({ dispatch }) {
    await dispatch('users/loadUsers')
  }
}
