<template>
    <jeoparty />
</template>

<script>
import jeoparty from './components/jeoparty.vue'

export default {
  name: 'App',
  components: {
    jeoparty
  },
  data: function() {
      return {
      }
  }
}
</script>

<style>
    #maincontainer {
        height: calc(100vh - 60px);
    }
</style>
