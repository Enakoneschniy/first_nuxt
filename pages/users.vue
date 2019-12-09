<template>
  <div>
    <h1>Users</h1>
    <ul>
      <UserListItem @update="onUpdate" :user="user" v-for="user of users" :key="user.id" />
    </ul>
    <hr>
    <ul>
      <li v-for="user of users">
        <nuxt-link :to="{ name: 'user', params: { lang: 'en', id: user.id } }">
          {{ user.name }}
        </nuxt-link>
      </li>
    </ul>
    <!-- <template v-for="user of users">
      <div><strong>{{ user.name }}: </strong></div>
      <div><span>{{ user.email }}</span></div>
    </template>-->
  </div>
</template>

<script>
import UserListItem from '../components/UserListItem'
export default {
  name: 'Users',
  components: { UserListItem },
  /* data: () => ({
    users: [
      {
        id: 1,
        name: 'Vasya',
        email: 'vasya@gmail.com'
      },
      {
        id: 2,
        name: 'Petya',
        email: 'petya@gmail.com'
      },
      {
        id: 3,
        name: 'Kolya',
        email: 'kolya@gmail.com'
      }
    ]
  }), */
  async asyncData ({ $axios }) {
    let users = []
    try {
      users = await $axios.$get('https://jsonplaceholder.typicode.com/users')
    } catch (e) {
      console.log(e.response)
    }
    return { users }
  },
  methods: {
    onUpdate (user) {
      const userIndex = this.users.findIndex(item => item.id === user.id)
      this.users.splice(userIndex, 1, user)
    }
  }
}
</script>

<style scoped>

</style>
