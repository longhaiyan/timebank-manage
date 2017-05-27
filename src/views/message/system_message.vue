<template>
    <div>
        <wrap title="系统通知记录">
            <div slot="content">
                <div style="text-align: right;margin-right: 50px;margin-bottom: 20px;">
                    <el-button type="primary" @click="recommendFormVisible = true">新增系统通知</el-button>
                </div>
                <el-table
                        :data="recommendData"
                        stripe
                        style="width: 100%">
                    <el-table-column
                            align="center"
                            type="index"
                            label="序号"
                            width="80">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="message"
                            label="通知内容"
                            width="300">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="userName"
                            label="用户昵称"
                            width="120">
                    </el-table-column>

                    <el-table-column
                            align="center"
                            prop="sysName"
                            label="操作人">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="status"
                            label="状态">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="createTime"
                            label="操作时间"
                            width="180"
                    >
                    </el-table-column>
                </el-table>
                <el-dialog title="新增推荐任务" v-model="recommendFormVisible">
                    <el-form :model="recommendForm" >
                        <el-form-item label="用户id">
                            <el-input v-model="recommendForm.taskId"></el-input>
                        </el-form-item>
                        <el-form-item label="消息内容">
                            <el-input type="textarea" v-model="recommendForm.order"></el-input>
                        </el-form-item>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click="recommendFormVisible = false">取 消</el-button>
                        <el-button type="primary" @click="recommendFormVisible = false">确 定</el-button>
                    </div>
                </el-dialog>
            </div>
        </wrap>
    </div>
</template>
<script>
  import Wrap from '@/components/wrap'
  export default{
    name:'SystemMessage',
    data(){
      return {
        recommendData: [
          {
            message: "对不起，您已违规操作！系统已经冻结您的账户，在冻结期间，您将无法参与线上的任何活动",
            userName: 'long',
            sysName: 'long',
            status:'发送成功',
            createTime:'2017-05-19  15:38:23'
          }
        ],
        recommendForm: {
          taskId: '',
          order: ''
        },
        recommendFormVisible: false
      }
    },
    components: {
      Wrap
    }
  }
</script>