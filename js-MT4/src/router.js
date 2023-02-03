import { createWebHistory, createRouter } from "vue-router";
import tp1 from "./components/tp1.vue";
import tp2 from "./components/tp2.vue";

const routes = [
  {
    path: "/",
    name: "tp1",
    component: tp1,
  },
  {
    path: "/tp2",
    name: "tp2",
    component: tp2,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
