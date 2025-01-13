<template>
    <div class="app">
        <button @click="isShowHome = !isShowHome">切换Home的显示</button>
        <template v-if="isShowHome">
            <home></home>
        </template>
    </div>
</template>
<script>
import Home from "./HomePage.vue"
export default {
    components: {
        Home
    },
    data(){
        return {
            isShowHome: true
        }
    }
}
</script>
