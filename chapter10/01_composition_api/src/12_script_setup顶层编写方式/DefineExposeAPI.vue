<template>
    <div style="border:1px solod #ddd;margin:8px">
        DefineExposeAPI组件
    </div>
</template>
<script setup>
import { ref, defineExpose } from 'vue'
const age = 18
const name = ref('小明')
const showMessage = () => {
    console.log('showMessage')
}
defineExpose({
    age,
    name,
    showMessage
})
</script>