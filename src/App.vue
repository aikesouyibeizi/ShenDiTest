<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
*,html,body{
  box-sizing: border-box;
}
html,body{
  padding: 0;
  margin: 0;
  font-size: 14px;
  color: #fff;
}
ul,li{
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
