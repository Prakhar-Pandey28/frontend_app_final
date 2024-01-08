import Vue from 'vue';
import VueRouter from 'vue-router';
import LogIn from '../components/LogIn.vue';
import SignUp from '../components/SignUp.vue';
import TaskList from '../components/TaskList.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/login', component: LogIn },
  { path: '/signup', component: SignUp },
  { path: '/tasks', component: TaskList },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
