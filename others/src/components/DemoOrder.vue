<template>
  <div id="demo-order" v-show="client && menu.current == 'order'">
    TODO: new order
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
