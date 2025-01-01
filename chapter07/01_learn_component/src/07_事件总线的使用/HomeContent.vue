<template>
    <div class="home-content">
        <h2>home-content</h2>
    </div>
</template>
<script>
import emitter from "./utils/eventbus.js";

export default ({
    created() {
        emitter.on("why", (info) => {
            console.log("why", info);
        });
        emitter.on("kobe", (info) => {
            console.log("kobe", info);
        });
        emitter.on("*", (type,info) => {
            console.log("* listener:", type,info);
        });
    },
})
</script>
