<template>
  <div id="demo-news" v-show="user.authtoken && menu.current == 'news'">
    TODO: news
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
