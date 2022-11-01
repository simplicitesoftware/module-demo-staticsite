<template>
  <div id="demo-body">
    <DemoLogin/>
    <DemoMenu/>
    <div id="demo-page">
      <DemoProducts/>
      <DemoOrders/>
      <DemoContacts/>
      <DemoNews/>
    </div>
  </div>
</template>

<script>
import DemoLogin from './components/DemoLogin.vue';
import DemoMenu from './components/DemoMenu.vue';
import DemoProducts from './components/DemoProducts.vue';
import DemoOrders from './components/DemoOrders.vue';
import DemoContacts from './components/DemoContacts.vue';
import DemoNews from './components/DemoNews.vue';

export default {
  name: 'DemoApp',
  components: { DemoLogin, DemoMenu, DemoProducts, DemoOrders, DemoContacts, DemoNews }
}
</script>

<style lang="less">
#demo-body {
  .clickable {
    cursor: pointer;
  }
}
#demo-page {
  margin-left: 16rem;
  padding: 1rem;
  color: #202020;
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
  scrollbar-color: #E0E0E0 transparent;
  scrollbar-width: .5rem;
}
::-webkit-scrollbar {
  width: .5rem;
  height: .5rem;
}
::-webkit-scrollbar-thumb {
  background-color: #E0E0E0;
  border-radius: .25rem;
}
::-webkit-scrollbar-track {
  background-color: transparent;
}
</style>
