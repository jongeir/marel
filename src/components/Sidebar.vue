<template>
  <div class="sidebar">
    <div class="actions-top">
      <a><i>MYND</i> <span>Belt T</span></a>
      <a><i>Xrey T</i> <span>Belt T</span></a>
      <a><i>Weigher</i> <span>Belt T</span></a>
    </div>
    <div class="actions-bottom">
      <button>Back</button>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'SideBar'
  }
</script>


<style lang="scss">
  .sidebar {
    background: grey;
    position: absolute;
    height: 100%;
    .actions-top {
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
      margin-top: 15px;
      font-size: 25px;
      color: white;
      display: block;
    }
  }
</style>
