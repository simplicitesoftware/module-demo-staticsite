
import { createApp } from 'vue';
import { createStore } from 'vuex';

import simplicite from 'simplicite';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import DemoApp from './DemoApp.vue';

const cfg = { url: process.env.VUE_APP_URL, timeout: 3, debug: true };
const app = simplicite.session(cfg);

app.info('Version: ' + process.env.VUE_APP_VERSION);
app.debug(app.parameters);


const store = createStore({
  state() {
    return {
      version: process.env.VUE_APP_VERSION,
      menu: {
        current: 'products',
        items: [
          { name: "products", icon: "gift", label: "Products", selected: true },
          { name: "orders", icon: "file", label: "My orders", disabled: true },
          { name: "contacts", icon: "comments", label: "My contacts", disabled: true },
          { name: "news", icon: "rss", label: "News" }
        ]
      },
      error: '',
      products: [],
      product: {},
      client: '',
      orders: [],
      order: {},
      contacts: [],
      contact: {},
      news: []
    }
  },
  mutations: {
    error(state, e) {
      app.error(e);
      if (e.status) {
        state.products = [];
        if (e.status == 401)
          this.commit('logout');
        else
          state.error = e.message;
      }
    },
    selectMenu(state, name) {
      for (const item of state.menu.items)
        if (item.name == name && item.disabled) return;
      for (const item of state.menu.items)
        item.selected = item.name == name;
      state.menu.current = name;
      this.commit(name);
    },
    async products(state) {
      app.getBusinessObject('DemoProduct').search({ demPrdAvailable: true }, { inlineDocuments: [ 'demoPrdPicture' ] }).then(products => {
        app.debug(products);
        state.products = products;
      }).catch(e => {
        if (e.status) state.products = [];
        state.commit('error', e);
      });
    },
    async order(state) {
      if (!state.client) return;
      app.getBusinessObject('DemoOrder').getForCreate().then(order => {
        app.debug(order);
        state.menu.current = 'order';
        state.order = order;
      }).catch(e => {
        if (e.status) state.order = {};
        state.commit('error', e);
      });
    },
    async orders(state) {
      if (!state.client) return;
      app.getBusinessObject('DemoOrder').search({ demoOrdCliId__demoCliCode: state.client }).then(orders => {
        app.debug(orders);
        state.orders = orders;
      }).catch(e => {
        if (e.status) state.orders = [];
        state.commit('error', e);
      });
    },
    async contact(state) {
      if (!state.client) return;
      app.getBusinessObject('DemoContact').getForCreate().then(contact => {
        app.debug(contact);
        state.menu.current = 'contact';
        state.contact = contact;
      }).catch(e => {
        if (e.status) state.contact = {};
        state.commit('error', e);
      });
    },
    async contacts(state) {
      if (!state.client) return;
      app.getBusinessObject('DemoContact').search({ demoCtcCliId__demoCliCode: state.client }).then(contacts => {
        app.debug(contacts);
        state.contacts = contacts;
      }).catch(e => {
        if (e.status) state.contacts = [];
        state.commit('error', e);
      });
    },
    async news(state) {
      app.getNews({ inlineImages: true }).then(news => {
        app.debug(news);
        state.news = news;
      }).catch(e => {
        if (e.status) state.news = [];
        state.commit('error', e);
      })
      console.log('News: not implemented');
    }
  }
});

store.commit('selectMenu', 'products');

const vueApp = createApp(DemoApp);
vueApp.use(store);
vueApp.mount('body');
