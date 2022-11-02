<template>
  <div id="demo-order" v-show="user.authtoken && menu.current == 'order'">
    TODO: new order
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
