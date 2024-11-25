import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/Body/HomePage.vue';
import AboutPage from '../components/Body/AboutPage.vue';


const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
