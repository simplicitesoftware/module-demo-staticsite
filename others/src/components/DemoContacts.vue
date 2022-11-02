<template>
  <div id="demo-contacts" v-show="client && menu.current == 'contacts'">
    TODO: contacts
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
