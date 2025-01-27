<template>
    <div class="reactive-api" style="border:1px solid #ddd;margin:10px">
        ReativeAPI组件
        <h4>当前计数：{{ state.counter }}</h4>
        <button @click="increment">+1</button>
    </div>
</template>
<script>
import { reactive } from 'vue'
export default {
    name: 'ReactiveApi',
    setup() {
        const state = reactive({
            counter: 0
        })
        const increment = () => {
            state.counter++;
        }
        return {
            state,
            increment
        }
    }
}
</script>