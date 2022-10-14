// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import request from './httpConfig/http'
import { Message } from 'element-ui'
import '../static/css/iconfont.css'

Vue.use(ElementUI)
Vue.prototype.$http = request
Vue.prototype.$message = Message
Vue.config.productionTip = false


router.beforeEach((to, from, next) => {
  /** 如果已经登陆后又访问/login,表示注销 */
  if(to.path==='/login'){
    if(localStorage.getItem('user')){
      localStorage.removeItem('user')
    }
    next()
  }
  /** 判断该路由是否需要登录权限 */
  if (to.meta.requireAuth) {
    if(localStorage.getItem('user')){ //判断本地是否存在user
      next();
    }else {
      next({path: '/login'})
    }
  }
  else {
    next();
  }
});



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router:router,
  components: { App },
  template: '<App/>'
})
