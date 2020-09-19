import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import store from '../store/index'
import Auth from '../components/_module/auth.vue'
import Reset from '../components/_module/reset.vue'
import HomePages from '../views/PageHomes.vue'
import Portofolio from '../components/_module/profilePortofolio.vue'
import profileCompany from '../components/_module/profileCompany.vue'
import PageHire from '../views/PageHire.vue'
import EditProfile from '../components/_module/profileEdit.vue'
import EditProfilePt from '../components/_module/profilePtEdit.vue'
import ChatRoom from '../components/_module/chatRoomPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home',
    name: 'HomePages',
    component: HomePages,
    meta: { requiresAuth: true }
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth,
    meta: { requiresVisitor: true }
  },
  {
    path: '/reset',
    name: 'Reset',
    component: Reset,
    meta: { requiresVisitor: true }
  },
  {
    path: '/profile-portofolio',
    name: 'Portofolio',
    component: Portofolio,
    meta: { requiresAuth: true }
  },
  {
    path: '/profile-company',
    name: 'profileCompany',
    component: profileCompany,
    meta: { requiresAuth: true }
  },
  {
    path: '/hire',
    name: 'PageHire',
    component: PageHire,
    meta: { requiresAuth: true }
  },
  {
    path: '/profile-edit',
    name: 'Edit',
    component: EditProfile,
    meta: { requiresAuth: true }
  },
  {
    path: '/profile-pt-edit',
    name: 'Editpt',
    component: EditProfilePt,
    meta: { requiresAuth: true }
  },
  {
    path: '/chat',
    name: 'ChatRoom',
    component: ChatRoom
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to landing page.
    if (!store.getters.isLogin) {
      next({
        path: '/'
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (store.getters.isLogin) {
      next({
        path: '/'
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router
