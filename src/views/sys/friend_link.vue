<template>
    <div>
        <wrap title="友情链接配置">
            <div slot="content">
                <div style="text-align: right;margin-right: 50px;margin-bottom: 20px;">
                    <el-button type="primary" @click="recommendFormVisible = true">新增轮播图</el-button>
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
                            prop="title"
                            label="标题"
                            width="100">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="link"
                            label="对应链接"
                            width="230">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="place"
                            label="位置"
                            width="80"
                    >
                    </el-table-column>
                    <el-table-column label="操作" align="center">
                        <template scope="props">
                            <el-button type="text">删除</el-button>
                            <el-button type="text">修改</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <el-dialog title="新增友情链接" v-model="recommendFormVisible">
                    <el-form :model="recommendForm">
                        <el-form-item label="标题">
                            <el-input v-model="recommendForm.title"></el-input>
                        </el-form-item>
                        <el-form-item label="对应链接">
                            <el-input v-model="recommendForm.link"></el-input>
                        </el-form-item>
                        <el-form-item label="位置">
                            <el-input v-model="recommendForm.place"></el-input>
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
    name: 'FriendLink',
    data(){
      return {
        recommendData: [
          {
            picUrl: 'http:bank.longhaiyan.cn/picture/show?id=1',
            link: 'http:bank.longhaiyan.cn/task/list',
            title: '宣传',
            place: 1,
            imageUrl: ''
          }
        ],
        recommendForm: {
          link: '',
          title: '',
          place: '',
        },
        recommendFormVisible: false

      }
    },
    components: {
      Wrap
    }
  }
</script>