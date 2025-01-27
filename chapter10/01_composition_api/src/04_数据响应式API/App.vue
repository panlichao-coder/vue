<template>
    <div>App组件</div>
    <ReactiveApi></ReactiveApi>
    <RefApi />
    <RefOtherApi />
</template>
<script>
import ReactiveApi from "./ReactiveApi.vue";
import RefApi from "./RefApi.vue";
import RefOtherApi from "./RefOtherApi.vue";
export default {
    name: "App",
    components: {
        ReactiveApi,
        RefApi,
        RefOtherApi,
    },
};
</script>
