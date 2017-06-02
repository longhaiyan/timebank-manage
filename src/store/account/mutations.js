
import * as Type from './types'

export default {
  [Type.M_CHARGE_SUCCESS]:(state,payload)=>{
    Object.assign(state,{
      chargeStep:'success'
    })
  },
  [Type.M_CHARGE_ERROR]:(state,payload)=>{
    Object.assign(state,{
      chargeStep:'error',
      chargeError:payload.message,
    })
  },
  [Type.M_DEDUCT_SUCCESS]:(state,payload)=>{
    Object.assign(state,{
      deductStep:'success'
    })
  },
  [Type.M_DEDUCT_ERROR]:(state,payload)=>{
    Object.assign(state,{
      deductStep:'error',
      deductError:payload.message,
    })
  },

}
