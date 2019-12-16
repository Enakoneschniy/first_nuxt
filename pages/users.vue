<template>
  <div>
    <h1>Users</h1>
    <ul>
      <UserListItem :user="user" v-for="user of users" :key="user.id" />
    </ul>
    <hr>
    <ul>
      <li v-for="user of users">
        <nuxt-link :to="{ name: 'user', params: { lang: 'en', id: user.id } }">
          {{ user.name }}
        </nuxt-link>
        <button @click.prevent="onDelete(user.id)">
          Delete
        </button>
      </li>
    </ul>
    <validation-observer ref="newUserForm" v-slot="{ handleSubmit }" tag="div">
      <form @submit.prevent="handleSubmit(onSubmit)">
        <validation-provider v-slot="{ classes, errors }" name="name" rules="required" tag="div">
          <label>
            <input v-model="newUser.name" :class="classes" type="text" placeholder="Name">
          </label>
          <p v-for="error of errors">
            <span class="error">{{ error }}</span>
          </p>
        </validation-provider>
        <validation-provider v-slot="{ classes, errors }" name="username" rules="required" tag="div">
          <label>
            <input v-model="newUser.username" :class="classes" type="text" placeholder="Username">
          </label>
          <p v-for="error of errors">
            <span class="error">{{ error }}</span>
          </p>
        </validation-provider>
        <validation-provider v-slot="{ classes, errors }" name="email" rules="required|email" tag="div">
          <label>
            <input v-model="newUser.email" :class="classes" type="email" placeholder="Email">
          </label>
          <p v-for="error of errors">
            <span class="error">{{ error }}</span>
          </p>
        </validation-provider>
        <validation-provider v-slot="{ classes, errors }" name="phone" rules="required" tag="div">
          <label>
            <input v-model="newUser.phone" :class="classes" type="text" placeholder="Phone">
          </label>
          <p v-for="error of errors">
            <span class="error">{{ error }}</span>
          </p>
        </validation-provider>
        <validation-provider v-slot="{ classes, errors }" name="website" rules="required" tag="div">
          <label>
            <input v-model="newUser.website" :class="classes" type="text" placeholder="Website">
          </label>
          <p v-for="error of errors">
            <span class="error">{{ error }}</span>
          </p>
        </validation-provider>
        <button type="submit">
          Create
        </button>
      </form>
    </validation-observer>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import UserListItem from '../components/UserListItem'
export default {
  name: 'Users',
  components: { UserListItem },
  data: () => ({
    newUser: {
      name: '',
      username: '',
      email: '',
      phone: '',
      website: ''
    }
  }),
  computed: mapGetters({
    users: 'users/users'
  }),
  async fetch ({ store }) {
    if (store.getters['user/usersCount'] < 0) {
      await store.dispatch('users/loadUsers')
    }
  },
  methods: {
    ...mapActions({
      addUser: 'users/addUser',
      deleteUser: 'users/deleteUser'
    }),
    async onDelete (id) {
      try {
        if (window.confirm('Delete this user?')) {
          await this.deleteUser(id)
        }
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e)
      }
    },
    async onSubmit () {
      if (await this.$refs.newUserForm.validate()) {
        try {
          await this.addUser(this.newUser)
        } catch (e) {
          // eslint-disable-next-line no-console
          console.log(e)
          this.$refs.newUserForm.setErrors({
            email: ['This email is already taken']
          })
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
