<template>
  <div id="demo-contact" v-show="client && menu.current == 'contact'">
    TODO: new contact
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
