import Vue from 'vue'
import Router from 'vue-router';
import recom from '@/components/recom'
import hotList from '@/components/hotlist'
import search from '@/components/search'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        { path: '/', redirect: '/recom' },
        {
            path: '/recom', component: recom,
            meta: {
                keepAlive: true
            }
        },
        {
            path: '/hotlist', component: hotList,
            meta: {
                keepAlive: true
            }
        },
        {
            path: '/search',
            component: search,
            meta: {
                keepAlive: false
            }
        }
    ]
})
