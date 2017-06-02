
import {env} from '@/utils/config'

const api = {
  dev: {
    'charge':'/data?name=mirror',
    'deduct':'/data?name=mirror',
  },
  pro: {
    'charge':'/admin/account/pay/user/data',
    'deduct':'/admin/account/pay/user/data',

  }
}
export default api[env]
