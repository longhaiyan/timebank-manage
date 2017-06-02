<template>
    <div id="app">
        <el-row style="height: 100%;">
            <el-col :sm="4" style="background: rgb(50, 65, 87);height: 100%;">
                <el-menu :router="true" :unique-opened=true default-active="2" class="el-menu-vertical-demo"
                         theme="dark">
                    <el-submenu index="user">
                        <template slot="title">用户信息管理</template>
                        <el-menu-item index="/user/list">用户管理</el-menu-item>
                        <el-menu-item index="/user/confirm">实名认证</el-menu-item>
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
                    <el-menu-item index="/credit">信用管理</el-menu-item>
                    <el-menu-item index="/message">系统通知管理</el-menu-item>
                </el-menu>
            </el-col>
            <el-col :sm="20" style="overflow-y: scroll;">
                <div style="text-align: right;margin-right: 30px;" v-if="userName">
                    <i class="el-icon-setting"></i>
                    <span class="sys-name">{{userName}}您好！</span>
                    <el-button type="text" @click="onLoyout">退出</el-button>
                </div>
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
      return {
        userName:'管理员-龙海燕'
      }
    },
    computed: {},
    methods: {
      onLoyout(){
        let self = this
        this.$confirm('您要退出系统么?', '提示', {
          confirmButtonText: '是的',
          cancelButtonText: '不，我只是点错了',
          type: 'warning'
        }).then(() => {
          self.userName = ''
          this.$message({
            type: 'success',
            message: '退出成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消退出'
          });
        });
      }
    },
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
        height: 100%;
    }
</style>
