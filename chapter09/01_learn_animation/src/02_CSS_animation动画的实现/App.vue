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
.why-enter-active{
    animation: bounce 1s ease;
}
.why-leave-active{
    animation: bounce 1s ease reverse;
}
@keyframes bounce{
    0%{
        transform: scale(0)
    }
    50%{
        transform: scale(1.2);
    }
    100%{
        transform: scale(1);
    }
}
</style>