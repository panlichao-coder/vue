<template>
    <div>
        <h2>{{ info.name }}</h2>
        <button @click="changeName">修改</button>

    </div>
</template>
<script>
import { reactive, watch,ref } from 'vue'
export default {
    setup() {
        const info = reactive({
            name: 'codewhy',
            age: 18,
            friend: {
                name: 'kobe'
            }
        })
        const info2 = ref("codeywhy")
        // 响应式对象修改为普通对象
        watch(() => ({...info}), (newValue, oldValue) => {
            console.log(oldValue, newValue);
        },{
            deep: true,
            immediate: true
        })
        const changeName = () => {
            info.name = 'kobe',
            info2.value = "kobe22"
        }
        return {
            info,
            changeName
        }
    }
}
</script>