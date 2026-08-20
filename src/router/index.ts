import {createRouter, createWebHistory} from "vue-router"

// TODO: Pages
import NotFound from "../views/NotFound.vue"
import About from "../views/About.vue"
import Home from "../views/Home/Home.vue"
import RequestDemo from "../views/Request-Demo/RequestDemo.vue"
import Contact from "../views/Contact/Contact.vue"

const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/request-demo",
        component: RequestDemo
    },
    
    {
    path: "/contact",
    component: Contact
    },
    {   
        path: "/:pathMatch(.*)*",
        component: NotFound
    },
    {
        path: "/About",
        component: About
    }
    
    // TODO: Error pages route

]

export const router = createRouter({
    history: createWebHistory(),
    routes
})