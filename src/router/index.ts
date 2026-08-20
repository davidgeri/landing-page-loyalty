import { createRouter, createWebHistory } from "vue-router";

// TODO: Pages
import NotFound from "../views/NotFound.vue";
import Home from "../views/Home/Home.vue";
import Product from "../views/Product/Product.vue";
import Detail from "../views/Product/Detail.vue";
import About from "../views/About/About.vue";
import RequestDemo from "../views/Request-Demo/RequestDemo.vue";
import FAQ from "../views/FAQ/FAQ.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/request-demo",
    component: RequestDemo,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/product",
    component: Product,
  },
  {
    path: "/product/:slug",
    name: "product-detail",
    component: Detail,
  },
  {
    path: "/faq",
    component: FAQ,
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
