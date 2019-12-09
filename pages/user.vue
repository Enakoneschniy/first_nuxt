<template>
  <div>
    <h1>
      User
    </h1>
    <hr>
    <div>
      <strong>Name:</strong> {{ user.name }}
    </div>
    <div>
      <strong>Username:</strong> {{ user.username }}
    </div>
    <div>
      <strong>Username:</strong> <a :href="`mailto:${user.email}`">{{ user.email }}</a>
    </div>
    <div>
      <strong>Phone:</strong> <a :href="`tel:${user.phone}`">{{ user.phone }}</a>
    </div>
    <div>
      <strong>Website:</strong> <a :href="user.website" target="_blank">{{ user.website }}</a>
    </div>
    <pre>
      {{ user }}
    </pre>
  </div>
</template>

<script>
export default {
  name: 'User',
  async asyncData ({ $axios, params }) {
    let user = {}
    try {
      // console.log(params)
      user = await $axios.$get(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      user.website = `http://${user.website}`
    } catch (e) {
      console.log(e.response)
    }
    return { user }
  }
}
</script>

<style scoped>

</style>
