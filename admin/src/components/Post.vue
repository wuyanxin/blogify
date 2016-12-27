<template>
  <div class="post">
    <div class="loading" v-if="loading">
      Loading...
    </div>

    <div v-if="error" class="error">
      {{ error }}
    </div>

    <div v-if="post" class="postDetail">
      <h1 class="postTitle">{{ post.title }}</h1>
      <hr>
      <div v-html="post.content" class="postContent"></div>
    </div>
  </div>
</template>

<script>
import Config from '../../../config';

export default {
  data() {
    return {
      loading: false,
      post: null,
      error: null,
    };
  },
  created() {
    // 组件创建完后获取数据，
    // 此时 data 已经被 observed 了
    this.fetchData();
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    $route: 'fetchData',
  },
  methods: {
    fetchData() {
      const self = this;
      self.error = self.post = null;
      self.loading = true;

      fetch(`${Config.host}/post/${self.$route.params.id}`)
        .then(res => res.json())
        .then((result) => {
          self.loading = false;
          self.post = result.data;
        });
    },
  },
};

</script>

<style>

</style>
