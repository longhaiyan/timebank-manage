<template>
    <div>
        <wrap title="账户管理">
            <div slot="content">
                <el-tabs type="border-card">
                    <el-tab-pane>
                        <span slot="label"><i class="el-icon-date"></i> 时间币充值</span>
                        <!--<div style="width: 500px;">-->
                            <el-form ref="rechargeForm" :model="rechargeForm" :rules="rechargeFormRules" label-width="130px">
                                <el-form-item label="充值账号ID" prop="userId">
                                    <el-input v-model="rechargeForm.userId"></el-input>
                                </el-form-item>
                                <el-form-item label="充值时间币个数" prop="count">
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
                                <el-button type="primary" @click.stop="onCharge">确认充值</el-button>
                            </div>
                        <!--</div>-->
                    </el-tab-pane>

                    <el-tab-pane>
                        <span slot="label"><i class="el-icon-date"></i> 扣除时间币</span>
                        <el-form ref="deductForm" :rules="deductFormRules" :model="deductForm" label-width="130px">
                            <el-form-item label="账号ID" prop="userId">
                                <el-input v-model="deductForm.userId"></el-input>
                            </el-form-item>
                            <el-form-item label="扣除时间币个数" prop="count">
                                <el-input v-model="deductForm.count"></el-input>
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
                        <span slot="label"><i class="el-icon-date"></i> 时间币操作记录</span>
                        <el-table
                                :data="deductData"
                                stripe
                                style="width: 100%">
                            <el-table-column type="expand">
                                <template scope="props">
                                    <p>备注：{{props.row.result}}</p>
                                </template>
                            </el-table-column>
                            <el-table-column
                                    prop="userId"
                                    label="用户ID"
                                    width="180">
                            </el-table-column>
                            <el-table-column
                                    prop="name"
                                    label="用户真实姓名"
                                    width="180">
                            </el-table-column>
                            <el-table-column
                                    prop="type"
                                    label="类型"
                                    :formatter="formatType"
                            >
                            </el-table-column>
                            <el-table-column
                                    prop="createTime"
                                    label="操作时间">
                            </el-table-column>
                            <el-table-column
                                    prop="admin"
                                    label="操作人">
                            </el-table-column>
                            <el-table-column
                                    prop="status"
                                    label="操作状态"
                                    :formatter="formatStatus"
                            >
                            </el-table-column>

                        </el-table>
                      </el-tab-pane>

                </el-tabs>
            </div>
        </wrap>
    </div>
</template>
<script>
  import Wrap from '@/components/wrap'
  import {mapActions,mapState} from  'vuex'
  import * as AccountType from  '@/store/account/types'
  export default{
    name: 'Account',
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
            type:0,
            result:'社团活动需要',
            createTime:'2017-5-2 12:00',
            admin:'long',
            status:0,
          },
          {
            userId:1,
            name:'龙海燕',
            type:0,
            result:'社团活动需要',
            createTime:'2017-5-2 12:00',
            admin:'long',
            status:0,
          },
          {
            userId:1,
            name:'龙海燕',
            type:0,
            result:'社团活动需要',
            createTime:'2017-5-2 12:00',
            admin:'long',
            status:0,
          },

        ]
      }
    },
    computed:{
      ...mapState({
        chargeStep:state => state.account.chargeStep,
        chargeError:state => state.account.chargeError,
        deductStep:state => state.account.deductStep,
        deductError:state => state.account.deductError,
      })
    },
    methods:{
      ...mapActions({
        chargeMoney:AccountType.A_CHARGE_MONEY,
        deductMoney:AccountType.A_DEDUCT_MONEY,
      }),
      formatStatus(row) {
        switch (row.status) {
          case 0:
            return '操作成功'
          case 1:
            return '操作失败'
          default:
            return '未知'
        }
      },
      formatType(row) {
        switch (row.status) {
          case 0:
            return '充值'
          case 1:
            return '扣除'
          default:
            return '未知'
        }
      },
      onCharge(){
        let self = this
        self.$refs.rechargeForm.validate(value => {
          if(value && self.rechargeForm.check){
            console.log("充值")
            this.chargeMoney({
              userId:parseInt(self.rechargeForm.userId),
              money:parseInt(self.rechargeForm.count),
              remark:self.rechargeForm.result,
              type:1
            }).then(()=>{
              if(self.chargeStep === 'error'){
                self.$message.error(self.chargeError)
              }else {
                self.$message.success('充值成功')
              }
            })
          }else{
            self.$message.warning('请确认信息')
            console.log("不符合充值条件")
          }
        })
      },
      onDeduct(){
        let self = this
        self.$refs.deductForm.validate(value => {
          if(value && self.deductForm.check){
            this.deductMoney({
              userId:parseInt(self.deductForm.userId),
              money:parseInt(self.deductForm.count),
              remark:self.deductForm.result,
              type:2
            }).then(()=>{
              if(self.deductStep === 'error'){
                self.$message.error(self.deductError)
              }else {
                self.$message.success('扣除成功')
              }
            })
          }else{
            self.$message.warning('请确认信息')
            console.log("不符合扣除条件")
          }
        })
      },

      checkMoney(rule, value, callback){
        if (parseInt(value) < 1) {
          return callback(new Error('请输入大于1的整数'))
        }
        return callback()
      },
      checkUserId(rule, value, callback){
        console.log("ffd",parseInt(value))
        if (!Number.isInteger(parseInt(value)) || parseInt(value) < 1) {
          return callback(new Error('请输入正确的ID'))
        }
        return callback()
      },

    },
    components: {
      Wrap
    }
  }
</script>