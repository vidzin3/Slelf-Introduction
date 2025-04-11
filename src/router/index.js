// define router

import {createRouter,createWebHistory} from 'vue-router'
import home from '../views/home.vue'
import about from '../views/about.vue'
import experience from '../views/experience.vue'
import project from '../views/project.vue'
import exp from  '../components/exp.vue'
import edu from '../components/edu.vue'

const router = createRouter({
    history: createWebHistory(),
    routes : [
        {
            path: '/',
            component : home
        },
        {
            path: '/about',
            component : about
        },
        {
            path: '/experience',
            component : experience,
            children:[
                {
                    path: '/experience/exp',
                    component:exp
                },
                {
                    path: '/experience/edu',
                    component:edu
                },
                {
                    path: '/experience/work',
                    component:() => import("@/components/work.vue")
                },
            ]
        },
        {
            path: '/project',
            component: project
        }
    ]
})

export default router