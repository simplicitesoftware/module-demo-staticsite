<template>
  <div id="demo-client" class="card">
    <div class="card-body">
      <div class="input-group" v-if="!client.row_id">
        <input type="text" class="form-control" placeholder="Customer code" v-model="clientCode">
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" @click="searchClient">Ok</button>
        </div>
      </div>
      <div v-if="client.row_id"><span class="fas fa-user"></span>&nbsp;Hello {{client.demoCliFirstname}} {{client.demoCliLastname}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { clientCode: '' };
  },
  computed: {
    client() { return this.$store.state.client; }
  },
  methods: {
    searchClient() {
      this.$store.commit('client', this.clientCode.toUpperCase());
    }
  }
}
</script>

<style lang="less">
#demo-client {
  margin: 0 0 .5rem 0;
  color: var(--demo-blue);
}
</style>
