<template>
    <div>我是HomePage</div>
    <button @click="foo">点击调用foo方法</button>
</template>
<script>
import BasePage from './BasePage.vue'
export default {
    name: 'HomePage',
    data() {
        return {
            title: 'HomePage'
        }
    },
    extends: BasePage
}
</script>