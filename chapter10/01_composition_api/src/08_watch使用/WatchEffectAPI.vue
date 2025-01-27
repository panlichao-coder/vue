<template>
    <div>
        <div>WatchEffectAPI</div>
        <h2>{{ age }}</h2>
        <button @click="changeName">WatchEffectAPI修改name</button>
    </div>
</template>
<script>
import { ref, watchEffect } from "vue";
export default {
    name: "WatchEffectAPI",
    setup() {
        const age = ref(18);
        const stop = watchEffect(
            () => {
                console.log("age: ", age.value);
            }
        );
        const changeName = () => {
            age.value++;
            if (age.value > 20) {
                stop();
            }
        };
        return {
            age,
            changeName
        }
    }

};
</script>