<template>
  <div id="demo-body">
    <DemoLogin/>
    <DemoMenu/>
    <div id="demo-page">
      <DemoProducts/>
    </div>
  </div>
</template>

<script>
import DemoLogin from './components/DemoLogin.vue';
import DemoMenu from './components/DemoMenu.vue';
import DemoProducts from './components/DemoProducts.vue';

export default {
  name: 'DemoApp',
  components: { DemoLogin, DemoMenu, DemoProducts }
}
</script>

<style lang="less">
#demo-body {
  color: #202020;
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
