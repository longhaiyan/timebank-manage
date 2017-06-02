
import {env} from '@/utils/config'

const api = {
  dev: {
    'updateAuth':'/data?name=mirror',
    'userList':'/data?name=user_list',
    'userConfirm':'/data?name=auth_list',
    'search':'/data?name=search_user',
  },
  pro: {
    'updateAuth':'/admin/user/auth/update/data',
    'userList':'',
    'userConfirm':'/admin/user/auth/list/data',
    'search':'/admin/pay/user/info/data'
  }
}
export default api[env]
