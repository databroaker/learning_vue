import { createApp } from "vue";

import App from "./App.vue";
import BaseBadge from "./components/BaseBadge.vue";
import BaseCard from "./components/BaseCard.vue";
import ErrorAlert from "./components/ErrorAlert.vue";
const app = createApp(App);

app.component("base-badge", BaseBadge);
app.component("base-card", BaseCard);
app.component("error-alert", ErrorAlert);

app.mount("#app");
