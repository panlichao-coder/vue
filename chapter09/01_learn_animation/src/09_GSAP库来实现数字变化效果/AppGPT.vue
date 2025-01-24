<template>
    <div>
        <button @click="updateNumber">更新数字</button>
        <h4>{{ number }}</h4>
    </div>
</template>

<script>
import gsap from 'gsap';

export default {
    data() {
        return {
            number: 0,
            targetNumber: 100
        }
    },
    methods: {
        updateNumber() {
            gsap.to(this, { duration: 2, number: this.targetNumber, roundProps: "number", onUpdate: () => {
                console.log(this.number);
            }});
        }
    }
}
</script>

<style scoped>
/* 你的样式 */
</style>