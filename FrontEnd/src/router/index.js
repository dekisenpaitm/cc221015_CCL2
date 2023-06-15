import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from "@/views/AboutView.vue";
import RegisterView from "@/views/RegisterView.vue";
import UserView from "@/views/UserView.vue";
import LoginView from "@/views/LoginView.vue";
import UsersView from "@/views/UsersView.vue";
import EditView from "@/views/EditView.vue";
import GameView from "@/views/GameView.vue";
import PixelView from "@/views/PixelView.vue";
import UIUXView from "@/views/UIUXView.vue";
import GameDescriptionView from "@/views/GameDescriptionView.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/users',
      name: 'users',
      component: UsersView
    },
    {
      path: '/users/:id',
      name: 'profile',
      component: UserView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/users/edit/:id',
      name: 'edit',
      component: EditView
    },
    {
      path: '/games',
      name: 'games',
      component: GameView
    },
    {
      path: '/games/:id',
      name: 'gameDescription',
      component: GameDescriptionView
    },
    {
      path: '/pixel',
      name: 'pixel',
      component: PixelView
    },
    {
      path: '/uiux',
      name: 'uiux',
      component: UIUXView
    },
  ]
})
export default router
