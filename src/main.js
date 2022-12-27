import { createApp } from "vue";
import App from "./App.vue";

import "./assets/style.css";
import store from "./store/index";

const app = createApp(App);

app.config.globalProperties.$relativeDate = function (timestamp) {
  const rtf = new Intl.RelativeTimeFormat("en", {
    numeric: "auto",
  });
  const oneDayInMs = 1000 * 60 * 60 * 24;
  const daysDifference = Math.round(
    (timestamp - new Date().getTime()) / oneDayInMs
  );

  return rtf.format(daysDifference, "day");
};

app.use(store);
app.mount("#app");
