<template>
  <div id="demo-contacts" v-show="client.row_id && menu.current == 'contacts'" class="card">
    <div class="card-body">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Type</th>
            <th scope="col">Sub-type</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="c in contacts" :key="c.row_id" :id="`contact-${c.row_id}`">
            <td v-text="new Date(Date.parse(c.demoCtcDatetime.replace(' ', 'T'))).toLocaleString()"></td>
            <td>{{c.demoCtcType}}</td>
            <td>{{c.demoCtcSubType}}</td>
            <td><span class="badge badge-pill badge-primary">{{c.demoCtcStatus}}</span></td>
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
    contacts() { return this.$store.state.contacts; }
  }
}
</script>

<style lang="less">
#demo-contacts {
  .card-body {
    overflow-x: auto;
  }
}
</style>
