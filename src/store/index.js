/**
 * Created by longhaiyan on 17/3/19.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import account from './account'


Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    account

  }
})

export default store

