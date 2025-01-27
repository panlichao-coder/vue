<template>
    <div class="setup-return" style="border:1px solid #ddd;margin:10px">
        SetupReturn组件
        <h4>当前件数：{{ counter }}</h4>
        <button @click="increment">+1</button>
        <button @click="decrement">-1</button>
    </div>
</template>
<script>
export default {
    setup() {
        let counter = 100;
        const increment = () => {
            counter++;
            console.log(counter);
        }
        return {
            counter: counter,
            increment: increment,
        }
    }
}
</script>