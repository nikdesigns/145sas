import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Register from '../views/registration/Register.vue';
import PromoSponsorship from '../views/sponsorships/PromoSponsorship.vue';
import UserProfile from '../views/users/UserProfile.vue';
import StateRooms from '../views/staterooms/StateRooms.vue';
import RoomDetails from '../views/staterooms/RoomDetails.vue';
import ErrorPage from '../views/ErrorPage.vue';

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
  {
    path: '/staterooms',
    name: 'StateRooms',
    component: StateRooms,
  },
  {
    path: '/staterooms/:id',
    name: 'RoomDetails',
    component: RoomDetails,
    props: true,
  },
  //404 Page
  {
    path: '/:catchAll(.*)',
    name: 'ErrorPage',
    component: ErrorPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
