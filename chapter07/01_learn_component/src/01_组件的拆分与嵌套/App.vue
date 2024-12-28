<template>
  <div class="app">
    <AppHeader></AppHeader>
    <AppMain></AppMain>
    <AppFooter></AppFooter>
  </div>
</template>
<script>
import AppHeader from "./AppHeader.vue";
import AppMain from "./AppMain.vue";
import AppFooter from "./AppFooter.vue";
export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },
};
</script>
