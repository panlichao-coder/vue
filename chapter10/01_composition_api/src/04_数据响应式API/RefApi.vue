<template>
    <div class="ref-api" style="border:1px solid #ddd;margin:10px">
        RefAPI组件
        <h4>当前计数：{{ counter }}</h4>
        <button @click="increment">+1</button>
    </div>
</template>
<script>
import { ref } from 'vue'
export default {
    name: 'RefApi',
    setup() {
        const counter = ref(100)
        const increment = () => {
            counter.value++;
        }
        return {
            counter,
            increment
        }
    }
}
</script>