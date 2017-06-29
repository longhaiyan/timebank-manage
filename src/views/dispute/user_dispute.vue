<template>
    <div>
        <wrap title="用户纠纷处理">
            <div slot="content">
                <el-table
                        :data="reportData"
                        stripe
                        style="width: 100%">
                    <el-table-column type="expand">
                        <template scope="props">
                            <p>上报人ID：{{props.row.reportId}}</p>
                            <p>上报人实名：{{props.row.reportName}}</p>
                            <p>详情：{{props.row.detail}}</p>
                            <!--<p>处理人：{{props.row.admin}}</p>
                            <p>处理结果：{{props.row.result}}</p>
                            <p>处理时间：{{props.row.createTime}}</p>-->
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
                            prop="disputeId"
                            label="纠纷ID"
                            width="80">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="userName"
                            label="上报人昵称"
                            width="120">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="phone"
                            label="上报人联系方式"
                            width="150"
                    >
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="beReportName"
                            label="被举报人昵称"
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
    name:'UserDispute',
    data(){
      return {
        reportData: [
          {
            reportId:1,
            reportName:'龙海燕',
            detail:'这个人恶意接受任务',
            disputeId: 1,
            userName: 'lala',
            phone:'13505618325',
            beReportName:'long',
            status: 0,

            admin: 'timebank',
            createTime: "2017-5-10 12:00",
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