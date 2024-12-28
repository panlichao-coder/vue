<template>
    <div class="app">
        <h2>当前计数：{{ count }}</h2>
        <CountOperation @add="increment" @sub="decrement" @addN="incrementN"></CountOperation>
    </div>
</template>
<script>
import CountOperation from './CountOperation.vue';
export default {
    components: {
        CountOperation
    },
    data() {
        return {
            count: 0
        }
    },
    methods: {
        increment() {
            this.count++;
        },
        decrement() {
            this.count--;
        },
        incrementN(n) {
            this.count += n;
        }
    }
}
</script>