<template>
  <nav id="demo-menu" v-show="user.authtoken">
    <img alt="Logo" class="clickable" title="Resize menu" @click="toggle" src="/img/logo.png"/>
    <ul>
      <li v-bind:class="{ selected: item.selected , disabled: item.disabled }" v-for="item in menu.items" v-bind:key="item.name" v-bind:name="item.name" @click="click(item.name)">
        <span class="label"><span v-bind:class="`fas fa-fw fa-${item.icon}`"></span>&nbsp;{{ item.label }}</span>
        <span class="icononly" v-bind:title="item.label"><span v-bind:class="`fas fa-fw fa-${item.icon}`"></span></span>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  computed: {
    user() { return this.$store.state.user; },
    menu() { return this.$store.state.menu; }
  },
  methods: {
    toggle() {
      document.querySelector('#demo-body').classList.toggle('minified');
    },
    click(name) {
      this.$store.commit('selectMenu', name);
    }
  }
}
</script>

<style lang="less">
#demo-menu {
  background: #202020;
  color: #FFFFFF;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 16rem;
  border-radius: 0 1rem 1rem 0;
  img {
    margin: 1rem 2rem;
    width: 12rem;
    height: 12rem;
  }
  ul {
    list-style-type: none;
    padding: 1rem 0 0 1rem;
    font-size: 1.25rem;
    li {
      padding: .5rem 1rem;
      margin-bottom: 1rem;
      border-radius: 1rem 0 0 1rem;
      .label {
        display: block;
      }
      .icononly {
        display: none;
      }
      &.disabled {
        color: #C0C0C0;
        font-style: italic;
      }
      &:not(.disabled) {
        cursor: pointer;
      }
      &.selected {
        color: #202020;
        background: #F0F0F0;
      }
    }
  }
  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.menu-minified() {
  width: 3.5rem;
  min-width: 3.5rem;
  max-width: 3.5rem;
  padding: 0;
  img {
    width: 2.5rem;
    height: 2.5rem;
    margin: .5rem;
  }
  ul {
    padding: .5rem 0 0 .25rem;
    li {
      .label {
        display: none;
      }
      .icononly {
        display: block;
      }
    }
  }
}
#demo-body.minified {
  #demo-menu {
    .menu-minified();
  }
}
@media screen and (max-width: 767px) {
  #demo-menu {
    .menu-minified();
  }
}
</style>
