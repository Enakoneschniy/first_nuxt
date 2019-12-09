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
  </header>
</template>

<script>
export default {
  name: 'TheHeader'
}
</script>

<style scoped>

</style>
