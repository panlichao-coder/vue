<template>
    <div>
        <h2>{{ name }}</h2>
        <h2>{{ age }}</h2>
        <h2>{{ count }}</h2>
        <button @click="increment">添加</button>
        <PageHome />
    </div>
</template>
<script>
import { provide,ref,readonly } from 'vue';
import PageHome from './PageHome.vue'

export default({
    name: 'App',
    components: {
        PageHome
    },
    setup() {
        const name = 'codewhy'
        const age =  18
        let count = ref(100)
        provide('name', readonly(name))
        provide('age', readonly(age))
        provide('count', readonly(count))
        const increment = () => {
            count.value++
        }
        return {
            name,
            age,
            count,
            increment
        }
    },
})
</script>
