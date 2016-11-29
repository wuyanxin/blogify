<template>
  <div class="postList">
    <ul>
      <li v-for="post in posts" class="postItem">
        <div class="postInfo">
          <a href="#">
            <h2>{{ post.title }}</h2>
          </a>
          <span>发表于 {{ post.createdAt | dateformat }}</span>
        </div>
        <div class="postImage" :style="{ backgroundImage: 'url(' + post.image + ')' }"></div>
      </li>
    </ul>
  </div>
</template>

<script>

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
      fetch('http://localhost:3000/posts')
        .then(res => res.json())
        .then((result) => {
          self.posts = result.data;
        });
    },
  },
};

</script>

<style>
.postList ul {
  list-style: none;
}

.postList {
  margin: 30px 0 0;
  width: 400px;
  text-align: left;
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

.postList .postItem .postInfo {
  display: inline-block;
  min-height: 100px;
}

.postList .postItem .postImage {
  display: inline-block;
  background-position: center;
  float: right;

  width: 100px;
  height: 100px;
  background-size: cover;
  border-radius: 4px;
  border: 1px solid #eeeeee;
  box-sizing: border-box;
}
</style>
