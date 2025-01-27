<template>
    <div>
        <h4>当前计数：{{ counter }}</h4>
        <button @click="increment">+</button>
    </div>
</template>
<script setup>
import { ref } from 'vue'

const counter = ref(0)

function increment() {
    counter.value++
}
</script>