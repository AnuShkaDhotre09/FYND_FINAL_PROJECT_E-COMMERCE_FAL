import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'
import ProductDetailPage from '../views/ProductDetailPage.vue'
import ProductsPage from '../views/ProductsPage.vue'
import CartPage from '../views/CartPage.vue'
import NotFoundPageVue from '@/views/NotFoundPage.vue'
import Payment from '../views/Payment.vue'
Vue.use(VueRouter)

const routes = [
  {
    path:'/sign-up',
    component:SignUp,
    name:'SignUp'

   },
   {
    path:'/login',
    component:Login,
    name:'LoginForm'

   },

  {
   path:'/products',
   name:'Products',
   component:ProductsPage,
  },
  {
    path:'/products/:id',
    name:'ProductDetail',
    component:ProductDetailPage,
   },
   {
    path:'/cart',
    name:'Cart',
    component:CartPage,
   },
   {
    path:'/',
    redirect:'/login',
   },
   {
    path:'/payment',
    component:Payment,
    name:'Payment'

   },
   {
    path:'*',
    component:NotFoundPageVue,

   }
   
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
