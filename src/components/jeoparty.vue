<template>
    <el-container>
        <el-header>
            <h1>Twitch Jeoparty</h1>

        </el-header>
        <el-container id="maincontainer">

            <el-main>
                Main
            </el-main>

            <el-aside width="350px">
                <topList :userlist="userlist"></topList>
            </el-aside>

        </el-container>
    </el-container>
</template>

<script>
    import topList from '@/components/top-list.vue'

    export default {
      components: {
        topList
      },
      data: function() {
          return {
              userlist: [
                {
                    name: 'Test',
                    score: 5
                },
                {
                    name: 'Test2',
                    score: 9
                },
                {
                    name: 'Test3',
                    score: 5
                },
                {
                    name: 'Test4',
                    score: 7
                },
                {
                    name: 'Test5',
                    score: 3
                },
                {
                    name: 'Test6',
                    score: 1
                },
                {
                    name: 'Test7',
                    score: 4
                },
              ]
          }
      }
    }

</script>

<style>
    .el-header, .el-footer {
      background-color: #18181b;
      color: #fff;
      text-align: center;
      line-height: 60px;
    }

    .el-aside {
      background-color: #1f1925;
      color: #fff;
      text-align: center;
    }

    .el-main {
      background-color: #E9EEF3;
      color: #333;
      text-align: center;
    }
</style>
