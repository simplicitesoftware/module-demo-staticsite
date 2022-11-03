<template>
  <div id="demo-order" v-show="client.row_id && menu.current == 'order'" class="card">
    <div class="card-body">
      <h3 class="card-title"><span class="fas fa-cart-shopping"></span>&nbsp;Place order</h3>
      <div class="row">
        <div class="col-sm-5">
          <img v-if="product.demoPrdPicture" :alt="product.demoPrdReference" :src="'data:' + product.demoPrdPicture.mime + ';base64,' + product.demoPrdPicture.content"/>
          <h1>{{product.demoPrdName}}</h1>
          <h3>{{product.demoPrdReference}}</h3>
          <h5>{{product.demoPrdDescription}}</h5>
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Quantity" v-model="quantity">
            <div class="input-group-append">
              <button class="btn btn-primary" @click="order"><span class="fas fa-check"></span>&nbsp;Order</button>
            </div>
          </div>
        </div>
        <div class="col-sm-7 doc">
          <p class="card-text" v-html="product.demoPrdDocumentation"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { quantity: 1 };
  },
  computed: {
    client() { return this.$store.state.client; },
    menu() { return this.$store.state.menu; },
    product() { return this.$store.state.product; }
  },
  methods: {
    order() {
        alert('Not yet implemented...');
    }
  }
}
</script>

<style lang="less">
#demo-order {
  .doc {
    background: var(--demo-lightgrey);
    padding: 1rem;
    border: solid .0625rem var(--color-grey);
    border-radius: 1rem;
  }
}
</style>
