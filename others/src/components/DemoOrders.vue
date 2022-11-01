<template>
  <div id="demo-orders" v-show="user.authtoken && menu.current == 'orders'">
    TODO: orders
  </div>
</template>

<script>
export default {
  computed: {
    user() { return this.$store.state.user; },
    menu() { return this.$store.state.menu; }
  }
}
</script>

<style lang="less">
</style>
