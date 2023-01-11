<template>
  <div v-show="menu.current == 'news'" id="demo-news" class="row">
    <div v-for="n in news" :id="`news-${n.id}`" :key="n.id" class="col-sm-12">
      <div class="media">
        <img v-if="n.image" :alt="n.title" :src="'data:' + n.image.mime + ';base64,' + n.image.content" class="mr-3">
        <div class="mdia-body">
          <h3>{{ n.title }}</h3>
          <h5 v-text="new Date(Date.parse(n.date.replace(' ', 'T'))).toLocaleString()"/>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <p class="text-muted" v-html="n.content"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    menu() { return this.$store.state.menu; },
    news() { return this.$store.state.news; }
  }
};
</script>

<style lang="less">
</style>
