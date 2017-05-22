/**
 * Created by longhaiyan on 17/3/26.
 */
/*import Hello from '@/components/Hello'
 import Index from '@/views/index/index'
 import Intro from '@/views/intro'
 import Complain from '@/views/complain'
 import demo from '@/components/demoView/demo'
 import Task from '@/views/task/my_task'
 import Zone from '@/views/zone'*/

import UserDispute from '@/views/dispute/user_dispute'

import SystemMessage from '@/views/message/system_message'

import SysIndex from '@/views/sys/index'
import Ad from '@/views/sys/ad'
import FriendLink from '@/views/sys/friend_link'
import Swiper from '@/views/sys/swiper'

import TaskIndex from '@/views/task/index'
import RecommendTask from '@/views/task/recommend_task'
import ReportTask from '@/views/task/report_task'
import WatchTask from '@/views/task/watch_task'

import TopicIndex from '@/views/topic/index'
import RecommendTopic from '@/views/topic/recommend_topic'
import ReportTopic from '@/views/topic/report_topic'
import WatchTopic from '@/views/topic/watch_topic'

import UserIndex from '@/views/user/index'
import Account from '@/views/user/account'
import User from '@/views/user/user'

// import NewTask from '@/views/task/new_task'

import store from '@/store'
import routerQuery from './routerQuery'

let routes = [
  {
    path: '/user',
    name: 'userIndex',
    component: UserIndex,
    children: [
      {
        path: 'list',
        component: User,
      },
      {
        path: 'account',
        component: Account,
      },
    ],
  },
  {
    path: '/topic',
    name: 'topicIndex',
    component: TopicIndex,
    children: [
      {
        path: 'recommend',
        component: RecommendTopic,
      },
      {
        path: 'report',
        component: ReportTopic,
      },
      {
        path: 'watch',
        component: WatchTopic,
      },

    ],
  },
  {
    path: '/task',
    name: 'taskIndex',
    component: TaskIndex,
    children: [
      {
        path: 'recommend',
        component: RecommendTask,
      },
      {
        path: 'report',
        component: ReportTask,
      },
      {
        path: 'watch',
        component: WatchTopic,
      },
    ],
  },
  {
    path: '/sys',
    name: 'sysIndex',
    component: SysIndex,
    children: [
      {
        path: 'ad',
        component: Ad,
      },
      {
        path: 'friend',
        component: FriendLink,
      },
      {
        path: 'swiper',
        component: Swiper,
      }
    ],
  },
  {
    path: '/message',
    name: 'message',
    component: SystemMessage,
  },
  {
    path: '/dispute',
    name: 'dispute',
    component: UserDispute,
  },

]

function routesConfig (store) {
  // main-start

  // 为面包屑导航补全路由，存放在_path
  const itemPS = (it, td) => {
    if (true) {
      it._path = td._path
      // console.log("ps it",it)
    }
  }

  // 加工一下，补全每条路由的 fullpath
  routes.forEach((it1, i1) => {
    if (it1.children) {
      // console.log('it1',it1)
      // console.log('i1',i1)
      it1.children.forEach((it2, i2) => {
        // console.log('it2',it1)
        // console.log('i2',i1)
        itemPS(it2, {
          _path: it1.path + '/' + it2.path
        })
        // console.log('it2')
      })
    }

    itemPS(it1, {
      _path: it1.path
    })
  })

  return routes
  // main-end
}

export {
  routes,
  routesConfig
}
