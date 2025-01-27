<template>
    <div>
        <div>WatchEffectAPIClear</div>
        <h2>{{ age }}</h2>
        <button @click="changeName">WatchEffectAPIClear修改name</button>
    </div>
</template>

<script>
import { ref, watchEffect } from "vue";
export default {
    name: "WatchEffectAPIClear",
    setup() {
        const age = ref(18);
        watchEffect(
            (onInvalidate) => {
                const timer = setTimeout(() => {
                    console.log("正在进行网络请求。。。")
                }, 2000);
                onInvalidate(() => {
                    clearTimeout(timer);
                    console.log("取消网络请求。。。")
                })
                console.log('age:', age.value);
            });
        const changeName = () => {
            age.value++;
        };
        return {
            age,
            changeName
        }
    }
}
</script>