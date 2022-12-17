import { createRouter, createWebHashHistory } from "vue-router";

import NotFound from "@shared/views/NotFound.vue";

import Home from "@admin/views/Home.vue";
import About from "@admin/views/About.vue";
import Admin from "@admin/views/Admin.vue";

const routes = [
  { path: "/:pathMatch(.*)*", component: NotFound },
  { name: "Home", path: "/", component: Home },
  { name: "About", path: "/about", component: About },
  { name: "Admin", path: "/admin", component: Admin },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
