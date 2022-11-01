<template>
  <div id="demo-products" v-show="user.authtoken && menu.current == 'products'">
    <div v-for="product in products" v-bind:key="product.demoPrdReference" v-bind:id="`product-${product.row_id}`">
      TODO: {{product.demoPrdReference}}
    </div>
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
</style>
