<template>
  <div id="demo-orders" v-show="client.row_id && menu.current == 'orders'" class="card">
    <div class="card-body">
      <h3 class="card-title"><span class="fas fa-cart-shopping"></span>&nbsp;My orders <sup class="badge badge-primary">{{orders.length}}</sup></h3>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Date</th>
            <th scope="col">Status</th>
            <th scope="col">Product</th>
            <th scope="col">Quantity</th>
            <th scope="col">Contacts</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="o in orders" :key="o.row_id" :id="`order-${o.row_id}`">
            <th scope="row">{{o.demoOrdNumber}}</th>
            <td v-text="new Date(Date.parse(o.demoOrdDate)).toLocaleDateString()"></td>
            <td><span class="badge badge-pill badge-primary" :style="`color: ${ord.getFieldListColors('demoOrdStatus', o).color}; background-color: ${ord.getFieldListColors('demoOrdStatus', o).bgcolor}`">{{ord.getFieldListValue('demoOrdStatus', o)}}</span></td>
            <td>{{o.demoOrdPrdId__demoPrdName}} ({{o.demoOrdPrdId__demoPrdReference}})</td>
            <td>{{o.demoOrdQuantity}}</td>
            <td><button class="btn btn-sm btn-primary" data-toggle="modal" data-target="#demo-contact" @click="prepareContact(o)"><span class="fas fa-comments"></span> Contact</button></td>
          </tr>
        </tbody>
      </table>
    </div>
    <DemoContact/>
  </div>
</template>

<script>
import DemoContact from './DemoContact.vue';

export default {
  components: {
    DemoContact
  },
  computed: {
    client() { return this.$store.state.client; },
    menu() { return this.$store.state.menu; },
    orders() { return this.$store.state.orders; },
    ord() { return this.$simplicite.getBusinessObject('DemoOrder'); }
  },
  methods: {
    prepareContact(order) {
      this.$store.commit('prepareContact', order);
    }
  }
}
</script>

<style lang="less">
#demo-orders {
  .card-body {
    overflow-x: auto;
  }
}
</style>
