<template>
    <div class="">
        <h3 class="my-3">Leaderboard</h3>
        <div class="top-table">
            <el-table
                stripe
                :data="userlist"
                :default-sort = "{prop: 'score', order: 'descending'}"
            >
                <el-table-column
                    prop="name"
                />
                <el-table-column
                    prop="score"
                />
            </el-table>
        </div>

    </div>
</template>

<script>
    export default {
        props: {
            userlist: {
                type: Array,
                required: true
            }
        }
    }
</script>

<style>
    .top-table {
        overflow-y: scroll;
        bottom: 0px;
        position: absolute;
        top: 155px;
        width: 350px;
    }
    .el-table * {
        background-color: transparent!important;
        color: #fff;
        border: none!important;
    }
    .el-table {
        background-color: transparent;
        height: 100%;
    }
    .el-table__row--striped {
        background-color: #2c2334!important;
    }
    .el-table__header-wrapper {
        display: none;
    }

    .el-table .cell {
      font-size: 1.5em;
      line-height:20px;
    }

</style>
