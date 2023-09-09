import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./Pages/HomePage.vue";
import LoginPage from "./Pages/LoginPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/fridge", component: HomePage },
    { path: "/fridge/login", component: LoginPage },
    { path: "/:notFound(.*)", redirect: "/fridge" }
  ]
});

export default router;
