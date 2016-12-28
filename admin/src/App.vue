<template>
  <div id="app">
    <postList></postList>
  </div>
</template>

<script>
import PostList from './components/PostList';

export default {
  name: 'app',
  components: {
    PostList,
  },
};
</script>

<style>
html, body, #app {
  width: 100%;
  height: 100%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
}
</style>
