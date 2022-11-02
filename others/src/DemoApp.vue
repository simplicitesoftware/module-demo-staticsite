<template>
  <div id="demo-body">
    <DemoMenu/>
    <div id="demo-page">
      <div id="demo-error" class="alert alert-danger" v-if="error">{{error}}</div>
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
      <DemoProducts/>
      <DemoOrder/>
      <DemoOrders/>
      <DemoContacts/>
      <DemoNews/>
    </div>
  </div>
</template>

<script>
import DemoMenu from './components/DemoMenu.vue';
import DemoProducts from './components/DemoProducts.vue';
import DemoOrder from './components/DemoOrder.vue';
import DemoOrders from './components/DemoOrders.vue';
import DemoContacts from './components/DemoContacts.vue';
import DemoNews from './components/DemoNews.vue';

export default {
  name: 'DemoApp',
  components: { DemoMenu, DemoProducts, DemoOrder, DemoOrders, DemoContacts, DemoNews },
  data() {
    return { clientCode: '' };
  },
  computed: {
    error() { return this.$store.state.error; },
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
:root {
  --demo-blue: #2362A5;
  --demo-orange: #A57C23;
  --demo-green: #167830;
  --demo-red: #6D2A2A;
  --demo-grey: #E0E0E0;
  --demo-black: #202020;
}
#demo-body {
  .clickable {
    cursor: pointer;
  }
  h1 {
    color: var(--demo-green);
  }
  h3 {
    color: var(--demo-blue);
  }
  h5 {
    color: var(--demo-orange);
  }
  .card, .media {
    border-radius: 1rem;
    background: #FFFFFF;
    border: solid .0625rem var(--demo-grey);
  }
  .card {
    padding: .5rem;
  }
  .card-img, .card-img-top {
    padding: 1.5rem;
    max-width: 16rem;
    margin: 0 auto;
  }
  .media {
    padding: 1rem;
    margin-bottom: .5rem;
  }
  table {
    color: var(--demo-blue);
    thead {
      th {
        color: #FFFFFF;
        background: var(--demo-blue);
      }
    }
  }
  .badge-primary {
     background: var(--demo-blue);
  }
}
#demo-error, #demo-client {
  margin: 0 0 .5rem 0;
}
#demo-client {
  color: var(--demo-blue);
}
#demo-page {
  margin-left: 16rem;
  padding: 1rem;
  color: var(--demo-black);
}
.page-minified() {
    margin-left: 3.5rem;
    padding: .5rem;
}
#demo-body.minified {
  #demo-page {
    .page-minified();
  }
}
@media screen and (max-width: 767px) {
  #demo-page {
    .page-minified();
  }
}
* {
  scrollbar-color: var(--demo-grey) transparent;
  scrollbar-width: .5rem;
}
::-webkit-scrollbar {
  width: .5rem;
  height: .5rem;
}
::-webkit-scrollbar-thumb {
  background-color: var(--demo-grey);
  border-radius: .25rem;
}
::-webkit-scrollbar-track {
  background-color: transparent;
}
</style>
