<template>
  <div id="demo-contacts" v-show="user.authtoken && menu.current == 'contacts'">
    TODO: contacts
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
