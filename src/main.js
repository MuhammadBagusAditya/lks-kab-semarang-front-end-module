import { createApp } from "vue";
import "./style.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import store from "./store";
import router from "./router";
import App from "./App.vue";

createApp(App).use(store).use(router).mount("#app");
