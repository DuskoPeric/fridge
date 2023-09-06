import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./Pages/HomePage.vue";
import LoginPage from "./Pages/LoginPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomePage },
    { path: "/login", component: LoginPage },
    { path: "/:notFound(.*)", redirect: "/" }
  ]
});

export default router;
