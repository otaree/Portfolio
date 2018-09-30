import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import AOS from "aos";
import "aos/dist/aos.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub,
  faCodepen,
  faFreeCodeCamp
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faGithub, faCodepen, faFreeCodeCamp);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = true;

new Vue({
  router,
  store,
  created() {
    AOS.init();
  },
  render: h => h(App)
}).$mount("#app");
