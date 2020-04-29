import Vue from "vue";
import App from "./Demo";
import plugin from "../src/index";
import vuetify from "./plugins/vuetify";

Vue.use(plugin);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: h => h(App)
}).$mount("#app");
