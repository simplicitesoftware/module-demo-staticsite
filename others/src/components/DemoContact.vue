<template>
  <div v-if="client.row_id" id="demo-contact" class="modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title">New contact</h3>
        </div>
        <div class="modal-body">
          <textarea v-if="contact.row_id == '0'" v-model="message" class="form-control" placeholder="Your message"/>
          <div v-if="contact.row_id && contact.row_id != '0'" class="alert alert-info">Your message has been sent.</div>
        </div>
        <div class="modal-footer">
          <button v-if="contact.row_id == '0'" type="button" class="btn btn-primary" @click="sendContact">Send</button>
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { message: '' };
  },
  computed: {
    client() { return this.$store.state.client; },
    contact() { return this.$store.state.contact; }
  },
  methods: {
    sendContact() {
      this.$store.commit('sendContact', this.message);
      this.message = '';
    }
  }
};
</script>

<style lang="less" scoped="true">
</style>
