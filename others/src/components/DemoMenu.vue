<template>
  <nav id="demo-menu">
    <img alt="Logo" class="clickable" src="/img/logo.svg" @click="toggle">
    <ul>
      <li v-for="item in menu.items" :id="`demo-menu-${item.name}`" :key="item.name" :class="{ selected: item.selected , disabled: item.disabled }" @click="click(item.name)">
        <span class="label"><span :class="`fas fa-${item.icon}`"/>&nbsp;{{ item.label }}</span>
        <span class="icononly" :title="item.label"><span :class="`fas fa-${item.icon}`"/></span>
      </li>
      <li onclick="document.location.assign('/ui')">
        <span class="label"><span class="fas fa-gear"></span>&nbsp;Administration</span>
        <span class="icononly" title="Administration"><span class="fas fa-gear"></span></span>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  computed: {
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
};
</script>

<style lang="less" scoped="true">
nav {
  background: var(--demo-blue);
  color: #FFFFFF;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 16rem;
  border-radius: 0 1rem 1rem 0;
  img {
    margin: 2rem 3rem 1rem 3rem;
    width: 10rem;
    height: 10rem;
    filter: invert(100%);
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
        color: var(--demo-grey);
        cursor: not-allowed;
      }
      &:not(.disabled) {
        cursor: pointer;
      }
      &.selected {
        color: var(--demo-blue);
        background: var(--demo-lightgrey);
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
    img {
      cursor: initial !important;
    }
  }
}
</style>
