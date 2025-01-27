<template>
    <div class="refother-api" style="border:1px solid #ddd;margin:10px">
        RefOtherAPI组件
        <h4>当前计数：{{ counter }}</h4>
        <h4>当前计数：{{ info.counter }}</h4>
        <h4>当前计数：{{ reactiveInfo.counter }}</h4>
        <button @click="increment">+1</button>
    </div>
</template>
<script>
import { reactive, ref } from 'vue'
export default {
    name: 'RefOtherApi',
    setup() {
        const counter = ref(100)
        const info = {
            counter
        }
        const reactiveInfo = reactive({
            counter
        })
        const increment = () => {
            counter.value++;
        }
        return {
            counter,
            increment,
            info,
            reactiveInfo
        }
    }
}
</script>