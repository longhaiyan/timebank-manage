<template>
    <div>
        <wrap title="广告链接配置">
            <div slot="content">
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
                            prop="picUrl"
                            label="图片地址"
                            width="230">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="link"
                            label="对应链接"
                            width="230">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="title"
                            label="主题"
                            width="100">
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
                            <el-button type="text">修改</el-button>
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
    name: 'Ad',
    data(){
      return{
        recommendData: [
          {
            picUrl: 'http:bank.longhaiyan.cn/picture/show?id=1',
            link: 'http:bank.longhaiyan.cn/task/list',
            title: '宣传',
            place: 1,
            imageUrl: ''
          },
          {
            picUrl: 'http:bank.longhaiyan.cn/picture/show?id=1',
            link: 'http:bank.longhaiyan.cn/task/list',
            title: '宣传',
            place: 2,
            imageUrl: ''
          },

        ],
      }
    },
    components: {
      Wrap
    }

  }
</script>