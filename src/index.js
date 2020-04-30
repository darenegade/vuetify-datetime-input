import Vue from "vue";
import { VueMaskDirective } from "v-mask";
import VuetifyDatetimeInput from "./VuetifyDatetimeInput.vue";

Vue.directive("mask", VueMaskDirective);
Vue.component("v-datetime-input", VuetifyDatetimeInput);

export default VuetifyDatetimeInput;
