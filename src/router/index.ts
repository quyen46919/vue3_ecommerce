import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '@/pages/home/Homepage.vue'
import Login from '@/pages/login/Login.vue'
import Signup from '@/pages/signup/Signup.vue'
import ProductDetail from '@/pages/productDetail/ProductDetail.vue'
import Cart from '@/pages/cart/Cart.vue'
import WishList from '@/pages/profile/WishList.vue'
import Checkout from '@/pages/checkout/Checkout.vue'
import OrderCompleted from '@/pages/orderCompleted/OrderCompleted.vue'
import OrderCancelled from '@/pages/orderCancelled/OrderCancelled.vue'
import Profile from '@/pages/profile/Profile.vue'
import ChangePassword from '@/pages/profile/ChangePassword.vue'
import ManageAddress from '@/pages/profile/ManageAddress.vue'
import Account from '@/pages/profile/Account.vue'
// import Filter from '@/pages/filter/Filter.vue'
import PageNotFound from '@/pages/pageNotFound/PageNotFound.vue'
import { useAuth } from '@/store/authStore'
import { isEmpty } from 'lodash'

const router = createRouter({
  history: createWebHistory(''),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Homepage
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/product-detail/:id',
      name: 'product-detail',
      component: ProductDetail
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: Checkout
    },
    {
      path: '/wishlist',
      name: 'wishlist',
      component: WishList
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/order-completed',
      name: 'order-completed',
      component: OrderCompleted
    },
    {
      path: '/order-cancelled',
      name: 'order-cancelled',
      component: OrderCancelled
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/change-password',
      name: 'change-password',
      component: ChangePassword
    },
    {
      path: '/manage-address',
      name: 'manage-address',
      component: ManageAddress
    },
    {
      path: '/account',
      name: 'account',
      component: Account
    },
    // {
    //   path: '/filter',
    //   name: 'filter',
    //   component: Filter
    // },
    {
      path: '/:pathMatch(.*)*',
      component: PageNotFound
    }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

router.beforeEach((to, _, next) => {
  const user = (localStorage.getItem('auth') && (JSON.parse(localStorage.getItem('auth') || '') as any)) || {}
  if (
    to.name !== 'login' &&
    to.name !== 'signup' &&
    isEmpty(user) &&
    !(to.name === 'home' || to.name === 'product-detail' || to.name === 'filter' || to.name === 'cart')
  )
    next({ name: 'login' })
  else next()
})

router.beforeEach((to, _, next) => {
  const user = (localStorage.getItem('auth') && (JSON.parse(localStorage.getItem('auth') || '') as any)) || {}
  if ((to.name === 'login' || to.name === 'signup') && !isEmpty(user)) next({ name: '' })
  else next()
})

export default router
