import Vue from 'vue'
import VueRouter from 'vue-router'
import Upload from '@/components/Upload'
import Login from "@/components/Login";


Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    { path: '/', redirect: '/main' },
    // 登录的路由规则
    { path: '/login', component: Login },
    // 后台主页的路由规则
    {
      path: '/main',
      name: 'Upload',
      component: Upload,
      meta:{requireAuth:true}
    },
    {path:'*',
    redirect:'/main'}
  ]
})
