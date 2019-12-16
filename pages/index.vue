<template>
  <div class="container">
    <h1>Test Vuex</h1>
    {{ myUsers }}
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      firstName: 'Vasya',
      lastName: 'Petrov'
    }
  },
  computed: mapGetters({
    myUsers: 'users'
  }),
  created () {
    this.loadUsers()
  },
  methods: mapActions({
    loadUsers: 'loadUsers'
  })
}
</script>

<style>
  .container {
    width: 960px;
    margin: 0 auto;
  }
</style>
