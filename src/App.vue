<template>
  <div id="app">
    <el-container>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <el-main>
        <router-view/>
      </el-main>
      <el-footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar'
  import Sidebar from '@/components/Sidebar'
  export default {
    components: {
      Navbar,
      Sidebar
    },
    name: 'app',
    data () {
      return {
        msg: 'Welcome to Pluto Vue App'
      }
    }
  }
</script>
