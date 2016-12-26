<template>
  <div class="post">
    <div class="loading" v-if="loading">
      Loading...
    </div>

    <div v-if="error" class="error">
      {{ error }}
    </div>

    <div v-if="post" class="content">
      <h2>{{ post.title }}</h2>
      <h3>id: {{ post.id }}</h3>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
// import Config from '../../../config';

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
      this.error = this.post = null;
      this.loading = true;

      setTimeout(() => {
        self.loading = false;
        self.post = {
          id: self.$route.params.id,
          title: 'title',
          body: 'body',
        };
      }, 1000);
    },
  },
};

</script>

<style>

</style>
