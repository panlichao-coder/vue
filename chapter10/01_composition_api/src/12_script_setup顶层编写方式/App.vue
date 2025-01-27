<template>
    <div>
        <ScriptSetupExample />
        <DefinePropsEmitAPI message="Hello Vue 3" @myEvent="getNumber" />
        <DefineExposeAPI ref="defineExposeAPI"/>
    </div>
</template>
<script setup>
import ScriptSetupExample from './ScriptSetupExample.vue';
import DefinePropsEmitAPI from './DefinePropsEmitAPI.vue';
import DefineExposeAPI from './DefineExposeAPI.vue';
import { ref,watchEffect } from 'vue';
const defineExposeAPI = ref(null)
function getNumber(number) {
    console.log(number)
}
watchEffect(() => {
    console.log(defineExposeAPI.value)
    console.log(defineExposeAPI.value.age)
    console.log(defineExposeAPI.value.name)
    defineExposeAPI.value.showMessage()
},{
    flush: 'post'
})
</script>