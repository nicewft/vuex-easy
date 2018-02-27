import Vue from 'vue'
import Router from 'vue-router'
import One from '@/views/1one/one.vue'
import Two from '@/views/2two/two.vue'
import Three from '@/views/3three/three.vue'
import Four from '@/views/4four/four.vue'
import Five from '@/views/5five/five.vue'
import Six from '@/views/6six/six.vue'


Vue.use(Router)

export default new Router({
  linkActiveClass:'list-active',
  routes: [
    {
      path: '/',
      redirect: '/one'
    },
    {
      path: '/one',
      component: One
    },
    {
      path: '/two',
      component: Two
    },
    {
      path: '/three',
      component: Three
    },
    {
      path: '/four',
      component: Four
    }
    // {
    //   path: '/five',
    //   component: Five
    // }
    // {
    //   path: '/six',
    //   component: Six
    // }
  ]
})
