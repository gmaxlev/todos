import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import { onlyUnauthorizedGuard, onlyAuthorizedGuard } from "./guards";
import HomePage from "../pages/HomePage.vue";
import TodoPage from "../pages/TodoPage.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: HomePage,
    beforeEnter: onlyUnauthorizedGuard,
  },
  {
    path: "/todo",
    component: TodoPage,
    name: "todo",
    beforeEnter: onlyAuthorizedGuard,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
