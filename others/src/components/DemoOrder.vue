<template>
  <div id="demo-order" v-show="client.row_id && menu.current == 'order'" class="card">
    <div class="card-body">
      <h3 class="card-title"><span class="fas fa-cart-shopping"></span>&nbsp;Place order</h3>
      <p class="card-text">TODO</p>
    </div>
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
