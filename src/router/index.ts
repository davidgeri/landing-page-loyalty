import {createRouter, createWebHistory} from "vue-router"

// TODO: Pages
import Testingpages from '../testing/Testingpages.vue'
import NotFound from "../views/NotFound.vue"

const routes = [
    {
        path: "/",
        component: Testingpages
    },
    {   
        path: "/:pathMatch(.*)*",
        component: NotFound
    }
    
    // TODO: Error pages route

]

export const router = createRouter({
    history: createWebHistory(),
    routes
})