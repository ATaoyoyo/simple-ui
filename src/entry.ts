import { App } from "vue";
import SButton from "./Button/Button";

// 单独导出组件
export { SButton };

// install方法，全部导出
export default {
  install(app: App) {
    app.component(SButton.name, SButton);
  },
};
