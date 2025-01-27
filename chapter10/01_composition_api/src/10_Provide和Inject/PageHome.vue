<template>
    <div>
        <h2>home组件</h2>
        <h2>{{ name }}</h2>
        <h2>{{ age }}</h2>
        <h2>{{ count }}</h2>
        <button @click="increment">添加</button>
    </div>
</template>
<script>
import { inject } from 'vue';


export default({
    name: 'PageHome',
    setup() {
        const name = inject('name')
        const age = inject('age')
        const count = inject('count')
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
