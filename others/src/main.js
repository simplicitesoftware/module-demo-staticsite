
import { createApp } from 'vue';
import { createStore } from 'vuex';

import simplicite from 'simplicite';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import '@fortawesome/fontawesome-free/css/all.min.css';

import DemoApp from './DemoApp.vue';

const app = simplicite.session(process.env.VUE_APP_URL ? { url: process.env.VUE_APP_URL, debug: true } : {});

app.info('Version: ' + process.env.VUE_APP_VERSION);
app.debug(app.parameters);

const showLoading = () => {
  const l = document.querySelector('#demo-loading');
  l.style.display = 'block';
  l.querySelector('span').classList.add('fa-spin');
};

const hideLoading = () => {
  const l = document.querySelector('#demo-loading');
  l.style.display = 'none';
  l.querySelector('span').classList.remove('fa-spin');
};

const store = createStore({
  state() {
    return {
      version: process.env.VUE_APP_VERSION,
      app: {},
      menu: {
        current: 'products',
        items: [
          { name: "products", icon: "gift", label: "Products", selected: true },
          { name: "orders", icon: "cart-shopping", label: "My orders", disabled: true, client: true },
          { name: "contacts", icon: "comments", label: "My contacts", disabled: true, client: true  },
          { name: "news", icon: "rss", label: "News" }
        ]
      },
      error: '',
      products: [],
      product: {},
      client: {},
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
      if (e.status || e.level)
        state.error = e.message;
      else
        state.error = 'Network not available, please retry later...'
    },
    selectMenu(state, name) {
      state.error = '';
      for (const item of state.menu.items)
        if (item.name == name && item.disabled) return;
      for (const item of state.menu.items)
        item.selected = item.name == name;
      state.menu.current = name;
      this.commit(name);
    },
    async products(state) {
      state.error = '';
      showLoading();
      app.getBusinessObject('DemoProduct').search({ demPrdAvailable: true }, { inlineDocuments: [ 'demoPrdPicture' ] }).then(products => {
        app.debug(products);
        state.products = products;
      }).catch(e => {
        if (e.status) state.products = [];
        this.commit('error', e);
      }).finally(hideLoading);
    },
    async client(state, code) {
      state.error = '';
      showLoading();
      app.getBusinessObject('DemoClient').search({ demoCliCode: code }).then(clients => {
        app.debug(clients);
        if (clients.length == 1) {
          state.client = clients[0];
          for (const item of state.menu.items)
            if (item.client)
              item.disabled = false;
        } else {
          state.error = `Customer ${code} not found`;
          state.client = {};
          for (const item of state.menu.items)
            if (item.client)
              item.disabled = true;
        }
      }).catch(e => {
        if (e.status) state.client = {};
        this.commit('error', e);
      }).finally(hideLoading);
    },
    async prepareOrder(state, product) {
      state.order = {};
      state.product = product;
      state.error = '';
      if (!state.client) return;
      showLoading();
      app.getBusinessObject('DemoOrder').getForCreate().then(order => {
        order.demoOrdPrdId = state.product.row_id;
        order.demoOrdCliId = state.client.row_id;
        app.debug(order);
        state.menu.current = 'order';
        state.order = order;
      }).catch(e => {
        if (e.status) state.order = {};
        this.commit('error', e);
      }).finally(hideLoading);
    },
    async placeOrder(state, quantity) {
      state.error = '';
      if (!state.client) return;
      state.order.demoOrdQuantity = quantity;
      state.order.demoOrdComments = 'Placed on the frontend';
      showLoading();
      app.getBusinessObject('DemoOrder').create(state.order).then(order => {
        state.order = order;
      }).catch(e => {
        if (e.status) state.order = {};
        this.commit('error', e);
      }).finally(hideLoading);
    },
    async orders(state) {
      state.error = '';
      if (!state.client) return;
      showLoading();
      app.getBusinessObject('DemoOrder').search({ demoOrdCliId: state.client.row_id }).then(orders => {
        app.debug(orders);
        state.orders = orders;
      }).catch(e => {
        if (e.status) state.orders = [];
        this.commit('error', e);
      }).finally(hideLoading);
    },
    async prepareContact(state, order) {
      state.contact = {};
      state.error = '';
      if (!state.client) return;
      showLoading();
      app.getBusinessObject('DemoContact').getForCreate().then(contact => {
        contact.demoCtcCliId = state.client.row_id;
        contact.demoCtcOrdId = order.row_id;
        contact.demoCtcType = 'OTH';
        contact.demoCtcCanal = 'WEB';
        state.contact = contact;
      }).catch(e => {
        if (e.status) state.contact = {};
        this.commit('error', e);
      }).finally(hideLoading);
    },
    async sendContact(state, message) {
      state.error = '';
      if (!state.client) return;
      state.contact.demoCtcMessages = message;
      showLoading();
      app.getBusinessObject('DemoContact').create(state.contact).then(contact => {
        state.contact = contact;
      }).catch(e => {
        if (e.status) state.contact = {};
        this.commit('error', e);
      }).finally(hideLoading);
    },
    async contacts(state) {
      state.error = '';
      if (!state.client) return;
      showLoading();
      app.getBusinessObject('DemoContact').search({ demoCtcCliId: state.client.row_id }).then(contacts => {
        app.debug(contacts);
        state.contacts = contacts;
      }).catch(e => {
        if (e.status) state.contacts = [];
        this.commit('error', e);
      }).finally(hideLoading);
    },
    async news(state) {
      state.error = '';
      showLoading();
      app.getNews({ inlineImages: true }).then(news => {
        app.debug(news);
        state.news = news;
      }).catch(e => {
        if (e.status) state.news = [];
        this.commit('error', e);
      }).finally(hideLoading);
    }
  }
});

// Temporary: use a named technical user
app.login({ username: 'website', password: 'simplicite' }).then(() => {
  app.getBusinessObject('DemoOrder').getMetadata().then(() => {
    app.getBusinessObject('DemoContact').getMetadata().then(() => {
      const vueApp = createApp(DemoApp);
      vueApp.config.globalProperties.$simplicite = app;
      vueApp.use(store);
      vueApp.mount('body');
    }).catch(e => {
      console.error(e);
    });
  }).catch(e => {
    console.error(e);
  });
});
