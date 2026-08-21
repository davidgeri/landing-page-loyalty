import { createRouter, createWebHistory } from "vue-router";

// TODO: Pages
import NotFound from "../views/NotFound.vue";
import Home from "../views/Home/Home.vue";
import Product from "../views/Product/Product.vue";
import Detail from "../views/Product/Detail.vue";
import About from "../views/About/About.vue";
import RequestDemo from "../views/Request-Demo/RequestDemo.vue";
import Contact from "../views/Contact/Contact.vue";
import FAQ from "../views/FAQ/FAQ.vue";
import DetailCm from "../views/DetailCM/DetailCm.vue";
import DetailLoyalty from "../views/DetailLoyalty/DetailLoyalty.vue";
import DetailBe from "../views/DetailBE/DetailBe.vue";

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
    path: "/contact",
    component: Contact,
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
    path: "/product/booking-engine",
    component: DetailBe,
  },
  {
    path: "/product/channel-manager",
    component: DetailCm,
  },
  {
    path: "/product/cakra-loyalty",
    component: DetailLoyalty,
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
  },

  // TODO: Error pages route
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
