/* 路由配置全写这里 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store';

import NotFound   from '../pages/errors/NotFound.vue';

import Index      from '../pages/index/'
import detail      from '../pages/detail/'
import Login      from '../pages/login/'
import Factory      from '../pages/factory/'
import Customer      from '../pages/customer/'
import Map        from '../pages/map/'
import Icon        from '../pages/icon/'
import manService        from '../pages/manService/'
import focus        from '../pages/about/focus'
import about        from '../pages/about/'
import Setting         from '../pages/setting/'
import Workspace         from '../pages/workspace/'
import Overview         from '../pages/overview/'
import Blackpage         from '../pages/overview/black_customer.vue'
import bind        from '../pages/bind/'
import train        from '../pages/train/'
import password        from '../pages/password/'
import uploadHZ        from '../pages/upload/ca_upload_hz.vue'
import uploadJM        from '../pages/upload/ca_upload_jm.vue'
import sign        from '../pages/sign/'
import my          from '../pages/my/'

import todo_2         from '../pages/my/todo_2.vue'
import setting      from '../pages/my/setting.vue'
import my_progress  from '../pages/my/my_progress.vue'
import company_name from '../pages/my/company_name.vue'

const document = global.document;

/* 开启debug模式 */
//Vue.config.debug = true

Vue.use(VueRouter);

const router = new VueRouter({
  //mode: 'history',
  base:(process.env.NODE_ENV === 'production'|| process.env.NODE_ENV === 'test' || process.env.NODE_ENV === 'preproduction')?"/wechat/":"/",
  //base: '/vip/',
  //linkActiveClass: 'active',
  //scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path:'/login',
      component:Login,
      meta: {
        title:'金财互联'
      }
    },
    {
      path: '/index',
      component: Index,
      meta: {
        title:'首页'
      }
    },
    {
      path: '/detail',
      component: detail,
      meta: {
        title:'概览'
      }
    },
    {
      path: '/map',
      component: Map,
      meta: {
        title:'门店地点'
      }
    },
    {
      path: '/factory',
      component: Factory,
      meta: {
        title:'我的服务门店'
      }
    },
    {
      path: '/customer',
      component: Customer,
      meta: {
        title:'企业信息'
      }
    },
    {
      path: '/blackpage',
      component: Blackpage,
      meta: {
        title:'概览'
      }
    },
    {
      path: '/icon',
      component: Icon,
      meta: {
        title:'财税大厅'
      }
    },
    {
      path: '/manService',
      component: manService,
      meta: {
        title:'进入人工服务'
      }
    } ,
    {
      path: '/about',
      component: about,
      meta: {
        title:'金财互联'
      }
    } ,
    {
      path: '/focus',
      component: focus,
      meta: {
        title:'欢迎关注'
      }
    } ,
    {
      path: '/bind',
      component: bind,
      meta: {
        title:'绑定企业'
      }
    } ,
    {
      path: '/train',
      component: train,
      meta: {
        title:'培训报名'
      }
    },
     {
      path: '/password',
      component: password,
      meta: {
        title:'设置密码'
      }
    },
    {
      path: '/uploadHZ',
      component: uploadHZ,
      meta: {
        title:'上传'
      }
    },
    {
      path: '/uploadJM',
      component: uploadJM,
      meta: {
        title:'上传'
      }
    },
    {
      path: '/sign',
      component: sign,
      meta: {
        title:'签到'
      }
    },
    {
      path: '/',
      component: Index,
      meta: {
        requiresAuth: true,
        title:'首页'
      }
    },
    {
      path: '*',
      component: Index,
      meta: {
        requiresAuth: true,
        title:'首页'
      }
    },
    {
      path: '/my',
      component: my,
      meta: {
        requiresAuth: true,
        title: '我的'
      }
    },
    {
      path: '/todo_2',
      component: todo_2,
      meta: {
        title: '代办事项'
      }
    },
    {
      path: '/setting',
      component: setting,
      meta: {
        title: '设置'
      }
    },
    {
      path: '/my_progress',
      component: my_progress,
      meta: {
        title: '我的进展'
      }
    },
    {
      path: '/company_name',
      component: company_name,
      meta: {
        title: '公司名称'
      }
    }

  ]
});

router.afterEach((route) => {
  // document.title = `${route.meta.title} - 金财互联`;
  document.title = `${route.meta.title}`;
});

router.beforeEach((to, from, next) => {
  console.log(to)
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const auth = store.state.account.auth;
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!auth.check()) {
      /*
      next({
        path: '/login',
        query: { redirect_url: to.fullPath },
      });
      return;*/
      next();
    }
    else{
       next();
    }
  }
  else {
    next();
  }
});

export default router;
