import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'defaultLayout',
    component: () => import('../layout/DefaultLayout.vue'),
    children: [
      {
        path: '/',
        name: 'Main',
        component: () => import('../views/Main.vue'),
      },
    ],
  },
  {
    path: '/',
    name: 'emptyLayout',
    component: () => import('../layout/EmptyLayout.vue'),
    children: [
      {
        path: '/login',
        name: 'login',
        component: () => import('../component/login_join/Login.vue'),
      },
      {
        path: '/join',
        name: 'join',
        component: () => import('../component/login_join/JoinMain.vue'),
      },
      {
        path: '/franchisejoin',
        name: 'franchisejoin',
        component: () => import('../component/login_join/JoinFranchise.vue'),
      },
      {
        path: '/realtorjoin',
        name: 'realtor',
        component: () => import('../component/login_join/JoinRealtor.vue'),
      },
      {
        path: '/joincomplete',
        name: 'joincomplete',
        component: () => import('../component/login_join/JoinComplete.vue'),
      },
      {
        path: '/findpw',
        name: 'findpw',
        component: () => import('../component/find_pw/FindPw.vue'),
      },
      {
        path: '/resetpw',
        name: 'resetpw',
        component: () => import('../component/find_pw/ResetPw.vue'),
      },
      {
        path: '/resetcomplete',
        name: 'resetcomplete',
        component: () => import('../component/find_pw/ResetComplete.vue'),
      },
      {
        path: '/withdrawal',
        name: 'withdrawal',
        component: () =>
          import('../component/dashboard/franchise/mymenu/Withdrawal.vue'),
      },
      {
        path: '/withdrawalcomplete',
        name: 'withdrawalcomplete',
        component: () =>
          import(
            '../component/dashboard/franchise/mymenu/CompleteWithdrawal.vue'
          ),
      },
    ],
  },
  {
    path: '/',
    name: 'DashboardLayout',
    component: () => import('../layout/DashboardLayout.vue'),
    children: [
      {
        path: '/franchise/brand/management',
        name: 'management',
        component: () =>
          import('../component/dashboard/franchise/brand/Brand.vue'),
      },
      {
        path: '/franchise/brand/set',
        name: 'set',
        component: () =>
          import('../component/dashboard/franchise/brand/BrandSet.vue'),
      },
      {
        path: '/franchise/qna',
        name: 'qna',
        component: () => import('../component/dashboard/franchise/qna/QnA.vue'),
      },

      {
        path: '/franchise/mymenu/myinfo',
        name: 'myinfo',
        component: () =>
          import('../component/dashboard/franchise/mymenu/MyInfo.vue'),
      },
      {
        path: '/franchise/mymenu/usagehistory',
        name: 'usagehistory',
        component: () =>
          import('../component/dashboard/franchise/mymenu/UsageHistory.vue'),
      },
      {
        path: '/franchise/mymenu/addkeyword',
        name: 'addkeyword',
        component: () =>
          import('../component/dashboard/franchise/mymenu/Keyword.vue'),
      },
      {
        path: '/cart',
        name: 'cart',
        component: () => import('../component/dashboard/Cart.vue'),
      },
      {
        path: '/payment',
        name: 'payment',
        component: () => import('../component/dashboard/Payment.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return { left: 0, top: 0 }
  },
  routes,
})

export default router
