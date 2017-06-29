<style>
    .my-wrap .search-btn{
        width: 300px;
    }
</style>
<template>
    <div>
        <wrap title="用户管理">
            <div slot="content">
                <el-form :inline="true">
                    <el-form-item>
                        <el-input class="search-btn" v-model="formData.name" placeholder="用户昵称、邮箱或手机号"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSearch">搜索</el-button>
                        <el-button type="primary" @click="onClear">清除搜索结果</el-button>
                    </el-form-item>
                </el-form>
                <template v-if="searchTableVisible">
                    <p>搜索结果</p>
                    <el-table
                            :data="searchList"
                            style="width: 100%">
                        <!--<el-table-column type="expand">
                            <template scope="props">
                                <div v-if="props.row.userType !== 0" label-position="left" inline
                                     class="demo-table-expand">
                                    <template v-if="props.row.userType === 1 || props.row.userType === 3">
                                        <p>学号：<span>{{ props.row.student.sno }}</span></p>
                                        <p>学院：<span>{{ props.row.student.dept }}</span></p>
                                        <p>班级：<span>{{ props.row.student.major }}</span></p>
                                    </template>
                                    <template v-else>
                                        <p>教师号： <span>{{ props.row.teacher.sno }}</span></p>
                                        <p>职务：<span>{{ props.row.teacher.dept }}</span></p>
                                    </template>
                                </div>
                                <div v-else>无信息</div>
                            </template>
                        </el-table-column>-->
                        <el-table-column
                                align="center"
                                prop="userId"
                                label="用户ID"
                                width="100"
                        >
                        </el-table-column>
                        <!--<el-table-column
                                v-if="student.name"
                                align="center"
                                prop="student.name"
                                label="真实姓名"
                                width="100"
                        >
                        </el-table-column>-->
                        <el-table-column
                                align="center"
                                prop="userName"
                                label="昵称lll"
                                width="100"
                        >
                        </el-table-column>
                        <el-table-column
                                align="center"
                                prop="cellphone"
                                label="联系方式"
                                width="100"
                        >
                        </el-table-column>
                        <!--<el-table-column
                                align="center"
                                prop="student.dept"
                                label="学院班级/职位"
                                :width="200"
                                >
                        </el-table-column>-->
                        <el-table-column
                                width="200"
                                align="center"
                                prop="email"
                                label="邮箱"
                        >
                        </el-table-column>
                        <el-table-column
                                width="120"
                                align="center"
                                prop="userType"
                                label="身份"

                        >
                        </el-table-column>
                        <el-table-column label="操作" align="center">
                            <template scope="props">
                                <el-button type="text">查看</el-button>
                                <!--<el-button v-if="props.row.userType == 3 || props.row.userType == 4 " type="text"
                                           @click.stop="onAuth(props.row)">认证

                                </el-button>-->
                                <el-button type="text">冻结</el-button>
                                <el-button type="text" @click.stop="onManageCount(props.row)">管理账户</el-button>
                                <el-button type="text">修改个人信息</el-button>

                            </template>
                        </el-table-column>
                    </el-table>
                </template>
                <p>用户列表</p>
                <el-table
                        height="350"
                        :data="userList"
                        style="width: 100%">
                    <el-table-column type="expand">
                        <template scope="props">
                            <div v-if="props.row.userType !== 0" label-position="left" inline
                                 class="demo-table-expand">
                                <template v-if="props.row.userType === 1 || props.row.userType === 3">
                                    <p>学号：<span>{{ props.row.student.sno }}</span></p>
                                    <p>学院：<span>{{ props.row.student.dept }}</span></p>
                                    <p>班级：<span>{{ props.row.student.major }}</span></p>
                                </template>
                                <template v-else>
                                    <p>教师号： <span>{{ props.row.teacher.tno }}</span></p>
                                    <p>职务：<span>{{ props.row.teacher.dept }}</span></p>
                                </template>
                            </div>
                            <div v-else>无信息</div>
                        </template>
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="userId"
                            label="用户ID"
                            width="100"
                    >
                    </el-table-column>
                    <!--<el-table-column
                            v-if="student.name"
                            align="center"
                            prop="student.name"
                            label="真实姓名"
                            width="100"
                    >
                    </el-table-column>-->
                    <el-table-column
                            align="center"
                            prop="userName"
                            label="昵称"
                            width="100"
                    >
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="cellphone"
                            label="联系方式"
                            width="100"
                    >
                    </el-table-column>
                    <!--<el-table-column
                            align="center"
                            prop="student.dept"
                            label="学院班级/职位"
                            :width="200"
                            >
                    </el-table-column>-->
                    <el-table-column
                            width="200"
                            align="center"
                            prop="email"
                            label="邮箱"
                    >
                    </el-table-column>
                    <el-table-column
                            width="120"
                            align="center"
                            prop="userType"
                            label="身份"
                            :formatter="formatStatus"
                    >
                    </el-table-column>

                    <el-table-column label="操作" align="center">
                        <template scope="props">
                            <el-button type="text">查看</el-button>
                            <!--<el-button v-if="props.row.userType == 3 || props.row.userType == 4 " type="text"
                                       @click.stop="onAuth(props.row)">认证
                            </el-button>-->
                            <el-button type="text">冻结</el-button>
                            <el-button type="text" @click.stop="onManageCount(props.row)">管理账户</el-button>
                            <el-button type="text">修改个人信息</el-button>

                        </template>
                    </el-table-column>


                </el-table>
                <!--<el-dialog title="实名认证" v-model="formVisible">
                    <el-form :model="authForm" :inline="true">
                        <el-form-item label="处理结果">
                            <el-select v-model="authForm.auth" placeholder="请选择处理结果">
                                <el-option label="不通过" value="0"></el-option>
                                <el-option label="通过" value="1"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click="formVisible = false">取 消</el-button>
                        <el-button type="primary" @click="onSubmit">确 定</el-button>
                    </div>
                </el-dialog>-->
            </div>
        </wrap>
    </div>
