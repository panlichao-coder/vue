<template>
    <div>
        <div>WatchEffectAPIFlush</div>
        <h2>{{ age }}</h2>
        <button @click="changeName">WatchEffectAPIFlush修改name</button>
    </div>
</template>
<script>
import { ref, watchEffect } from "vue";
export default {
    name: "WatchEffectAPI",
    setup() {
        const age = ref(null);
        watchEffect(
            () => {
                console.log("age: ", age.value);
            }, {
            flush: 'post'
        },
        );
        const changeName = () => {
            age.value++;
        }
        return {
            age,
            changeName
        }
    }

};
</script>