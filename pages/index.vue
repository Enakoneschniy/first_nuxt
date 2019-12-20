<template>
  <div class="container">
    <div
      :style="`background-image: url(${require('@/assets/img/Berlin.jpg')})`"
      class="banner"
    >
      <h1>
        {{ $t('bannerText') }}
      </h1>
    </div>
    <img src="@/assets/img/image1.jpg" alt="">
    <img src="/image2.jpg" alt="">
  </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
  .banner {
    width: 100%;
    height: 400px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
      font-size: 35px;
      background: rgba(53, 73, 84, .5);
      padding: 15px;
      color: #fff;
    }
  }
</style>