</template>
<script>
  import {mapActions, mapState} from  'vuex'
  import * as UserType from '@/store/user/types'
  import Wrap from '@/components/wrap'
  export default{
    name: 'User',
    data(){
      return {
        formData: {
          userId: this.$route.query.userId || '',
          name: this.$route.query.name || ''
        },
        formVisible:false,
        authForm: {
          auth:''
        },
        myUserId:null,
        tableData: [{
          "userId": 1,
          "userName": "timebank",
          "avatarId": 0,
          "cellphone": "",
          "sex": 0,
          "userType": 1,
          "description": "",
          "email": "bank@bank.cn",
          "birthday": "1970-01-01 00:00:00",
          "student": {
            "id": 1,
            "createTime": "2017-05-16 19:06:30",
            "modifyTime": "2017-05-16 19:06:30",
            "sno": 432,
            "userId": 1,
            "name": "342",
            "dept": "43",
            "major": "432",
            "remark": ""
          },
          "teacher": null
        }, {
          "userId": 1,
          "userName": "timebank",
          "avatarId": 0,
          "cellphone": "",
          "sex": 0,
          "userType": 3,
          "description": "",
          "email": "bank@bank.cn",
          "birthday": "1970-01-01 00:00:00",
          "student": {
            "id": 1,
            "createTime": "2017-05-16 19:06:30",
            "modifyTime": "2017-05-16 19:06:30",
            "sno": 432,
            "userId": 1,
            "name": "342",
            "dept": "43",
            "major": "432",
            "remark": ""
          },
          "teacher": null
        }, {
          "userId": 1,
          "userName": "timebank",
          "avatarId": 0,
          "cellphone": "",
          "sex": 0,
          "userType": 3,
          "description": "",
          "email": "bank@bank.cn",
          "birthday": "1970-01-01 00:00:00",
          "student": {
            "id": 1,
            "createTime": "2017-05-16 19:06:30",
            "modifyTime": "2017-05-16 19:06:30",
            "sno": 432,
            "userId": 1,
            "name": "342",
            "dept": "43",
            "major": "432",
            "remark": ""
          },
          "teacher": null
        }, {
          "userId": 1,
          "userName": "timebank",
          "avatarId": 0,
          "cellphone": "",
          "sex": 0,
          "userType": 4,
          "description": "",
          "email": "bank@bank.cn",
          "birthday": "1970-01-01 00:00:00",
          "student": null,
          "teacher": {
            "id": 1,
            "createTime": "2017-05-16 19:06:30",
            "modifyTime": "2017-05-16 19:06:30",
            "sno": 432,
            "userId": 1,
            "name": "342",
            "dept": "43",
            "major": "432",
            "remark": ""
          }
        }
        ],
        searchTableVisible:false
      }
    },
    computed:{
      ...mapState({
        userList:store=>store.user.userList,
        userStep:store=>store.user.userStep,
        userError:store=>store.user.userError,
        searchList:store=>store.user.searchList,
        searchStep:store=>store.user.searchStep,
        searchError:store=>store.user.searchError,

      })
    },
    methods: {
      ...mapActions({
        userUpdate:UserType.A_USER_UPDATE,
        userListStart:UserType.A_USER_LIST_START,
        userSearch:UserType.A_USER_SEARCH,


      }),
      onSearch(){
        let name = this.formData.name
        let self = this

        let query = {
          name
        }

        if (name) {
          this.GM_routerPush({
            query
          })
          this.userSearch({name:name}).then(()=>{
            if(self.searchStep === 'error'){
              self.$message.error(self.searchError)
            }else{
              self.$message.success('获取成功')
              self.searchTableVisible = true
              console.log("搜索结果",self.searchList)
            }
          })
        }else{
          self.searchTableVisible = false
        }
      },
      onClear(){
        this.formData.name = ''
        this.GM_routerPush({})
        this.searchTableVisible = false

      },
      formatStatus(row) {
        switch (row.userType) {
          case 0:
            return '未实名认证'
          case 1:
            return '学生'
          case 2:
            return '老师'
          case 3:
            return '学生认证中'
          case 4:
            return '老师认证中'
          case 5:
            return '认证失败'
          default:
            return '未知'
        }
      },
      onAuth(row){
        this.formVisible = true
        console.log("aa",row)
        this.myUserId = row.userId
        console.log("this.myUserId",this.myUserId)
      },
      onManageCount(row){
        this.GM_routerPush({
          path: '/user/account',
          query: {
            userId: row.userId
          }
        })
      },
      onSubmit(){
        let self = this
        if(parseInt(this.authForm.user) === 0 || parseInt(this.authForm.auth) === 1){
          this.userUpdate({userId:self.myUserId,auth:parseInt(self.authForm.auth)}).then(()=>{
            self.formVisible = false
            if(self.authStep !== 'error'){
              if(parseInt(this.authForm.auth) === 0){
                self.userListStart()
                self.$message.success("操作成功，认证不通过")
              }else{
                self.$message.success("操作成功，认证通过")
              }
            }else{
              self.$message.error(self.authError)
            }
          })
        }else{
          self.$message.info("请选择处理结果")
        }
      }
    },
    mounted(){
      this.onSearch()
    },
    components: {
      Wrap
    }
  }
</script>