
import {env} from '@/utils/config'

const api = {
  dev: {
    'updateAuth':'/data?name=mirror',
    'userList':'/data?name=auth_list'
  },
  pro: {
    'updateAuth':'/admin/user/auth/update/data',
    'userList':'/admin/user/auth/list/data'
  }
}
export default api[env]
