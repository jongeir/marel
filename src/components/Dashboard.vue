<template>
  <div class="hello">
    <router-link to="/"><img src="./../assets/logo.png"></router-link>
    <h1>{{ msg }}</h1>
    <div>
      <el-button type="primary" icon="el-icon-setting" @click="goTo('Production')">Production</el-button>
      <el-button type="primary" icon="el-icon-delete" @click="goTo('Cleaning')">Cleaning</el-button>
      <el-button type="primary" icon="el-icon-delete" @click="goTo('Advanced')">Advanced</el-button>
      <el-button type="primary" icon="el-icon-search" @click="goTo('Service')">Service</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Pluto Vue App',
      radio1: 'Production'
    }
  },
  methods: {
    goTo: function (route) {
      this.$router.push({name: route})
    }
  }
}
</script>

