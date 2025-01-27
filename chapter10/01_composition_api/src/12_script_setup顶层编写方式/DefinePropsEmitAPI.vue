<template>
    <div>
        <div>
            DefinePropsEmitAPI组件
        </div>
        <p>{{ message }}</p>
        <button @click="emitEvent">触发事件</button>
    </div>
</template>
<script setup>
import { defineProps, defineEmits } from 'vue'
defineProps({
    message: {
        type: String,
        default: '默认值'
    }
})
const emit = defineEmits(['myEvent'])
function emitEvent() {
    emit('myEvent', 1)
}
</script>