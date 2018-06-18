import Vue from "vue";
import App from "./index";
const app = new Vue(App);
app.$mount();

export default {
  config: {
    usingComponents: {
      "ff-canvas": '../../../static/f2-canvas/f2-canvas'
    }
  }
};
