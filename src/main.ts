import { createApp } from "vue";
import ElementPlus from "element-plus";
import "./style.css";
import router from "./router";
import App from "./App.vue";
import { registerComponentGlobal } from "./utils/import";

const app = createApp(App);

registerComponentGlobal(app);
app.use(ElementPlus);
app.use(router);
app.mount("#app");
