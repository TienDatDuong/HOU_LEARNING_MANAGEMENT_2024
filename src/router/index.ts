import { createMemoryHistory, createRouter } from "vue-router";
import About from "../components/tests_tabs/index.vue";
import Hoc_ky_3 from "../components/hoc_ky_3/index.vue";
import Lich_thi_1_6 from "../components/lich_thi_1_06_2024/index.vue";

const routes = [
  {
    path: "/about",
    meta: {
      layout: "default",
    },
    component: About,
  },
  {
    path: "/home",
    meta: {
      layout: "default",
    },
    component: Hoc_ky_3,
  },
  {
    path: "/lich_thi_1_06_2024",
    meta: {
      layout: "default",
    },
    component: Lich_thi_1_6,
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
