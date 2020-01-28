import Home from './components/Home.vue';
import User from './components/user/User.vue';

export const routes = [
  { path: '/user/:id', component: User },
  { path: '', component: Home }
];
