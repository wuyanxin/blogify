<template>
  <div class="post">
    <div class="loading" v-if="loading">
      加载中...
    </div>
    <div class="loading" v-if="committing">
      保存中...
    </div>

    <div v-if="error" class="error">
      {{ error }}
    </div>

    <div v-if="post" class="postDetail">
      <label for="postTitle">标题:</label>
      <input id="postTitle" type="text" name="title" v-model="post.title">
      <hr>
      <textarea name="md" id="postMd" v-model="post.md"></textarea>
      <button type="button" name="btnPostSave" id="btnPostSave" v-on:click="savePost">保存</button>
    </div>
  </div>
</template>

<script>
import Config from '../../../config';

export default {
  data() {
    return {
      loading: false,
      committing: false,
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

    savePost() {
      const self = this;
      const headers = new Headers({
        'Content-Type': 'application/json',
      });
      self.committing = true;

      fetch(`${Config.host}/post`, {
        method: 'PUT',
        body: JSON.stringify(this.post),
        headers,
      }).then(res => res.json())
        .then(() => {
          self.committing = false;
          location.reload();
        });
    },
  },
};

</script>

<style>
.post {
  height: 100%;
}
.postDetail {
  text-align: left;
  height: 90%;
}

#postTitle {
  width: 90%;
  font-size: 1.5em;
}
#postMd {
  width: 94.3%;
  height: 88%;
}
#btnPostSave {
  display: block;
}
</style>
