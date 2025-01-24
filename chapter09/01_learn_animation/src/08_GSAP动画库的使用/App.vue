<template>
    <div>
        <button @click="show = !show">切换</button>
        <transition @enter="enter" @leave="leave" :css="false">
            <h4 v-if="show" style="border : 4px solid #ddd;width:100px">Hello World</h4>
        </transition>

    </div>
</template>
<script>
import gsap from 'gsap';
export default {
    data() {
        return {
            show: true
        }
    },
    methods:{
        enter(el,done){
            gsap.fromTo(el,{opacity:0,scale:0}
            ,{opacity:1,scale:1,duration:1,onComplete:done})
            console.log('enter')
        },
        leave(el,done){
            gsap.fromTo(el,{opacity:1,scale:1}
            ,{opacity:0,scale:0,duration:1,onComplete:done})
            console.log('leave')
        }
    }
}
</script>
<style scoped>

</style>