<template>
  <div>
    <h1>
      User
    </h1>
    <hr>
    <div v-if="!isEdit">
      <div>
        <strong>Name:</strong> {{ user.name }}
      </div>
      <div>
        <strong>Username:</strong> {{ user.username }}
      </div>
      <div>
        <strong>Emal:</strong> <a :href="`mailto:${user.email}`">{{ user.email }}</a>
      </div>
      <div>
        <strong>Phone:</strong> <a :href="`tel:${user.phone}`">{{ user.phone }}</a>
      </div>
      <div>
        <strong>Website:</strong> <a :href="user.website" target="_blank">{{ user.website }}</a>
      </div>
      <button @click.prevent="onEdit">Edit</button>
    </div>
    <form v-if="isEdit" @submit.prevent="onSubmit">
      <div>
        <label>
          <input v-model="localUser.name" type="text" placeholder="Name">
        </label>
      </div>
      <div>
        <label>
          <input v-model="localUser.username" type="text" placeholder="Username">
        </label>
      </div>
      <div>
        <label>
          <input v-model="localUser.email" type="email" placeholder="Email">
        </label>
      </div>
      <div>
        <label>
          <input v-model="localUser.phone" type="text" placeholder="Phone">
        </label>
      </div>
      <div>
        <label>
          <input v-model="localUser.website" type="text" placeholder="Website">
        </label>
      </div>
      <button type="submit">
        Save
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'User',
  data: () => ({
    isEdit: false
  }),
  async asyncData ({ $axios, params }) {
    let user = {}
    try {
      user = await $axios.$get(`/users/${params.id}`, {
        params: {
          _embed: 'posts'
        }
      })
    } catch (e) {
      console.log(e.response)
    }
    const localUser = { ...user }
    delete localUser.posts
    return { user, localUser }
  },
  methods: {
    onEdit () {
      this.isEdit = true
    },
    async onSubmit () {
      try {
        const { id, ...user } = this.localUser
        const resUser = await this.$axios.$put(`/users/${id}`, user)
        this.isEdit = false
        this.user = { ...resUser }
        this.localUser = { ...resUser }
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e)
      }
    }
  }
}
</script>

<style scoped>

</style>
