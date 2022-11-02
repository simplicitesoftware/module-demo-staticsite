<template>
  <div id="demo-orders" v-show="client.row_id && menu.current == 'orders'" class="card">
    <div class="card-body">
      <table class="table table-stripped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Date</th>
            <th scope="col">Product</th>
            <th scope="col">Quantity</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="o in orders" :key="o.row_id" :id="`order-${o.row_id}`">
            <th scope="row">{{o.demoOrdNumber}}</th>
            <td>{{o.demoOrdDate}}</td>
            <td>{{o.demoOrdPrdId__demoPrdReference}}</td>
            <td>{{o.demoOrdQuantity}}</td>
            <td><span class="badge badge-pill badge-primary">{{o.demoOrdStatus}}</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    client() { return this.$store.state.client; },
    menu() { return this.$store.state.menu; },
    orders() { return this.$store.state.orders; }
  }
}
</script>

<style lang="less">
</style>
