import { customRef } from "vue";
export default function (value, delay = 300) {
  let timer = null;
  return customRef((track, trigger) => {
    return {
      get() {
        track(); //通知vue追踪这个值
        return value;
      },
      set(newValue) {
        clearTimeout(timer);
        timer = setTimeout(() => {
          value = newValue;
          trigger(); //通知vue更新
        }, delay);
      },
    };
  });
}
