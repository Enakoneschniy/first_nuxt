<template>
  <header>
    <ul>
      <li>
        <nuxt-link :to="{ name: 'home', params: { lang: 'en' } }" exact>
          Home
        </nuxt-link>
      </li>
      <li>
        <nuxt-link :to="{ name: 'users', params: { lang: 'en' } }" exact>
          Users
        </nuxt-link>
      </li>
    </ul>
    <input v-model="query" type="text" placeholder="Search">
    <input v-model="user.name" type="text" placeholder="Name">
    <input v-model="user.age" type="text" placeholder="Age">
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
  data () {
    return {
      query: '',
      user: {
        name: 'Petya',
        age: 34
      }
    }
  },
  watch: {
    query (newValue, oldValue) {
      // eslint-disable-next-line no-console
      console.log(newValue, oldValue)
      if (newValue.length > 2) {
        window.alert('SEARCH!!!!')
      }
    },
    'user.name' (newValue, oldValue) {
      // eslint-disable-next-line no-console
      console.log(newValue, oldValue)
    },
    user: {
      handler (value) {
        console.log(value)
      },
      deep: true
    }
  }
}
</script>

<style scoped>

</style>
