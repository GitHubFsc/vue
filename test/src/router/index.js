import Vue from 'vue'
import Router from 'vue-router'

/*一级路由*/
import a from '@/components/a'
import b from '@/components/b'
import c from '@/components/c'
import d from '@/components/d'
import e from '@/components/e'
import qwe from '@/components/qwe'

/*二级路由*/
import c1 from '@/components/child/c1'
import c2 from '@/components/child/c2'
import c3 from '@/components/child/c3'


Vue.use(Router)

export default new Router({
  mode:"hash",
  /*mode:"history",*/
  routes: [
    {
      path: '/',
      name: 'a',
      component: a,
      meta:{
        footShow:true,
      }
    },
    {
      path: '/b',
      name: 'b',
      component: b,
      meta:{
        footShow:true,
      }
    },
    {
      path: '/c',
      name: 'c',
      component: c,
      children:[
        {path: '/c/', name: 'c1',component: c1 },
        {path: '/c/c2', name: 'c2',component: c2 },
        {path: '/c/c3', name: 'c3',component: c3 },
      ],
      /*meta:{
        footShow:false,
      }*/
    },
    {
      path: '/d',
      name: 'd',
      component: d,
      meta:{
        footShow:true,
      }
    },
    {
      path: '/e',
      name: 'e',
      component: e,
      meta:{
        footShow:true,
      }
    },
    {
      path: '/qwe',
      name: 'qwe',
      component: qwe,
      /*meta:{
        footShow:false,
      }*/
    }
  ]
})
