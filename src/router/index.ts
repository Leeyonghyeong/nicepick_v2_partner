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
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  const userStore = useUserStore()
  const { user } = storeToRefs(userStore)
  const accessToken = localStorage.getItem('accessToken')

  if (accessToken) {
    await userStore.getUser()

    if (user.value) {
      next('/franchise/dashboard')
    }
  }

  next()
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
        component: () => import('../components/login_join/JoinMain.vue'),
      },
      {
        path: '/franchisejoin',
        name: 'franchisejoin',
        component: () => import('../components/login_join/JoinFranchise.vue'),
      },
      {
        path: '/realtorjoin',
        name: 'realtorjoin',
        component: () => import('../components/login_join/JoinRealtor.vue'),
      },
      {
        path: '/joincomplete',
        name: 'joincomplete',
        component: () => import('../components/login_join/JoinComplete.vue'),
      },
      {
        path: '/findpw',
        name: 'findpw',
        component: () => import('../components/find_pw/FindPw.vue'),
      },
      {
        path: '/resetpw',
        name: 'resetpw',
        component: () => import('../components/find_pw/ResetPw.vue'),
      },
      {
        path: '/resetcomplete',
        name: 'resetcomplete',
        component: () => import('../components/find_pw/ResetComplete.vue'),
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

      {
        path: '/nicepickguide',
        name: 'nicepickguide',
        component: () => import('../components/guide/NicepickGuideMain.vue'),
      },
      {
        path: '/nicepickguide/brandguide',
        name: 'brandguide',
        component: () => import('../components/guide/BrandGuide.vue'),
      },
      {
        path: '/nicepickguide/commercialguide',
        name: 'commercialguide',
        component: () => import('../components/guide/CommercialGuide.vue'),
      },
      {
        path: '/nicepickguide/inquiriesguide',
        name: 'inquiriesguide',
        component: () => import('../components/guide/InquiriesGuide.vue'),
      },
      {
        path: '/nicepickguide/communityguide',
        name: 'communityguide',
        component: () => import('../components/guide/CommunityGuide.vue'),
      },
      {
        path: '/nicepickguide/matchguide',
        name: 'matchguide',
        component: () => import('../components/guide/MatchGuide.vue'),
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
        name: 'franchisedashboard',
        component: () =>
          import('../components/dashboard/franchise/dashboard/Dashboard.vue'),
      },
      {
        path: '/franchise/brand/management',
        name: 'management',
        component: () =>
          import('../components/dashboard/franchise/brand/Brand.vue'),
      },
      {
        path: '/franchise/brand/set',
        name: 'set',
        component: () =>
          import('../components/dashboard/franchise/brand/BrandSet.vue'),
      },
      {
        path: '/franchise/qna',
        name: 'qna',
        component: () =>
          import('../components/dashboard/franchise/qna/QnA.vue'),
      },

      {
        path: '/franchise/mymenu/myinfo',
        name: 'franchisemyinfo',
        component: () =>
          import('../components/dashboard/franchise/mymenu/MyInfo.vue'),
      },
      {
        path: '/franchise/mymenu/usagehistory',
        name: 'franchiseusagehistory',
        component: () =>
          import('../components/dashboard/franchise/mymenu/UsageHistory.vue'),
      },
      {
        path: '/franchise/mymenu/addkeyword',
        name: 'addkeyword',
        component: () =>
          import('../components/dashboard/franchise/mymenu/Keyword.vue'),
      },

      {
        path: '/franchise/ad',
        name: 'franchisead',
        component: () =>
          import('../components/dashboard/franchise/ad/AdItem.vue'),
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
        name: 'cart',
        component: () => import('../components/dashboard/Cart.vue'),
      },
      {
        path: '/payment',
        name: 'payment',
        component: () => import('../components/dashboard/Payment.vue'),
      },
      {
        path: '/franchise/notice',
        name: 'franchisenotice',
        component: () =>
          import('../components/dashboard/franchise/dashboard/Notice.vue'),
      },
      {
        path: '/franchise/noticemain',
        name: 'franchisenoticemain',
        component: () =>
          import('../components/dashboard/franchise/dashboard/NoticeMain.vue'),
      },
    ],
  },

  {
    path: '/',
    name: 'ChattingLayout',
    component: () => import('../layout/dashboard/franchise/ChattingLayout.vue'),
    children: [
      {
        path: '/franchise/chatting',
        name: 'franchisechatting',
        component: () =>
          import('../components/dashboard/franchise/qna/Chatting.vue'),
      },
    ],
  },

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
        path: '/partnerguide/cooperation',
        name: 'cooperationguide',
        component: () => import('../components/guide_partner/Cooperation.vue'),
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
          import('../component/guide_partner/question_guide/ServiceQna.vue'),
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
          import('../component/guide_partner/question_guide/AdQna.vue'),
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
