<template>
  <div>
    <h1>
      {{ error.message }}
    </h1>
  </div>
</template>

<script>
export default {
  name: 'Error',
  props: ['error']
}
</script>

<style scoped>

</style>
