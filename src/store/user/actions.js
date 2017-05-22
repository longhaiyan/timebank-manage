
import * as Type from './types'
import api from './api'
import * as apiTools from '../../utils/api'

const actions = {
  [Type.A_USER_LIST_START]: ({commit, state, dispatch}, payload) => {
    return apiTools.req(api.userList,payload,rsp=>{
      commit(Type.M_USER_LIST_SUCCESS,rsp)
      console.log("获取最新任务成功",rsp)
    },msg=>{
      console.log("获取最新任务失败",msg)
    })
  },
  [Type.A_USER_UPDATE]: ({commit, state, dispatch}, payload) => {
    console.log("实名认证 payload",payload)
    return apiTools.post(api.updateAuth,payload,rsp=>{
      commit(Type.M_USER_UPDATE_SUCCESS,rsp)
      console.log("实名认证成功成功",rsp)
    },msg=>{
      commit(Type.M_USER_UPDATE_ERROR,msg)
      console.log("实名认证失败",msg)
    })
  },


  /*[Type.A_ZONE_INFO]:({commit,state,dispatch},payload)=>{
    console.log("获取当前主页信息",payload)
    return apiTools.req(api.userInfo,payload,rsp=>{
      commit(Type.M_ZONE_INFO_SUCCESS,rsp)
    },msg=>{
      commit(Type.M_ZONE_INFO_ERROR,msg)
    })
  },
  [Type.A_SEND_MSG]:({commit,state,dispatch},payload)=>{
    console.log("发送私信内容",payload)
    return apiTools.post(api.send,payload,rsp=>{
      commit(Type.M_SEND_MSG_SUCCESS,rsp)
    },msg=>{
      commit(Type.M_SEND_MSG_ERROR,msg)
    })
  }*/


}

export default actions
