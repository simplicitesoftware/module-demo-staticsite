<template>
  <div id="demo-contacts" v-show="client.row_id && menu.current == 'contacts'" class="card">
    <div class="card-body">
      <h3 class="card-title"><span class="fas fa-comments"></span>&nbsp;My contacts</h3>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Status</th>
            <th scope="col">Type</th>
            <th scope="col">Sub-type</th>
            <th scope="col">Messages</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="c in contacts" :key="c.row_id" :id="`contact-${c.row_id}`">
            <td v-text="new Date(Date.parse(c.demoCtcDatetime.replace(' ', 'T'))).toLocaleString()"></td>
            <td><span class="badge badge-pill badge-primary" :style="`color: ${this.getColors(c.demoCtcStatus).color}; background-color: ${this.getColors(c.demoCtcStatus).bgcolor}`">{{ctc.getFieldListValue('demoCtcStatus', c)}}</span></td>
            <td>{{ctc.getFieldListValue('demoCtcType', c)}}</td>
            <td>{{ctc.getFieldListValue('demoCtcSubType', c)}}</td>
            <td><pre>{{c.demoCtcMessages}}</pre></td>
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
  },
  methods: {
    // Temporary
    getColors(s) {
      for (const l of this.ctc.getField('demoCtcStatus').listOfValues)
        if (l.code == s)
          return { color: l.color, bgcolor: l.bgcolor };
      return { color: 'inherit', bgcolor: 'inherit' };
    }
  }
}
</script>

<style lang="less">
#demo-contacts {
  .card-body {
    overflow-x: auto;
  }
  pre {
    background: #FFFFFF;
    border: solid .0625rem var(--demo-grey);
    border-radius: .5rem;
    padding: .5rem;
  }
}
</style>
