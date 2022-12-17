import { createApp } from "vue";
import "./style.css";
import "@shared/theme/custom.css";
import router from "@admin/router";
import App from "./App.vue";

createApp(App).use(router).mount("#app");
