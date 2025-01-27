<template>
    <div>
        <h2>{{ title }}</h2>
        <h2>{{ message }}</h2>
        <button @click="foo">单击调用foo函数</button>
        <button @click="bar">单击调用bar函数</button>
    </div>
</template>
<script>
import { demoMixin } from "./mixins/demoMixins.js";
export default {
    mixins: [demoMixin],
    data() {
        return {
            message: "Hello App",
        };
    },
    methods: {
        foo() {
            console.log("foo函数被调用了(APP)");
        },
        bar() {
            console.log("bar函数被调用了(APP)");
        },
    },
    computed: {},
    watch: {},
    created() {
        console.log("APP创建了");
    },
};
</script>
