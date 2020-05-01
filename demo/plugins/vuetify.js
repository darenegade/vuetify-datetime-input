import Vue from "vue";
import Vuetify, { VApp, VCard, VCardText, VCol, VContent, VForm, VLayout, VRow, VSwitch, VSelect } from "vuetify/lib";
import "vuetify/dist/vuetify.min.css";
import "@mdi/font/css/materialdesignicons.min.css";

Vue.use(Vuetify, {
  components: {VApp, VContent, VLayout, VCard, VCardText, VForm, VSwitch, VSelect, VRow, VCol}
});

export default new Vuetify({});
