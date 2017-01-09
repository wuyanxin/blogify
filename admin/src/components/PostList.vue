<template>
  <div class="postListContainer">
    <div class="postList">
      <ul>
        <li v-for="post in posts" class="postItem">
          <div class="postInfo">
            <router-link :to="{ path: '/post/' + post.id }" class="linkEditPost">
              <h3>{{ post.title }}</h3>
            </router-link>
            <a :href="post.link" class="linkPreview btn">
              预览
            </a>
            <span>发表于 {{ post.createdAt | dateformat }}</span>
          </div>
          <!-- <div class="postImage" :style="{ backgroundImage: 'url(' + post.image + ')' }"></div> -->
        </li>
      </ul>
    </div>

    <div class="postMain">
      <router-view></router-view>
    </div>
  </div>

</template>

<script>
import Config from '../../../config';

export default {
  name: 'postList',
  data() {
    return {
      posts: [],
    };
  },
  created() {
    this.fetchData();
  },

  methods: {
    fetchData() {
      const self = this;
      fetch(`${Config.host}/posts`)
        .then(res => res.json())
        .then((result) => {
          self.posts = result.data;
          for (const post of self.posts) {
            post.link = `${Config.host}/${post.slug}`;
          }
        });
    },
  },
};

</script>

<style>
.postListContainer {
  width: 100%;
  height: 100%;
}

.postList ul {
  list-style: none;
}

.postList {
  width: 400px;
  text-align: left;
  padding-right: 20px;
  border-right: 1px solid #ccc;
  float: left;
}

.postList .postItem {
  position: relative;
  width: 100%;
  padding-right: 2px;
  padding-bottom: 17px;
  margin: 0 0 17px;
  border-bottom: 1px dashed #d9d9d9;
  box-sizing: border-box;
  word-wrap: break-word;
}

.postList .postItem .linkEditPost {
  width: 100%;
  height: 100%;
  z-index: 1;
}

.postList .postItem .linkPreview {
  z-index: 2;
}

.postList .postItem .postInfo {
  display: inline-block;
  min-height: 100px;
}

.postList .postItem .postImage {
  display: inline-block;
  background-position: center;
  right: 0;
  position: absolute;

  width: 100px;
  height: 100px;
  background-size: cover;
  border-radius: 4px;
  border: 1px solid #eeeeee;
  box-sizing: border-box;
}

.postMain {
  padding-left: 450px;
  height: 100%;
}
</style>
