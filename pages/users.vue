<template>
  <div>
    <h1>Users</h1>
    <ul>
      <li v-for="user of users">
        {{ user.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Users',
  async asyncData ({ $axios }) {
    let users = []
    try {
      users = await $axios.$get('https://jsonplaceholder.typicode.com/users')
    } catch (e) {
      console.log(e.response)
    }
    return { users }
  }
}
</script>

<style scoped>

</style>
