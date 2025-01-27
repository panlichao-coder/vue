<template>
    <div>
        <div>{{counter}}</div>
        <div>{{ doubleCounter }}</div>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
    </div>
</template>
<script>

export default({
    name: "OptionAPIExample",
    data() {
        return {
            counter: 0
        }
    },
    computed: {
        doubleCounter() {
            return this.counter * 2
        }
    },
    methods: {
        increment() {
            this.counter++
        },
        decrement() {
            this.counter--
        }
    }
})
</script>
