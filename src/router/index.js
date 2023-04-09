import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/index1",
    name: "index1",
    component: () => import("../views/Index1View.vue"),
  },
  {
    path: "/index2",
    name: "index2",
    component: () => import("../views/Index2View.vue"),
  },
  {
    path: "/index3",
    name: "index3",
    component: () => import("../views/Index3View.vue"),
  },
  {
    path: "/index4",
    name: "index4",
    component: () => import("../views/Index4View.vue"),
  },
  {
    path: "/index5",
    name: "index5",
    component: () => import("../views/Index5View.vue"),
  },
  {
    path: "/index6",
    name: "index6",
    component: () => import("../views/Index6View.vue"),
  },
  {
    path: "/index7",
    name: "index7",
    component: () => import("../views/Index7View.vue"),
  },
  {
    path: "/index8",
    name: "index8",
    component: () => import("../views/Index8View.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
