<template>
  <div id="demo-contact" v-show="user.authtoken && menu.current == 'contact'">
    TODO: new contact
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
