<template>
  <div id="demo-orders" v-show="client && menu.current == 'orders'">
    TODO: orders
  </div>
</template>

<script>
export default {
  computed: {
    client() { return this.$store.state.client; },
    menu() { return this.$store.state.menu; }
  }
}
</script>

<style lang="less">
</style>
