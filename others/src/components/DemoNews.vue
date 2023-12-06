<template>
  <div v-show="menu.current == 'news'" id="demo-news" class="row row-cols-1 row-cols-xl-2">
    <div v-for="n in news" :id="`news-${n.id}`" :key="n.id" class="col">
      <div class="row media">
        <div class="col-4">
          <img v-if="n.image" :alt="n.title" :src="'data:' + n.image.mime + ';base64,' + n.image.content">
        </div>
        <div class="col-8 media-body">
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

<style lang="less" scoped="true">
.media {
  margin: .1rem;
}
img {
  width: 100%;
}
</style>
