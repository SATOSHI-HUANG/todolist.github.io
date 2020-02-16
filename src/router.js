import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes:[
        {
            path: '/all',
            name: 'all'
        },
        // {
        //     path: '/active',
        //     name: 'active'
        // },
        // {
        //     path: '/completed',
        //     name: 'completed'
        // },
        // {
        //     path: '*',
        //     name: '/all'
        // }
    ]
})
