<template>
  <div v-show="client.row_id && menu.current == 'contacts'" id="demo-contacts" class="card">
    <div class="card-body">
      <h3 class="card-title"><span class="fas fa-comments"/>&nbsp;My contacts <sup class="badge badge-primary">{{ contacts.length }}</sup></h3>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Status</th>
            <th scope="col">Type</th>
            <th scope="col">Canal</th>
            <th scope="col">Messages</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="c in contacts" :id="`contact-${c.row_id}`" :key="c.row_id">
            <td v-text="new Date(Date.parse(c.demoCtcDatetime.replace(' ', 'T'))).toLocaleString()"/>
            <td><span class="badge badge-pill badge-primary" :style="`color: ${ctc.getFieldListColors('demoCtcStatus', c).color}; background-color: ${ctc.getFieldListColors('demoCtcStatus', c).bgcolor}`">{{ ctc.getFieldListValue('demoCtcStatus', c) }}</span></td>
            <td>{{ ctc.getFieldListValue('demoCtcType', c) }}</td>
            <td>{{ ctc.getFieldListValue('demoCtcCanal', c) }}</td>
            <td><pre>{{ c.demoCtcMessages }}</pre></td>
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
    contacts() { return this.$store.state.contacts; },
    ctc() { return this.$simplicite.getBusinessObject('DemoContact'); }
  }
};
</script>

<style lang="less" scoped="true">
.card-body {
  overflow-x: auto;
  pre {
    background: #FFFFFF;
    border: solid .0625rem var(--demo-grey);
    border-radius: .5rem;
    padding: .5rem;
  }
}
</style>
