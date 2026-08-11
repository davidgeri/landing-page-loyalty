import {createRouter, createWebHistory} from "vue-router"

// TODO: Pages
import NotFound from "../views/NotFound.vue"
import Home from "../views/Home/Home.vue"

const routes = [
    {
        path: "/",
        component: Home
    },
    {   
        path: "/:pathMatch(.*)*",
        component: NotFound
    },
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})