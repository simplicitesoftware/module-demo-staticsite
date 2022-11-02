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
:root {
  --demo-blue: #2362A5;
  --demo-orange: #A57C23;
  --demo-grey: #E0E0E0;
  --demo-black: #202020;
}
#demo-body {
  .clickable {
    cursor: pointer;
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
