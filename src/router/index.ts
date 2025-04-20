import { createRouter, createWebHistory } from "vue-router";
import RegionView from "../views/RegionView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "region",
      component: RegionView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/feature",
      name: "feature",
      component: () => import("../components/FeatureCard.vue"),
    },
  ],
});

export default router;
