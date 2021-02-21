<template>
  <el-container>
    <el-col style="text-align: center;">
      <h1>Enter Channel Name:</h1>
      <el-input
        class="mt-5"
        placeholder="Twitch username"
        v-model="user">
      </el-input>
      <div v-if="this.error" style="color: tomato;">{{ error }}</div>
      <el-button
        class="mt-5"
        style="display: inline-block;"
        type="success"
        @click="load_user">
        Load Twitch Jeoparty
      </el-button>
    </el-col>
  </el-container>
</template>

<script>
  export default {
    data() {
      return {
        user: '',
        error: ''
      }
    },
    methods: {
      load_user() {
        if(!this.user) {
          this.error = "Please enter a username"
          return false
        }
        this.$router.push({ path: `loading/${this.user}`})
      }
    }
  }
</script>

<style scoped>
  .el-container {
    max-width: 600px;
    margin: 10vh auto;
  }
</style>
