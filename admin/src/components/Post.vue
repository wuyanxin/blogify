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
      <div class="postField">
        <label for="postTitle">标题:</label>
        <input id="postTitle" type="text" name="title" v-model="post.title"
          @keyup="onTitleChange" @change="onTitleChange">
      </div>

      <div class="postField">
        <label for="postSlug">Slug:</label>
        <input id="postSlug" type="text" name="slug" v-model="post.slug" :placeholder="slug_holder">
      </div>

      <div class="postField">
        <label for="type-selector">类型:</label>
        <select id="type-selector" class="type-selector"
          name="type" v-model="post.type" required="true">
          <option value ="post">文章</option>
          <option value ="page">页面</option>
        </select>
      </div>

      <div class="postField">
        <label for="category-selector">类别:</label>
        <select id="category-selector" class="category-selector"
          name="category" v-model="post.category">
          <option v-for="item in categories" :value="item.value">
            {{ item.name }}
          </option>
        </select>
      </div>

      <hr>
      <textarea name="md" id="postMd" v-model="post.md"></textarea>
      <button type="button" name="btnPostSave" id="btnPostSave" v-on:click="savePost">保存</button>
      <div class="message" v-if="message">
        {{ message }}
        <a href="/" v-if="isNew">刷新</a>
        <a href="javascript:location.reload()" v-else>刷新</a>
      </div>
    </div>
  </div>
</template>

<script>
import slug from 'limax';
import Config from '../../../config';

export default {
  data() {
    return {
      loading: false,
      committing: false,
      post: null,
      error: null,
      message: null,
      categories: Config.categories,
      slug_holder: '',
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
      self.message = self.error = self.post = null;
      self.loading = true;
      self.isNew = this.$route.params.id === 'new';

      if (self.isNew) {
        self.loading = false;
        self.post = {};
        return;
      }

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
      const method = self.isNew ? 'POST' : 'PUT';
      self.committing = true;

      fetch(`${Config.host}/post`, {
        method,
        body: JSON.stringify(this.post),
        headers,
      }).then(res => res.json())
        .then(() => {
          self.committing = false;
          if (self.isNew) {
            self.message = '新增成功';
          } else {
            self.message = '更新成功';
          }
        });
    },

    onTitleChange() {
      if (!this.post || !this.post.title) {
        this.slug_holder = '';
        return;
      }
      this.slug_holder = slug(this.post.title, { tone: false });
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
#postSlug {
  width: 90%;
}
#postMd {
  width: 94.3%;
  height: 88%;
}
#btnPostSave {
  display: block;
}
</style>
