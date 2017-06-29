<template>
    <wrap title="信用管理">
        <div slot="content">
            <el-tabs type="border-card">
                <el-tab-pane>
                    <span slot="label"><i class="el-icon-date"></i> 提升信用分数</span>
                    <!--<div style="width: 500px;">-->
                    <el-form ref="rechargeForm" :model="rechargeForm" :rules="rechargeFormRules" label-width="150px">
                        <el-form-item label="账号ID" prop="userId">
                            <el-input v-model="rechargeForm.userId"></el-input>
                        </el-form-item>
                        <el-form-item label="提升信用分数数量" prop="count">
                            <el-input-number v-model="rechargeForm.count"></el-input-number>

                        </el-form-item>
                        <el-form-item label="备注" prop="result">
                            <el-input v-model="rechargeForm.result"></el-input>
                        </el-form-item>

                        <el-form-item>
                            <el-checkbox-group v-model="rechargeForm.check">
                                <el-checkbox label="我已确认信息无误"></el-checkbox>
                            </el-checkbox-group>
                        </el-form-item>

                    </el-form>
                    <div style="text-align: center;">
                        <el-button type="primary" @click.stop="onCharge">确认提升</el-button>
                    </div>
                    <!--</div>-->
                </el-tab-pane>

                <el-tab-pane>
                    <span slot="label"><i class="el-icon-date"></i> 降低信用分数</span>
                    <el-form ref="deductForm" :rules="deductFormRules" :model="deductForm" label-width="150px">
                        <el-form-item label="账号ID" prop="userId">
                            <el-input v-model="deductForm.userId"></el-input>
                        </el-form-item>
                        <el-form-item label="扣除信用分数数量" prop="count">
                            <el-input-number v-model="rechargeForm.count"></el-input-number>

                        </el-form-item>
                        <el-form-item label="备注" prop="result">
                            <el-input v-model="deductForm.result"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-checkbox-group v-model="deductForm.check">
                                <el-checkbox label="我已确认信息无误"></el-checkbox>
                            </el-checkbox-group>
                        </el-form-item>

                    </el-form>
                    <div style="text-align: center;">
                        <el-button type="primary" @click.stop="onDeduct">确认扣除</el-button>
                    </div>
                </el-tab-pane>
                <el-tab-pane>
                    <span slot="label"><i class="el-icon-date"></i> 信用操作记录</span>
                    <el-table
                            align="center"
                            :data="deductData"
                            stripe
                            style="width: 100%">
                        <el-table-column type="expand">
                            <template scope="props">
                                <p>备注：{{props.row.result}}</p>
                            </template>
                        </el-table-column>
                        <el-table-column
                                align="center"
                                prop="userId"
                                label="用户ID"
                                width="80">
                        </el-table-column>
                        <el-table-column
                                align="center"
                                prop="name"
                                label="用户真实姓名"
                                width="180">
                        </el-table-column>
                        <el-table-column
                                align="center"
                                prop="type"
                                label="类型"
                        >
                        </el-table-column>
                        <el-table-column
                                align="center"
                                prop="number"
                                label="信用分数"
                        ></el-table-column>
                        <el-table-column
                                align="center"
                                prop="createTime"
                                label="操作时间"
                                width="150"
                        >
                        </el-table-column>
                        <el-table-column
                                align="center"
                                prop="admin"
                                label="操作人">
                        </el-table-column>
                        <el-table-column
                                align="center"
                                prop="status"
                                label="操作状态"
                        >
                        </el-table-column>

                    </el-table>
                </el-tab-pane>

            </el-tabs>
        </div>
    </wrap>
</template>
<script>
  import Wrap from '@/components/wrap'
  export default{
    name: 'credit',
    data(){
      return {
        rechargeFormRules:{
          userId: {
            required: true,
            validator: this.checkUserId,
            trigger: 'blur'
          },
          count: {
            required: true,
            validator: this.checkMoney,
            trigger: 'blur,change'
          },
          result: {required: true, message: '请输入备注', trigger: 'blur'},

        },
        deductFormRules:{
          userId: {
            required: true,
            validator: this.checkUserId,
            trigger: 'blur'
          },
          count: {
            required: true,
            validator: this.checkMoney,
            trigger: 'blur,change'
          },
          result: {required: true, message: '请输入备注', trigger: 'blur'},

        },

        rechargeForm:{
          userId: this.$route.query.userId || '',
          count:'1',
          result:'',
          message:'亲爱的XXX 用户，你的账户已成功充值 XX 个时间币，请查收，' +
          '如有疑问，请拨打热线电话：13505618325，谢谢!充值时间币个数：',
          check:''
        },
        deductForm:{
          userId: this.$route.query.userId || '',
          count:'1',
          result:'',
          message:'亲爱的XXX 用户，由于您的违规行为，本系统将扣除 XX 个时间币，' +
          '作为惩罚。如有疑问，请拨打热线电话：13505618325，谢谢。',
          check:''
        },
        deductData:[
          {
            userId:1,
            name:'龙海燕',
            type:'扣除',
            number:'20',
            result:'举报奖励',
            createTime:'2017-05-02 12:33',
            admin:'timebank',
            status:'成功',
          },

        ]
      }
    },
    components: {
      Wrap
    }
  }
</script>