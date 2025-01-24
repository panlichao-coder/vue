<template>
    <div>
        <button @click="show = !show">切换</button>
        <transition :appear="true" @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter" @before-leave="beforeLeave" @leave="leave" @after-leave="afterLeave">
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
    },
    methods: {
        beforeEnter(el) {
            console.log('beforeEnter')
            el.style.transform = 'translateX(100px)'
        },
        enter(el) {
            console.log('enter')
            el.style.transform = 'translateX(0px)'
        },
        afterEnter(el) {
            console.log('afterEnter')
            el.style.transform = 'translateX(0px)'
        },
        beforeLeave(el) {
            console.log('beforeLeave')
            el.style.transform = 'translateX(0px)'
        },
        leave(el) {
            console.log('leave')
            el.style.transform = 'translateX(-100px)'
        },
        afterLeave(el) {
            console.log('afterLeave')
            el.style.transform = 'translateX(-100px)'
        }
    }
}
</script>
<style scoped>

</style>