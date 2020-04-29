import Vue from "vue";
import Vuetify from "vuetify/lib";
import { VApp, VContent, VLayout, VCard, VCardText, VForm, VSwitch, VRow, VCol } from "vuetify/lib";
import "vuetify/dist/vuetify.min.css";
import "@mdi/font/css/materialdesignicons.min.css";

Vue.use(Vuetify, {
  components: { VApp, VContent, VLayout, VCard, VCardText, VForm, VSwitch, VRow, VCol }
});

export default new Vuetify({});
