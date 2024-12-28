<template>
  <div>
    <h4>App Title</h4>

    <!--局部样式泄露-->
    <Hello-world></Hello-world>

    <!--局部样式泄露解决-->
    <h1>局部样式泄露解决</h1>
    <Hello-world-fix-1></Hello-world-fix-1>
    <Hello-world-fix-2></Hello-world-fix-2>
    <!--这个不起作用是因为用的还是标签，这里理解有问题-->
    <Hello-world-fix-3></Hello-world-fix-3>

    <!--深度选择器-->
    <h1>深度选择器</h1>
    <Hello-world-deep></Hello-world-deep>
  </div>
</template>

<script>
import HelloWorld from "./HelloWorld.vue";
import HelloWorldFix1 from "./HelloWorldFix1.vue";
import HelloWorldFix2 from "./HelloWorldFix2.vue";
import HelloWorldFix3 from "./HelloWorldFix3.vue";
import HelloWorldDeep from "./HelloWorldDeep.vue";
export default {
  components: {
    HelloWorld,
    HelloWorldFix1,
    HelloWorldFix2,
    HelloWorldFix3,
    HelloWorldDeep,
  },
};
</script>

<style scoped>
h4 {
  text-decoration: underline;
}
:deep(.msg){
  text-decoration: underline;
}
</style>
