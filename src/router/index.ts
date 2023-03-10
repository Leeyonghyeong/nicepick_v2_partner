import { storeToRefs } from 'pinia'
import {
  createRouter,
  createWebHistory,
  NavigationGuard,
  NavigationGuardNext,
  RouteLocationNormalized,
  RouteRecordRaw,
} from 'vue-router'
import { useUserStore } from '../store/user'

const loginCheck: NavigationGuard = async (
  _to: RouteLocationNormalized,
  _from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  const userStore = useUserStore()
  const { user } = storeToRefs(userStore)
  const accessToken = localStorage.getItem('accessToken')

  if (accessToken) {
    await userStore.getUser()

    if (user.value) {
      next('/franchise/dashboard')
    } else {
      next()
    }
  } else {
    next()
  }
}

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
        beforeEnter: loginCheck,
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
        component: () => import('../views/signin/Signin.vue'),
        beforeEnter: loginCheck,
      },
      {
        path: '/join',
        name: 'join',
        component: () => import('../views/signup/Signup.vue'),
        beforeEnter: loginCheck,
      },
      {
        path: '/franchisejoin',
        name: 'franchisejoin',
        component: () => import('../views/signup/FranchiseSignup.vue'),
        beforeEnter: loginCheck,
      },
      {
        path: '/realtorjoin',
        name: 'realtorjoin',
        component: () => import('../components/login_join/JoinRealtor.vue'),
        beforeEnter: loginCheck,
      },
      {
        path: '/joincomplete',
        name: 'joincomplete',
        component: () => import('../views/signup/SignupComplete.vue'),
      },
      {
        path: '/findpw',
        name: 'findpw',
        component: () => import('../views/find_pw/FindPw.vue'),
        beforeEnter: loginCheck,
      },
      {
        path: '/resetpw',
        name: 'resetpw',
        component: () => import('../views/find_pw/ResetPw.vue'),
        beforeEnter: loginCheck,
      },
      {
        path: '/resetcomplete',
        name: 'resetcomplete',
        component: () => import('../views/find_pw/ResetComplete.vue'),
        beforeEnter: loginCheck,
      },
      {
        path: '/withdrawal',
        name: 'withdrawal',
        component: () =>
          import('../components/dashboard/franchise/mymenu/Withdrawal.vue'),
      },
      {
        path: '/withdrawalcomplete',
        name: 'withdrawalcomplete',
        component: () =>
          import(
            '../components/dashboard/franchise/mymenu/CompleteWithdrawal.vue'
          ),
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
        path: '/franchise/dashboard',
        name: 'FranchiseDashboard',
        component: () => import('../views/franchise/dashboard/Dashboard.vue'),
      },
      {
        path: '/franchise/brand/management',
        name: 'FranchiseManagement',
        component: () =>
          import('../views/franchise/management/BrandManagement.vue'),
      },
      {
        path: '/franchise/brand/management/info',
        name: 'FranchiseManagementInfo',
        component: () =>
          import('../views/franchise/management/BrandManagementInfo.vue'),
      },
      {
        path: '/franchise/qna',
        name: 'FranchiseQna',
        component: () => import('../views/qna/FranchiseQna.vue'),
      },

      {
        path: '/franchise/mymenu/myinfo',
        name: 'FranchiseMyInfo',
        component: () => import('../views/franchise/mymenu/MyInfo.vue'),
      },
      {
        path: '/franchise/mymenu/usagehistory',
        name: 'franchiseusagehistory',
        component: () =>
          import('../components/dashboard/franchise/mymenu/UsageHistory.vue'),
      },
      {
        path: '/franchise/mymenu/addkeyword',
        name: 'AddKeyword',
        component: () => import('../views/franchise/mymenu/Keyword.vue'),
      },

      {
        path: '/franchise/ad',
        name: 'FranchiseAd',
        component: () => import('../views/franchise/product/AdProduct.vue'),
      },
    ],
  },

  {
    path: '/',
    name: 'FranchiseNewpageLayout',
    component: () =>
      import('../layout/dashboard/franchise/FranchiseNewpageLayout.vue'),
    children: [
      {
        path: '/cart',
        name: 'Cart',
        component: () => import('../views/cart/Cart.vue'),
      },
      {
        path: '/payment',
        name: 'Payment',
        component: () => import('../views/pay/Payment.vue'),
      },
      {
        path: '/franchise/notice',
        name: 'FranchiseNotice',
        component: () => import('../views/franchise/dashboard/Notice.vue'),
      },
      {
        path: '/franchise/notice/detail/:id',
        name: 'FranchiseNoticeDetail',
        component: () =>
          import('../views/franchise/dashboard/NoticeDetail.vue'),
      },
    ],
  },

  // {
  //   path: '/',
  //   name: 'ChattingLayout',
  //   component: () => import('../layout/dashboard/franchise/ChattingLayout.vue'),
  //   children: [
  //     {
  //       path: '/franchise/chatting',
  //       name: 'franchisechatting',
  //       component: () =>
  //         import('../components/dashboard/franchise/qna/Chatting.vue'),
  //     },
  //   ],
  // },

  {
    path: '/',
    name: 'RealtorDashboardLayout',
    component: () => import('../layout/dashboard/realtor/RealtorLayout.vue'),
    children: [
      {
        path: '/realtor/dashboard',
        name: 'realtordashboard',
        component: () =>
          import('../components/dashboard/realtor/dashboard/Dashboard.vue'),
      },

      {
        path: '/realtor/realtor',
        name: 'realtor',
        component: () =>
          import('../components/dashboard/realtor/realtor/Realtor.vue'),
      },
      {
        path: '/realtor/mymenu/myinfo',
        name: 'realtormyinfo',
        component: () =>
          import('../components/dashboard/realtor/mymenu/MyInfo.vue'),
      },
      {
        path: '/realtor/mymenu/usagehistory',
        name: 'realtorusagehistory',
        component: () =>
          import('../components/dashboard/realtor/mymenu/Usagehistory.vue'),
      },
      {
        path: '/realtor/ad',
        name: 'realtorad',
        component: () =>
          import('../components/dashboard/realtor/ad/AdItem.vue'),
      },
    ],
  },

  {
    path: '/',
    name: 'RealtorNewpageLayout',
    component: () =>
      import('../layout/dashboard/realtor/RealtorNewpageLayout.vue'),
    children: [
      {
        path: '/realtor/notice',
        name: 'realtornotice',
        component: () =>
          import('../components/dashboard/realtor/dashboard/Notice.vue'),
      },
      {
        path: '/realtor/noticemain',
        name: 'realtornoticemain',
        component: () =>
          import('../components/dashboard/realtor/dashboard/NoticeMain.vue'),
      },
    ],
  },

  {
    path: '/',
    name: 'PartnerGuideLayout',
    component: () => import('../layout/guide_partner/PartnerGuideLayout.vue'),
    children: [
      {
        path: '/partnerguide/login',
        name: 'partnerguidelogin',
        component: () =>
          import('../components/guide_partner/join_guide/Login.vue'),
      },
      {
        path: '/partnerguide/franchisejoin',
        name: 'franchisejoinguide',
        component: () =>
          import('../components/guide_partner/join_guide/FranchiseJoin.vue'),
      },
      {
        path: '/partnerguide/realtorjoin',
        name: 'realtorjoinguide',
        component: () =>
          import('../components/guide_partner/join_guide/RealtorJoin.vue'),
      },
      {
        path: '/partnerguide/cooperationjoin',
        name: 'cooperationjoinguide',
        component: () =>
          import('../components/guide_partner/join_guide/CooperationJoin.vue'),
      },
      {
        path: '/partnerguide/franchiseservice',
        name: 'franchiseservice',
        component: () =>
          import(
            '../components/guide_partner/service_guide/FranchiseService.vue'
          ),
      },
      {
        path: '/partnerguide/realtorservice',
        name: 'realtorservice',
        component: () =>
          import(
            '../components/guide_partner/service_guide/RealtorService.vue'
          ),
      },
      {
        path: '/partnerguide/cooperationservice',
        name: 'cooperationserviceguide',
        component: () =>
          import(
            '../components/guide_partner/service_guide/CooperationService.vue'
          ),
      },
      {
        path: '/partnerguide/cooperationad',
        name: 'cooperationadguide',
        component: () =>
          import('../components/guide_partner/ad_guide/CooperationAd.vue'),
      },
      {
        path: '/partnerguide/franchisead',
        name: 'franchiseadad',
        component: () =>
          import('../components/guide_partner/ad_guide/FranchiseAd.vue'),
      },
      {
        path: '/partnerguide/realtorad',
        name: 'realtorad',
        component: () =>
          import('../components/guide_partner/ad_guide/RealtorAd.vue'),
      },
      {
        path: '/partnerguide/serviceqna',
        name: 'serviceqna',
        component: () =>
          import('../components/guide_partner/question_guide/ServiceQna.vue'),
      },
      {
        path: '/partnerguide/partnerqna',
        name: 'partnerqna',
        component: () =>
          import('../components/guide_partner/question_guide/PartnerQna.vue'),
      },
      {
        path: '/partnerguide/adqna',
        name: 'adqna',
        component: () =>
          import('../components/guide_partner/question_guide/AdQna.vue'),
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

router.beforeEach(
  async (
    _to: RouteLocationNormalized,
    _from: RouteLocationNormalized,
    next: NavigationGuardNext
  ) => {
    const userStore = useUserStore()
    const { user } = storeToRefs(userStore)
    const accessToken = localStorage.getItem('accessToken')

    if (accessToken && !user.value) {
      await userStore.getUser()
    }

    next()
  }
)

export default router
