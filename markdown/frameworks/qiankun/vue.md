# 在Vue项目中使用qiankun框架

## 主应用配置

```ts
// main.ts
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { registerMicroApps, start } from "qiankun";
import { createRouter, createWebHashHistory } from "vue-router";

const app = createApp(App);
//因为例子需要路由跳转演示，所以这里先创建了一个空的路由
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: () => import("./views/Home.vue"),
    },
  ],
});
app.use(router);
registerMicroApps(
  [
    {
      name: "vue-sub-app", //子应用名称
      entry: "//localhost:8081", //子应用入口
      container: "#vue-sub-app", //子应用挂载容器
      activeRule: "#/vue-sub-app", //子应用激活的路由规则
      props: {
        globalToken: "主应用传递的数据",
      },
    },
  ],
  {
    beforeLoad: (app): any => {
      console.log("before load", app.name);
      return Promise.resolve();
    },
    beforeMount: (app): any => {
      // debugger;
      console.log("开始挂载：", app.name);
      return Promise.resolve();
    },
    afterMount: (app): any => {
      console.log(app.name, "挂载成功了");
      return Promise.resolve();
    },
    afterUnmount: (app): any => {
      console.log("贾维斯卸载 ", app.name, app);
      return Promise.resolve();
    },
  }
);
start({
  sandbox: { experimentalStyleIsolation: true }, // 开启样式隔离
  prefetch: "all", // 预加载子应用资源
});
app.mount("#app");

```

```ts
// vite.config.ts
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 8080,
    // 添加以下配置解决 qiankun 加载问题
    // headers: {
    //   "Access-Control-Allow-Origin": "*",
    // },
  },
  // base: "//localhost:8080",
  // build: {
  //   rollupOptions: {
  //     output: {
  //       // 设置 umd 格式以支持 qiankun
  //       format: "umd",
  //       name: "vue-host-app", // 与 registerMicroApps 中的 name 保持一致
  //     },
  //   },
  // },
});

```

## 子应用配置

```ts
// @ts-nocheck
// src/main.js
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import {
  renderWithQiankun,
  qiankunWindow,
} from "vite-plugin-qiankun/dist/helper";
let app: any = null;

function render(props = {}) {
  app = createApp(App);
  app.mount("#app2");
}

renderWithQiankun({
  bootstrap() {
    console.log("[子应用] bootstrap");
    return Promise.resolve();
  },
  mount(props) {
    console.log("[子应用] mount");
    render(props);
    return Promise.resolve();
  },
  unmount(props) {
    console.log("[子应用] unmount");
    app.unmount();
    return Promise.resolve();
  },
  update(props) {
    console.log("[子应用] update");
    return Promise.resolve();
  },
});
console.log("__POWERED_BY_QIANKUN__", qiankunWindow.__POWERED_BY_QIANKUN__);
if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render();
}
```

```ts
// vite.config.ts
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import qiankun from "vite-plugin-qiankun";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    qiankun("vue-sub-app", {
      // 子应用名，需与主应用注册时一致
      useDevMode: true, // 开发模式配置（见下文说明）
    }),
  ],
  server: {
    port: 8081,
    cors: true,
    // origin: "http://localhost:8081",
    // 添加以下配置解决 qiankun 加载问题
    // headers: {
    //   "Access-Control-Allow-Origin": "*",
    // },
  },
  // base: "/vue-sub-app/", // 生产环境需与主应用activeRule匹配
  // build: {
  //   rollupOptions: {
  //     // 确保导出命名函数
  //     output: {
  //       format: "es", // 使用 ES 模块格式
  //     },
  //   },
  // },
});

```
