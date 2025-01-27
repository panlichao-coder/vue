<template>
    <h2>{{ fullName }}</h2>
    <button @click="changeName">修改名字</button>
</template>
<script>
import { ref, computed } from "vue";
export default {
    name: 'ComputedAPI',
    setup() {
        const firstName = ref("潘");
        const secondName = ref("小军");
        const fullName = computed(() => {
            return firstName.value + secondName.value;
        });
        const changeName = () => {
            firstName.value = "李";
        };
        return {
            firstName,
            secondName,
            fullName,
            changeName
        }
    }

}
</script>