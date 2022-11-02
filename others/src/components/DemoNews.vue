<template>
  <div id="demo-news" v-show="user.authtoken && menu.current == 'news'" class="row">
    <div v-for="n in news" :key="n.id" :id="`news-${n.id}`" class="col-sm-12">
      <div class="media">
        <img v-if="n.image" :alt="n.title" :src="'data:' + n.image.mime + ';base64,' + n.image.content" class="mr-3"/>
        <div class="mdia-body">
          <h3>{{n.title}}</h3>
          <h5 v-text="new Date(Date.parse(n.date.replace(' ', 'T'))).toLocaleString()"></h5>
          <p class="text-muted" v-html="n.content"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    user() { return this.$store.state.user; },
    menu() { return this.$store.state.menu; },
    news() { return this.$store.state.news; }
  }
}
</script>

<style lang="less">
</style>
