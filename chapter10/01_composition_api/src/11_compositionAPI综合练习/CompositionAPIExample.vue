<template>
    <div>
        <div>{{counter}}</div>
        <div>{{ doubleCounter }}</div>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <p style="width:3000px;height:5000px"></p>
        <div style="position:fixed;top:20px;right:20px;">
            <div>scrollX: {{ scrollX }}</div>
            <div>scrollY: {{ scrollY }}</div>
        </div>
    </div>
</template>
<script>
import useScroller from './hooks/useScroller.js'
import useCounter from './hooks/useCounter.js'
import useTitle from './hooks/useTitle.js'
export default({
    name: "CompositionAPIExample",
    setup(){
        // const counter = ref(0)
        // const increment = () => {
        //     counter.value++
        // }
        // const decrement = () => {
        //     counter.value--
        // }
        // const doubleCounter = computed(() => {
        //     return counter.value * 2
        // })
        // return {
        //     counter,
        //     increment,
        //     decrement,
        //     doubleCounter
        // }
        
        const titleRef = useTitle('Composition API Example')
        setTimeout(() => {
                titleRef.value = 'Composition API Example - Changed'
            }, 2000); // 2秒后更改文本
        const {counter, increment, decrement, doubleCounter} = useCounter()
        const {scrollX, scrollY} = useScroller()
        return {
            counter,
            increment,
            decrement,
            doubleCounter,
            scrollX,
            scrollY
        }
    }
})
</script>
