// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import StudentList from '../views/StudentList.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/students', name: 'StudentList', component: StudentList }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
