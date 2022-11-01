
import { createApp } from 'vue';
import { createStore } from 'vuex';

import simplicite from 'simplicite';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import DemoApp from './DemoApp.vue';

const cfg = { url: process.env.VUE_APP_URL, timeout: 3, debug: true };
const app = simplicite.session(cfg);

const LS_TOKEN_KEY = "demo-staticsite-token";

app.info('Version: ' + process.env.VUE_APP_VERSION);
app.debug(app.parameters);


const store = createStore({
  state() {
    return {
      version: process.env.VUE_APP_VERSION,
      user: {},
      menu: {
        current: 'search',
        items: [
          { name: "catalog", icon: "home", label: "Products°", disabled: true },
          { name: "orders", icon: "server", label: "My orders", disabled: true },
          { name: "contacts", icon: "file", label: "My contacts", disabled: true },
          { name: "news", icon: "key", label: "News", disabled: true }
        ]
      },
      products: [],
      product: {}
    }
  },
  mutations: {
    async login(state, params) {
      if (params.authtoken || (params.username && params.password)) {
        app.login(params).then(user => {
          state.user = user;
          window.localStorage.setItem(LS_TOKEN_KEY, user.authtoken);
        }).catch(e => {
          app.error(e.message);
          if (!e.status)
            state.user = { error: 'No internet connection, retry later' };
          else if (!params.authtoken)
            state.user = { error: 'Incorrect username or password' };
          else
            state.user = {};
          window.localStorage.removeItem(LS_TOKEN_KEY);
        });
       }
    },
    async logout(state) {
      await app.logout().catch(e => {
        app.error(e);
      });
      window.localStorage.removeItem(LS_TOKEN_KEY);
      state.user = {};
      state.products = [];
      state.product = {};
    },
    resetMenu(state) {
      state.products = {};
      for (const item of state.menu.items) {
        const search = item.name == 'products';
        item.disabled = !search;
        item.selected = search;
        state.menu.current = 'products';
      }
    },
    selectMenu(state, name) {
      for (const item of state.menu.items) {
        item.disabled = false;
        item.selected = item.name == name;
      }
      state.menu.current = name;
    },
    async products(state) {
      app.getBusinessObject('DemoProduct').search().then(res => {
        app.debug(res);
        state.products = res;
      }).catch(e => {
        app.error(e);
        if (e.status) {
          state.products = [];
          if (e.status == 401)
            this.commit('logout');
        }
      });
    }
  }
});

const token = window.localStorage.getItem(LS_TOKEN_KEY);
if (token)
  store.commit('login', { authtoken: token });

const vueApp = createApp(DemoApp);
vueApp.use(store);
vueApp.mount('body');