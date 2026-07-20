import {createRouter, createWebHistory} from "vue-router"
import ErrorPages from '../error_pages/ErrorPages.vue'
import Testingpages from '../testing/Testingpages.vue'

const routes = [
    {
        path: "/",
        component: Testingpages
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