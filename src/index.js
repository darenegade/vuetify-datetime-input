import Vue from "vue";
import VuetifyDatetimeInput from "./VuetifyDatetimeInput.vue";
const Components = {
  VuetifyDatetimeInput
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;
