<template>
  <div id="demo-products" v-show="user.authtoken && menu.current == 'products'" class="row">
    <div v-for="product in products" :key="product.demoPrdReference" :id="`product-${product.row_id}`" class="col-sm-3">
      <div class="card">
        <img v-if="product.demoPrdPicture" :alt="product.demoPrdReference" :src="'data:' + product.demoPrdPicture.mime + ';base64,' + product.demoPrdPicture.content" class="card-img-top"/>
        <div class="card-body">
          <h3 class="card-title text-center">{{product.demoPrdName}}</h3>
          <h5 class="card-title text-center">{{product.demoPrdReference}}</h5>
          <p class="card-text text-muted" v-html="product.demoPrdDescription"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    user() { return this.$store.state.user; },
    menu() { return this.$store.state.menu; },
    products() { return this.$store.state.products; }
  }
}
</script>

<style lang="less">
#demo-products {
  padding: 0 1rem;
  .col-sm-3 {
    padding: .5rem;
  }
  .card {
    border-radius: 1rem;
    .card-img, .card-img-top {
      padding: 1.5rem;
    }
    h3 {
      color: var(--demo-blue);
    }
    h5 {
      color: var(--demo-orange);
    }

  }
}
</style>
