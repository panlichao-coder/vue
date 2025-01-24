<template>
    <div>
        <button @click="show = !show">切换</button>
        <transition enter-acitive-class="animate__animated animate__backInLeft" leave-active-class="animate__animated animate__backOutRight">
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
.why-enter-active{
    animation:backInLeft 1s ease;
}
.why-leave-active{
    animation:backOutRight 1s ease-in;
}
</style>