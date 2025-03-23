import {createRouter, createWebHistory} from 'vue-router'


const routes = [
    {
        path:"/login",
        component: ()=> import("@/views/login.vue")
    },
    {
        path:"/dashboard",
        component: ()=> import("@/views/dashboard.vue")
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router