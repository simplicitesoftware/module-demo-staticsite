<template>
  <div id="demo-login" v-show="!user.authtoken">
    <div class="login">
      <div class="text-center"><img alt="Logo" src="/img/logo.png"/></div>
      <div class="alert alert-danger" v-show="user.error">{{ user.error }}</div>
      <div class="form-group">
        <label for="demo-login-username">Username</label>
        <input type="text" class="form-control" id="demo-login-username" v-model="username" @keyup.enter="login" placeholder="Your username" autocapitalize="off">
      </div>
      <div class="form-group">
        <label for="demo-login-password">Password</label>
        <input type="password" class="form-control" id="demo-login-password" v-model="password" @keyup.enter="login" placeholder="Your password">
      </div>
      <div class="text-right"><button id="demo-login-button" class="btn btn-primary" @click="login"><span class="fas fa-sign-in"></span> Sign in</button></div>
      <div class="text-left"><small>Version {{ version }}</small></div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    version() { return this.$store.state.version; },
    user() { return this.$store.state.user; }
  },
  created() {
    this.username = '';
    this.password = '';
  },
  mounted() {
    this.focus();
  },
  updated() {
    this.error = '';
    document.querySelector('#demo-login-button').disabled = false;
    this.focus();
  },
  methods: {
    focus() {
      const q = document.querySelector('#demo-login-username');
      q.select();
      q.focus();
    },
    login() {
      if (this.username && this.password) {
        document.querySelector('#demo-login-button').disabled = true;
        this.$store.commit('login', { username: this.username, password: this.password });
        this.password = '';
      }
    }
  }
}
</script>

<style lang="less">
#demo-login {
  display: flex;
  align-items: center;
  justify-content: center;
  .login {
    width: 30rem;
    margin: 3rem 0 0 0;
    background: var(--demo-blue);
    color: #FFFFFF;
    border-radius: 1rem;
    padding: 2rem;
    img {
      margin: 0 auto;
      max-width: 5rem;
      margin-bottom: .75rem;
    }
    small {
      font-size: .75rem;
      color: var(--demo-grey);
    }
  }
}
@media screen and (max-width: 767px) {
  #demo-login {
    .login {
      margin: .5rem;
    }
  }
}
</style>
