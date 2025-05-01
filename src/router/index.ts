import { createRouter, createWebHistory } from 'vue-router';
import RegionView from '../views/RegionView.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'region',
      component: RegionView,
    },
    {
      path: '/sources',
      name: 'sources',
      // route level code-splitting
      // this generates a separate chunk (Source.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/SourceView.vue'),
    },
    {
      path: '/feature',
      name: 'feature',
      component: () => import('../views/FeatureView.vue'),
    },
    {
      path: '/place',
      name: 'place',
      component: () => import('../views/PlaceView.vue'),
    },
    {
      path: '/discovery',
      name: 'Discovery',
      component: () => import('../views/DiscoveryView.vue'),
    },
    {
      path: '/incident',
      name: 'incident',
      component: () => import('../views/IncidentView.vue'),
    },
  ],
});

export default router;
