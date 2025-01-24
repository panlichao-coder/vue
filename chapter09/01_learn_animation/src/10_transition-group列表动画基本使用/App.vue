<template>
    <div>
        <button @click="addNum">添加数字</button>
        <button @click="delNum">减少数字</button>
        <transition-group name="why" tag="p">
            <span v-for="item in num" :key="item" class="item"
                :style="{ backgroundColor: item % 2 === 0 ? 'red' : 'blue' }">{{ item }}</span>
        </transition-group>
    </div>
</template>

<script>


export default {
    data() {
        return {
            num: [],
            numCount: 0
        }
    },
    methods: {
        addNum() {
            this.num.splice(this.randomIndex(), 0, this.numCount++);
        },
        delNum() {
            this.num.splice(this.randomIndex(), 1);
        },
        randomIndex() {
            return Math.floor(Math.random() * this.num.length);
        }
    }
}
</script>

<style scoped>
/* 你的样式 */
.item {
    margin-right: 10px;
    display: inline-block;
}

.why-enter-from,
.why-leave-to {
    opacity: 0;
    transform: translateY(100px);
}

.why-enter-active,
.why-leave-active {
    transition: all 1s ease;
    position: absolute;
}

.why-move {
    transition: transform 1s ease;
}
</style>