<template>
  <div class="advanced-page">
    <div class="progress-bars">
      <el-progress :text-inside="true" :stroke-width="18" :percentage="0"></el-progress>
      <el-progress :text-inside="true" :stroke-width="18" :percentage="70"></el-progress>
      <el-progress :text-inside="true" :stroke-width="18" :percentage="100" status="success"></el-progress>
      <el-progress :text-inside="true" :stroke-width="18" :percentage="50" status="exception"></el-progress>
    </div>
    <el-progress type="circle" :percentage="0"></el-progress>
    <el-progress type="circle" :percentage="25"></el-progress>
    <el-progress type="circle" :percentage="100" status="success"></el-progress>
    <el-progress type="circle" :percentage="50" status="exception"></el-progress>
  </div>
</template>

<script>
  export default {
    name: 'Advanced',
    data () {
      return {
        msg: 'Hello from advanced'
      }
    },
    methods: {

    }
  }
</script>

<style lang="scss">
  .advanced-page{
    margin-top:60px;
  }
  .progress-bars{
    .el-progress--line {
      margin-bottom: 15px;
    }
    width: 30%;
    margin: 0 auto;
  }
</style>
