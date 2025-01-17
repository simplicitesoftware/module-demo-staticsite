<template>
  <div v-show="client.row_id && menu.current == 'order'" id="demo-order" class="card">
    <div class="card-body">
      <h3 class="card-title"><span class="fas fa-cart-shopping"></span>&nbsp;Place order</h3>
      <div class="row">
        <div class="col-sm-5 order">
          <img v-if="product.demoPrdPicture" :alt="product.demoPrdReference" :src="'data:' + product.demoPrdPicture.mime + ';base64,' + product.demoPrdPicture.content">
          <h1>{{ product.demoPrdName }}</h1>
          <h3>{{ product.demoPrdReference }}</h3>
          <h5>{{ product.demoPrdDescription }}</h5>
          <div v-if="order.row_id == '0'" class="input-group">
            <input v-model="quantity" type="text" class="form-control" placeholder="Quantity">
            <div class="input-group-append">
              <button class="btn btn-primary" @click="placeOrder"><span class="fas fa-check"></span>&nbsp;Order</button>
            </div>
          </div>
          <div v-if="!error && order.row_id != '0'" class="alert alert-info">
            Your order #{{ order.demoOrdNumber }} has been placed. <strong>Thank you!</strong>
          </div>
        </div>
        <div class="col-sm-7 doc">
          <!-- eslint-disable-next-line vue/no-v-html -->
          <div class="card-text" v-html="product.demoPrdDocumentation"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quantity: 1
    };
  },
  computed: {
    client() { return this.$store.state.client; },
    menu() { return this.$store.state.menu; },
    product() { return this.$store.state.product; },
    error() { return this.$store.state.error; },
    order() { return this.$store.state.order; }
  },
  methods: {
    placeOrder() {
      this.$store.commit('placeOrder', this.quantity);
    }
  }
};
</script>

<style lang="less" scoped="true">
.order {
  margin-bottom: 1rem;
}
.doc {
  background: var(--demo-lightgrey);
  padding: 1rem;
  border: solid .0625rem var(--color-grey);
  border-radius: 1rem;
  img {
    max-width: 100%;
  }
}
</style>
