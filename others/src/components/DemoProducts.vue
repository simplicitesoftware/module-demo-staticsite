<template>
  <div id="demo-products" v-show="menu.current == 'products'" class="row">
    <div v-for="p in products" :key="p.row_id" :id="`product-${p.row_id}`" class="col-sm-3">
      <div class="card">
        <img v-if="p.demoPrdPicture" :alt="p.demoPrdReference" :src="'data:' + p.demoPrdPicture.mime + ';base64,' + p.demoPrdPicture.content" class="card-img"/>
        <div class="card-body text-center">
          <h3 class="card-title">{{p.demoPrdName}}</h3>
          <h5 class="card-title">{{p.demoPrdReference}}</h5>
          <p class="card-text text-muted" v-html="p.demoPrdDescription"></p>
          <button v-if="client.row_id" class="btn btn-primary" @click="order">Order</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    menu() { return this.$store.state.menu; },
    products() { return this.$store.state.products; },
    client() { return this.$store.state.client; }
  },
  methods: {
    order() {
      this.$store.commit('order');
    }
  }
}
</script>

<style lang="less">
#demo-products {
  padding: 0 1rem;
  .col-sm-3 {
    padding: .5rem;
  }
}
</style>
