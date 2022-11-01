<template>
  <div id="demo-products" v-show="user.login && menu.current == 'products'">
    TODO
  </div>
</template>

<script>
export default {
  computed: {
    user() { return this.$store.state.user; },
    menu() { return this.$store.state.menu; },
    products() { return this.$store.state.products; }
  }
}
</script>

<style lang="less">
#demo-products {
  p, h1, h2, h3, h4 {
    color: white;
  }
  h3 {
    margin: 1.5rem 0;
  }
}
</style>
