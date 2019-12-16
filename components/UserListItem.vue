<template>
  <li>
    <template v-if="!isEdit">
      <strong>{{ user.name }}: </strong>
      <span>{{ user.email }}</span>
    </template>
    <template v-else>
      <input v-model="localUser.name" type="text">
      <input v-model="localUser.email" type="text">
    </template>
    <template v-if="!isEdit">
      <button @click="onEdit">
        Edit
      </button>
    </template>
    <template v-else>
      <button @click.prevent="onCancel">
        Cancel
      </button>
      <button @click.prevent="onSave">
        Save
      </button>
    </template>
  </li>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'UserListItem',
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    isEdit: false,
    localUser: {}
  }),
  created () {
    this.localUser = { ...this.user }
  },
  methods: {
    ...mapActions({
      updateUser: 'users/updateUser'
    }),
    onEdit () {
      this.isEdit = true
    },
    onCancel () {
      this.localUser = { ...this.user }
      this.isEdit = false
    },
    async onSave () {
      await this.updateUser(this.localUser)
      this.isEdit = false
    }
  }
}
</script>

<style scoped>

</style>
