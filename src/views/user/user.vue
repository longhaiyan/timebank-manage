<template>
    <div>
        <wrap title="用户管理">
            <div slot="content">
                <el-form :inline="true">
                    <el-form-item>
                        <el-input v-model="formData.userId" placeholder="用户id"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-input v-model="formData.userName" placeholder="用户昵称"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSearch">搜索</el-button>
                    </el-form-item>
                </el-form>
                <el-table
                        :data="tableData"
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
                                    <p>教师号： <span>{{ props.row.teacher.sno }}</span></p>
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
                            label="真实姓名"
                            width="100"
                    >
                        <template scope="props">
                            <span v-if="props.row.userType === 1 || props.row.userType === 3">
                                {{props.row.student.name}}
                            </span>
                            <span v-else="props.row.teacher">
                                {{props.row.teacher.name}}
                            </span>

                        </template>
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
                            width="120"
                            align="center"
                            prop="userType"
                            label="是否实名认证"
                            :formatter="formatStatus"
                    >
                    </el-table-column>
                    <el-table-column label="操作" align="center">
                        <template scope="props">
                            <el-button type="text">查看</el-button>
                            <el-button v-if="props.row.userType == 3 || props.row.userType == 4 " type="text">认证
                            </el-button>
                            <el-button type="text">冻结</el-button>
                            <el-button type="text">关闭</el-button>
                            <el-button type="text">修改个人信息</el-button>

                        </template>
                    </el-table-column>


                </el-table>
            </div>
        </wrap>
    </div>
</template>
<script>
  import Wrap from '@/components/wrap'
  export default{
    name: 'User',
    data(){
      return {
        formData: {
          userId: this.$route.query.userId || '',
          userName: this.$route.query.userName || ''
        },
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
        ]
      }
    },
    methods: {
      onSearch(){
        let userId = this.formData.userId,
          userName = this.formData.userName

        let query = {
          userId,
          userName
        }

        if (userId || userName) {
          this.GM_routerPush({
            query
          })
          console.log("发送搜索请求 未实现")
        }
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
      }
    },
    components: {
      Wrap
    }
  }
</script>