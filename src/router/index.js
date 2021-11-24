import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Register from '../views/registration/Register.vue';
import PromoSponsorship from '../views/sponsorships/PromoSponsorship.vue';
import UserProfile from '../views/users/UserProfile.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/sponsorships/promo-sponsorships',
    name: 'PromoSponsorship',
    component: PromoSponsorship,
  },
  {
    path: '/user-profile',
    name: 'UserProfile',
    component: UserProfile,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
