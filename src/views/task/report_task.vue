<template>
    <div>
        <wrap title="被举报任务管理">
            <div slot="content">
                <el-table
                        :data="reportData"
                        stripe
                        style="width: 100%">
                    <el-table-column type="expand">
                        <template scope="props">
                            <p>处理人：{{props.row.admin}}</p>
                            <p>处理结果：{{props.row.result}}</p>
                            <p>处理原因：{{props.row.reason}}</p>
                            <p>处理时间：{{props.row.createTime}}</p>
                        </template>
                    </el-table-column>
                    <el-table-column
                            align="center"
                            type="index"
                            label="序号"
                            width="80">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="taskId"
                            label="任务ID"
                            width="80">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="userName"
                            label="用户昵称"
                            width="120">
                    </el-table-column>

                    <el-table-column
                            align="center"
                            prop="title"
                            label="简介"
                            width="300"
                    >
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="reportCount"
                            label="被举报次数"
                            width="120"
                    >
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="status"
                            label="处理状态"
                            width="100"
                            :formatter="formatStatus"
                    >
                    </el-table-column>
                    <el-table-column label="操作" align="center">
                        <template scope="props">
                            <el-button type="text">查看</el-button>
                            <el-button type="text" @click="reportFormVisible = true">处理</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <el-dialog title="处理被投诉任务" v-model="reportFormVisible">
                    <el-form :model="reportForm">
                        <el-form-item label="处理结果">
                            <el-select v-model="reportForm.result" placeholder="请选择处理结果">
                                <el-option label="保留" value="0"></el-option>
                                <el-option label="删除" value="1"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="处理原因">
                            <el-input type="textarea" v-model="reportForm.reason"></el-input>
                        </el-form-item>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click="reportFormVisible = false">取 消</el-button>
                        <el-button type="primary" @click="reportFormVisible = false">确 定</el-button>
                    </div>
                </el-dialog>
            </div>
        </wrap>
    </div>
</template>
<script>
  import Wrap from '@/components/wrap'

  export default{
    name: 'ReportTask',
    data(){
      return {
        reportData: [
          {
            taskId: 1,
            userName: 'lala',
            title: '来我店里买东西有大优惠啦',
            reportCount: 3,
            status: 0,
            admin: 'long',
            createTime: "2017-5-10 12:00",
            reason: '情况属实',
            result: '删除'

          },

        ],
        reportFormVisible: false,
        reportForm: {
          result:'',
          reason:''
        }

      }
    },
    methods:{
      formatStatus(row){
        switch (row.userType) {
          case 0:
            return '未处理'
          case 1:
            return '已处理'
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