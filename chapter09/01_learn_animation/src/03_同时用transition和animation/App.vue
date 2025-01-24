<template>
    <div>
        <button @click="show = !show">切换</button>
        <transition name="why" type="animation">
            <h4 v-if="show" style="border : 4px solid #ddd;width:100px">Hello World</h4>
        </transition>

    </div>
</template>
<script>
export default {
    data() {
        return {
            show: true
        }
    }
}
</script>
<style scoped>
.why-enter-from, .why-leave-to{
    opacity: 0;
}
.why-enter-active,.why-leave-active{
    transition: opacity 1s ease;
}
.why-enter-active{
    animation: bounce 1s ease;
}
.why-leave-active{
    animation: bounce 1s ease reverse;
}
</style>