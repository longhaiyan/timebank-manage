<template>
    <div id="app">
        <el-row>
            <el-col :sm="4" style="background: #99a9bf;">
                <el-menu :router="true" :unique-opened=true default-active="2" class="el-menu-vertical-demo"
                         theme="dark">
                    <el-submenu index="user">
                        <template slot="title">用户信息管理</template>
                        <el-menu-item index="/user/list">账号管理</el-menu-item>
                        <el-menu-item index="/user/account">账户管理</el-menu-item>
                    </el-submenu>
                    <el-submenu index="task">
                        <template slot="title">任务管理</template>
                        <el-menu-item index="/task/recommend">推荐任务</el-menu-item>
                        <el-menu-item index="/task/report">举报任务</el-menu-item>
                        <el-menu-item index="/task/watch">任务监督</el-menu-item>
                    </el-submenu>
                    <el-submenu index="topic">
                        <template slot="title">帖子管理</template>
                        <el-menu-item index="/topic/recommend">帖子置顶</el-menu-item>
                        <el-menu-item index="/topic/report">举报帖子</el-menu-item>
                        <el-menu-item index="/topic/watch">帖子监督</el-menu-item>
                    </el-submenu>
                    <el-submenu index="sys">
                        <template slot="title">展示信息管理</template>
                        <el-menu-item index="/sys/swiper">首页轮播图</el-menu-item>
                        <el-menu-item index="/sys/friend">友情链接</el-menu-item>
                        <el-menu-item index="/sys/ad">广告区</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="/dispute">纠纷管理</el-menu-item>
                    <el-menu-item index="/message">系统通知管理</el-menu-item>

                </el-menu>
            </el-col>
            <el-col :sm="20">
                <router-view></router-view>
            </el-col>
        </el-row>
        <MyFooter/>

    </div>
</template>

<script>
  import MyFooter from './components/my_footer.vue'
  export default {
    name: 'app',
    data(){
      return {}
    },
    computed: {},
    methods: {},
    mounted() {
    },
    components: {
      MyFooter

    }
  }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        /*text-align: center;*/
        color: #2c3e50;
        /*background: #abcabc;*/
        /*height: 100%;*/
    }
</style>
