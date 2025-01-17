<template>
  <div id="demo-client" class="card">
    <div class="card-body">
      <div v-if="!client.row_id" class="input-group">
        <input v-model="clientCode" type="text" class="form-control" placeholder="Your customer code" @keyup.enter="searchClient">
        <div class="input-group-append">
          <button class="btn btn-primary" @click="searchClient"><span class="fas fa-sign-in"></span>&nbsp;Sign in</button>
        </div>
      </div>
      <div v-if="client.row_id"><span class="fas fa-user"></span>&nbsp;Hello {{ client.demoCliFirstname }} {{ client.demoCliLastname }}</div>
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
};
</script>

<style lang="less" scoped="true">
.card {
  margin: 0 0 .5rem 0;
  color: var(--demo-blue);
}
</style>
