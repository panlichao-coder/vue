<template>
    <div>
        <button @click="show = !show">切换</button>
        <transition name="why">
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
.why-enter-form, .why-leave-to{
    opacity: 0;
}
.why-enter-to, .why-leave-form{
    opacity: 1;
}
.why-enter-active, .why-leave-active{
    transition: opacity 2s;
}
</style>