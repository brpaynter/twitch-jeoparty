<template>
  <el-container>
    <el-header height="90px">
      <router-link
        to="/"
        style="color:#fff;text-decoration:none;">
        <h1>Twitch Jeoparty</h1>
      </router-link>
    </el-header>
    <router-view></router-view>
  </el-container>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
  .el-header {
    background-color: #18181b;
    color: #fff;
    text-align: center;
  }
  .el-header h1 {
    font-size: 4em;
  }
</style>
