<template>
    <div>
        <button @click="show = !show">切换</button>
        <transition name="why" mpde="out-in">
            <component :is="show ? 'PageAbout' : 'PageHome'"></component>
        </transition>
    </div>
</template>
<script>
import PageAbout from './PageAbout.vue'
import PageHome from './PageHome.vue'
export default {
    components: {
        PageAbout,
        PageHome 
    },
    data() {
        return {
            show: true
        }
    }
}
</script>
<style scoped>
.why-enter-from,
.why-leave-to {
    opacity: 0;
}

.why-enter-active,
.why-leave-active {
    transition: opacity 1s ease;
}
</style>