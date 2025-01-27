<template>
    <div>App组件</div>
    <ToRefsAPI />
    <CustomRefAPI />
</template>
<script>
import ToRefsAPI from "./ToRefsAPI.vue";
import CustomRefAPI from "./hooks/CustomRefAPI.vue";
export default {
    name: "App",
    components: {
        ToRefsAPI,
        CustomRefAPI,
    },
};
</script>
