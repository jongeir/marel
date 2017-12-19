<template>
  <div class="service-page">
    <div class="service-buttons">
      <el-row :gutter="20">
        <el-col :span="6"><div class="grid-content"><el-button type="primary" round>CAN</el-button></div></el-col>
        <el-col :span="6"><div class="grid-content"><el-button type="primary" round>Pins</el-button></div></el-col>
        <el-col :span="6"><div class="grid-content"><el-button type="primary" round>Logs</el-button></div></el-col>
        <el-col :span="6"><div class="grid-content"><el-button type="primary" round>Firewall</el-button></div></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Service',
    methods: {
    }
  }
</script>

<style lang="scss">
  .service-page {
    margin-top:100px;
    .service-buttons {
      width: 70%;
      margin: auto;
      .el-button--primary {
        width: 100%
      }
    }
  }
</style>
