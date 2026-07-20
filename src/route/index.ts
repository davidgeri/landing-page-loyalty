import {createRouter, createWebHistory} from "vue-router"
import ErrorPages from '../error_pages/ErrorPages.vue'
import Test from '../testing/Test.vue'

const routes = [
    {
        path: "/",
        component: Test
    },
    // TODO: Error pages route
    {   
        path: "/:pathMatch(.*)*",
        component: ErrorPages
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})