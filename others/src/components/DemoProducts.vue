<template>
  <div v-show="menu.current == 'products'" id="demo-products" class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4">
    <div v-for="p in products" :id="`product-${p.row_id}`" :key="p.row_id" class="col">
      <div class="card">
        <img v-if="p.demoPrdPicture" :alt="p.demoPrdName" :src="'data:' + p.demoPrdPicture.mime + ';base64,' + p.demoPrdPicture.content" class="card-img">
        <div class="card-body text-center">
          <h3 class="card-title">{{ p.demoPrdName }}</h3>
          <h5 class="card-title">{{ p.demoPrdReference }}</h5>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <p class="card-text text-muted" v-html="p.demoPrdDescription"/>
          <button v-if="client.row_id" class="btn btn-primary" @click="order(p)"><span class="fas fa-cart-shopping"/> Order</button>
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
    order(product) {
      this.$store.commit('prepareOrder', product);
    }
  }
};
</script>

<style lang="less" scoped="true">
.row {
  padding: 0 1rem;
}
.col {
  padding: .25rem;
}
</style>
