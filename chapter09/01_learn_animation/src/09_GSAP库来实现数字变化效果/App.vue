<template>
    <div>
        <input type="number" v-model="counter">
        <h2>当前计数：{{ showNumber.toFixed(0) }}</h2>
    </div>
</template>

<script>
import gsap from 'gsap';

export default {
    data() {
        return {
            counter:1,
            showNumber: 0
        }
    },
    watch: {
        counter(newValue){
            gsap.to(this,{
                duration: 1,
                showNumber: newValue,
            })
        }
    }
}
</script>

<style scoped>
/* 你的样式 */
</style>