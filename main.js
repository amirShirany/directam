import App from "@/App.vue";
import VueApexCharts from "vue3-apexcharts"; //import form use apexcharts in vue3
import { registerPlugins } from "@core/utils/plugins";
import { createApp } from "vue";

// Styles
import "@core/scss/template/index.scss";
import "@styles/styles.scss";
import "@styles/global.scss";

import "sweetalert2/dist/sweetalert2.min.css";

// Create vue app
const app = createApp(App);
app.use(VueApexCharts); // use apexcharts in vue3
// Register plugins
registerPlugins(app);

// Mount vue app
app.mount("#app");
