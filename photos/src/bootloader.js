import { createApp } from "vue";

import "./index.scss";

import App from "./App.vue";

createApp(App).mount("#app");

const mount = (el) => {
  const app = createApp(App)
  app.mount(el)
}

export { mount }