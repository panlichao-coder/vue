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
            age: 18
        })
        const info2 = ref("codeywhy")
        // 案例一：监听的是一个getter函数，该函数引用响应式对象info
        watch(() => info.name, (newValue, oldValue) => {
            console.log(`${oldValue}修改为${newValue}`);
        })
        // 案例二：监听的是reactive函数返回的响应式对象
        watch(info, (newValue, oldValue) => {
            console.log(oldValue, newValue);                                                                                        
        })
        // 响应式对象修改为普通对象
        watch(() => {return {...info}}, (newValue, oldValue) => {
            console.log(oldValue, newValue);
        })
        // 案例三：watch监听的数据源为ref函数返回的响应式对象
        watch(info2, (newValue, oldValue) => {
            console.log(oldValue, newValue);
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