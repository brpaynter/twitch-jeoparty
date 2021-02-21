<template>
  <el-container>
    <el-col>
      <h1>Loading...</h1>
      <img src='/img/loading.svg' alt="" id="loader">
      <router-link
        v-if="error"
        to="/">
        <el-button type="error">
          Failed to load, try again
        </el-button>
      </router-link>
    </el-col>
  </el-container>
</template>

<script>
import twitchChat from '@/service/twitchchat.js'
  export default {
    props: {
      user: String
    },
    data() {
      return {
        error: false
      }
    },
    mounted(){
      console.log({user: this.user})
      twitchChat.watch_twitch_chat(this.user)
    },
    methods: {
      message_callback(user, message) {
        console.log({user: user, message: message})
      }
    }
  }
</script>

<style scoped>
  .el-container {
    max-width: 600px;
    margin: 10vh auto;
  }
  #loader {
    display: block;
    margin: 30px auto;
    width: 75%;
  }
</style>
