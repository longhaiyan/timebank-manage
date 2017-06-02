
import * as Type from './types'

export default {

  [Type.M_USER_LIST_SUCCESS]:(state,payload)=>{
    Object.assign(state,{
      userList:payload.data
    })
    console.log("M_USER_LIST_SUCCESS state",state)
  },
  [Type.M_USER_CONFIRM_SUCCESS]:(state,payload)=>{
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
  [Type.M_SEARCH_SUCCESS]:(state,payload)=>{
    let searchArr = []
    searchArr.push(payload.data)
    Object.assign(state,{
      searchStep:'success',
      searchList:searchArr
    })
    console.log("搜索所得数据 state",state)
  },
  [Type.M_SEARCH_ERROR]:(state,payload)=>{
    Object.assign(state,{
      searchStep:'error',
      searchError:payload.message
    })
  },

}
