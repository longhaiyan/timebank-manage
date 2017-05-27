<template>
    <div>
        <wrap title="帖子置顶管理">
            <div slot="content">
                <div style="text-align: right;margin-right: 50px;margin-bottom: 20px;">
                    <el-button type="primary" @click="recommendFormVisible = true">新增置顶帖子</el-button>
                </div>
                <el-table
                        :data="recommendData"
                        stripe
                        style="width: 100%">
                    <el-table-column
                            align="center"
                            type="index"
                            label="序号"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="topicId"
                            label="帖子ID"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="userName"
                            label="用户昵称"
                            width="180">
                    </el-table-column>

                    <el-table-column
                            align="center"
                            prop="title"
                            label="内容">
                    </el-table-column>
                    <el-table-column label="操作" align="center">
                        <template scope="props">
                            <el-button type="text">查看</el-button>
                            <el-button type="text">取消置顶</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <el-dialog title="新增推荐任务" v-model="recommendFormVisible">
                    <el-form :model="recommendForm" :inline="true">
                        <el-form-item label="置顶帖子ID" >
                            <el-input v-model="recommendForm.topicId"></el-input>
                        </el-form-item>
                        <el-form-item label="位置" >
                            <el-input v-model="recommendForm.topicId"></el-input>
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
    name:'RecommendTopic',
    data(){
      return {
        recommendData:[
          {
            topicId:1,
            userName:'long',
            title:'帮忙拿快递呀'
          }
        ],
        recommendForm:{
          topicId:'',
        },
        recommendFormVisible:false
      }
    },
    components: {
      Wrap
    }
  }
</script>