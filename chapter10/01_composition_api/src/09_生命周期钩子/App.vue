<template>
    <div>
        <h2>{{ counter }}</h2>
        <button @click="increment">添加</button>
    </div>
</template>
<script>
import { onMounted, onUnmounted, onUpdated, ref } from 'vue';


export default ({
    setup() {
        const counter = ref(0);
        const increment = () => {
            counter.value++;
        }

        onMounted(() => {
            console.log('mounted--1');
        })
        onMounted(
            () => {
                console.log('mounted--2');
            }
        )
        onUpdated(() => {
            console.log('updated');
        })
        onUnmounted(() => {
            console.log('unmounted');
        })
        return {
            counter,
            increment
        }

    },
})
</script>
