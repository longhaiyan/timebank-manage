
import * as Type from './types'

export default {

  [Type.M_USER_LIST_SUCCESS]:(state,payload)=>{
    Object.assign(state,{
      taskList:payload.data
    })
    console.log("M_USER_LIST_SUCCESS state",state)
  },
  [Type.M_USER_UPDATE_SUCCESS]:(state,payload)=>{
    Object.assign(state,{
      authStep:'success'
    })
  },
  [Type.M_USER_UPDATE_ERROR]:(state,payload)=>{
    Object.assign(state,{
      authStep:'error',
      authError:payload.message
    })
  },
}
