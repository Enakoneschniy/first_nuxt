<template>
  <header class="header">
    <ul class="menu-list">
      <li class="menu-list-item">
        <nuxt-link :to="{ name: 'home', params }" exact>
          <i class="fa fa-home" aria-hidden="true"></i>
          {{ $t('navigation.home') }}
        </nuxt-link>
      </li>
      <li class="menu-list-item">
        <nuxt-link :to="{ name: 'users', params }" exact>
          <i class="fa fa-user"></i>
          {{ $t('navigation.users') }}
        </nuxt-link>
      </li>
    </ul>
    <LocaleChanger />
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
import LocaleChanger from './LocaleChanger'
export default {
  name: 'TheHeader',
  components: { LocaleChanger },
  data () {
    return {
      query: '',
      user: {
        name: 'Petya',
        age: 34
      }
    }
  },
  computed: {
    ...mapGetters({
      lang: 'localization/locale'
    }),
    params () {
      if (this.$i18n.locale === this.$i18n.fallbackLocale) {
        return {}
      }
      return { lang: this.lang }
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

<style scoped lang="scss">
@import "../assets/variables";
.header {
  height: 50px;
  margin-bottom: 15px;
  border-bottom: 1px solid #e4e4e4e4;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 15px;
  padding-left: 15px;

  .menu-list {
    list-style: none;
    display: flex;
    &-item {
      padding: 5px;
      a {
        text-decoration: none;
        color: $link-color;
        position: relative;

        &:hover {
          color: darken($link-color, 50)
        }
        &.router-link-active {
          &:after {
            position: absolute;
            content: '';
            width: 100%;
            border-bottom: 2px solid $link-color;
            left: 0;
            bottom: -5px;
          }
          &:before {
            position: absolute;
            z-index: 2;
            content: '';
            width: 5px;
            height: 5px;
            background: $link-color;
            bottom: -6px;
            left: calc(50% - 2.5px);
            transform: rotate(45deg);
          }
        }
      }
    }
  }
}

</style>
