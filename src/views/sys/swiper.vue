<template>
    <div>
        <wrap title="轮播图配置">
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
                            <el-button type="text">删除</el-button>
                            <el-button type="text">修改</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <el-dialog title="新增轮播页面" v-model="recommendFormVisible">
                    <el-form :model="recommendForm">
                        <el-form-item label="对应链接">
                            <el-input v-model="recommendForm.link"></el-input>
                        </el-form-item>
                        <el-form-item label="主题">
                            <el-input v-model="recommendForm.title"></el-input>
                        </el-form-item>
                        <el-form-item label="位置">
                            <el-input v-model="recommendForm.place"></el-input>
                        </el-form-item>
                        <el-form-item label="上传图片">
                            <el-upload
                                    class="avatar-uploader"
                                    action="http://bank.longhaiyan.cn/picture/upload/project"
                                    name="uploadFile"
                                    :show-file-list="false"
                            >
                                <img v-if="recommendForm.imageUrl" :src="recommendForm.imageUrl" class="avatar">
                                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                            </el-upload>
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
    name: 'SwiperSetting',
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