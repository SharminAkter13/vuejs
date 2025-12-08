import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login.vue';
import HomeView from '@/views/HomeView.vue';
import ContactView from '@/views/ContactView.vue';
import AboutView from '@/views/AboutView.vue';
import ThemeView from '@/views/ThemeView.vue';

// Layout and Dashboard components
import DashboardLayout from '@/layout/DashboardLayout.vue';
import DashboardView from '@/views/DashboardView.vue';
import UserList from '@/views/users/UserList.vue';

const routes = [
  // 1. Authentication/Unprotected Routes (Not using the Dashboard Layout)
  {
    path: '/login', // Use a dedicated path like /login
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
 
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/theme',
    name: 'theme',
    component: ThemeView
  },

  {
    path: '/',
    component: DashboardLayout,   
    children: [
      { 
        // This is the default route when accessing the root path (/)
        path: '', 
        name: 'dashboard-root',
        component: DashboardView 
      },
      { 
        path: 'dashboard', 
        name: 'dashboard',
        component: DashboardView 
      },
       {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/user',
    name: 'user',
    component: UserList
  },
      // You would add other protected pages here, e.g.:
      /*
      { 
        path: 'users', 
        name: 'users', 
        component: () => import('@/views/UsersView.vue') 
      },
      */
    ]
  },
  
  // 3. Catch-all Route (for 404 handling)
  // {
  //   path: '/:catchAll(.*)',
  //   name: 'NotFound',
  //   component: () => import('@/views/NotFound.vue')
  // }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;