import { ref, watch } from "vue";
export default function (title = "coder") {
  const titleRef = ref(title);
  console.log("Title变化为", title);
  watch(
    ()=> titleRef.value,
    (newVal) => {
      document.title = newVal;
    },
    {
      immediate: true,
    }
  );
  return titleRef;
}
