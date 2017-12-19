<template>
  <el-header class="navBar">
    <router-link class="home-image" to="/"><img src="./../assets/logo.png"></router-link>
    <span class="path-text" >{{ currentPath }}</span>
  </el-header>
</template>
<script>
  export default {
    name: 'NavBar',
    methods: {
      goTo: function (route) {
        console.log(this.$router)
      }
    },
    computed: {
      currentPath: function () {
        return this.$route.name
      }
    }
  }
</script>


<style lang="scss">
  .navBar {
    background: grey;
    position: relative;
    .home-image {
      position: absolute;
      left: 15px;
      height: 45px;
      width: 50px;
      padding: 8px;
      img {
        height: 100%;
        width: 100%;
      }
    }
    .path-text {
      margin-top:15px;
      font-size: 25px;
      color: white;
      display: block;
    }
  }
</style>
