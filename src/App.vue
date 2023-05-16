<template>
  <div id="app">
    <router-link to="/" class="title">Home</router-link>
    <router-link to="/move" class="title">Move</router-link>
    <router-link to="/rotate" class="title">Rotate</router-link>
    <router-link to="/clock" class="title">Clock</router-link>
    <router-link to="/gsap" class="title">Gsap</router-link>
    <router-link to="/obj" class="title">Obj</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}
html,
body {
  margin: 0;
  padding: 0;
}
.title{
  margin-right: 5px;
}
</style>
