import { defineAsyncComponent } from "vue";

export function registerComponentGlobal(app: any) {
  app.component(
    "default-layout",
    defineAsyncComponent(() => import("../layout/default.vue"))
  );
}
