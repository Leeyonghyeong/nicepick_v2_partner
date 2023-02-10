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

      {
        path: '/nicepickguide',
        name: 'nicepickguide',
        component: () => import('../component/guide/NicepickGuideMain.vue'),
      },
      {
        path: '/nicepickguide/brandguide',
        name: 'brandguide',
        component: () => import('../component/guide/BrandGuide.vue'),
      },
      {
        path: '/nicepickguide/commercialguide',
        name: 'commercialguide',
        component: () => import('../component/guide/CommercialGuide.vue'),
      },
      {
        path: '/nicepickguide/inquiriesguide',
        name: 'inquiriesguide',
        component: () => import('../component/guide/InquiriesGuide.vue'),
      },
      {
        path: '/nicepickguide/communityguide',
        name: 'communityguide',
        component: () => import('../component/guide/CommunityGuide.vue'),
      },
      {
        path: '/nicepickguide/matchguide',
        name: 'matchguide',
        component: () => import('../component/guide/MatchGuide.vue'),
      },
    ],
  },
  {
    path: '/',
    name: 'FranchiseDashboardLayout',
    component: () =>
      import('../layout/dashboard/franchise/DashboardLayout.vue'),
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
        name: 'franchisemyinfo',
        component: () =>
          import('../component/dashboard/franchise/mymenu/MyInfo.vue'),
      },
      {
        path: '/franchise/mymenu/usagehistory',
        name: 'franchiseusagehistory',
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
        path: '/franchise/ad',
        name: 'ad',
        component: () =>
          import('../component/dashboard/franchise/ad/AdItem.vue'),
      },

      {
        path: '/franchise/dashboard',
        name: 'franchisedashboard',
        component: () =>
          import('../component/dashboard/franchise/dashboard/Dashboard.vue'),
      },
    ],
  },

  {
    path: '/',
    name: 'NewpageDashboardLayout',
    component: () =>
      import('../layout/dashboard/franchise/NewpageDashboardLayout.vue'),
    children: [
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
      {
        path: '/franchise/notice',
        name: 'franchisenotice',
        component: () =>
          import('../component/dashboard/franchise/dashboard/Notice.vue'),
      },
      {
        path: '/franchise/noticemain',
        name: 'franchisenoticemain',
        component: () =>
          import('../component/dashboard/franchise/dashboard/NoticeMain.vue'),
      },
    ],
  },

  {
    path: '/',
    name: 'RealtorDashboardLayout',
    component: () => import('../layout/dashboard/realtor/DashboardLayout.vue'),
    children: [
      {
        path: '/realtor/dashboard',
        name: 'realtordashboard',
        component: () =>
          import('../component/dashboard/realtor/dashboard/Dashboard.vue'),
      },
      {
        path: '/realtor/notice',
        name: 'realtornotice',
        component: () =>
          import('../component/dashboard/realtor/dashboard/Notice.vue'),
      },
      {
        path: '/realtor/noticemain',
        name: 'realtornoticemain',
        component: () =>
          import('../component/dashboard/realtor/dashboard/NoticeMain.vue'),
      },
      {
        path: '/realtor/realtor',
        name: 'realtor',
        component: () =>
          import('../component/dashboard/realtor/realtor/Realtor.vue'),
      },
      {
        path: '/realtor/mymenu/myinfo',
        name: 'realtormyinfo',
        component: () =>
          import('../component/dashboard/realtor/mymenu/MyInfo.vue'),
      },
      {
        path: '/realtor/mymenu/usagehistory',
        name: 'realtorusagehistory',
        component: () =>
          import('../component/dashboard/realtor/mymenu/Usagehistory.vue'),
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
