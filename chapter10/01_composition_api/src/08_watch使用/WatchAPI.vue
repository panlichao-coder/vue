<template>
    <div>
        <h2>{{ info.name }}</h2>
        <button @click="changeName">修改</button>
    </div>
</template>
<script>
import { reactive, watch } from 'vue'
export default {
    setup() {
        const info = reactive({
            name: 'codewhy',
            age: 18
        })
        watch(() => info.name, (newValue, oldValue) => {
            console.log(`${oldValue}修改为${newValue}`);
        })
        const changeName = () => {
            info.name = 'kobe'
        }
        return {
            info,
            changeName
        }
    }
}
</script>