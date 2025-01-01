<template>
    <div class="home-about">
        <h2>About</h2>
        <button @click="btnClick">按钮</button>
    </div>
</template>
<script>
import emitter from "./utils/eventbus.js";

export default ({
    methods: {
        btnClick() {
            emitter.emit("why", { name: "why", age: 18 });
            emitter.emit("kobe", { name: "kobe", age: 24 });
        },
    },
})
</script>
