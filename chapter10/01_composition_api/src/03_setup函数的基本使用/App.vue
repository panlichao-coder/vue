<template>
  <div>App组件</div>
  <SetupProps message="hello"></SetupProps>
  <SetupContext message="hello" id="123" class="123"></SetupContext>
  <setup-return></setup-return>
</template>
<script>
import SetupProps from "./SetupProps.vue";
import SetupContext from "./SetupContext.vue";
import SetupReturn from "./SetupReturn.vue";
export default {
  name: "App",
  components: {
    SetupProps,
    SetupContext,
    SetupReturn,
  },
};
</script>
