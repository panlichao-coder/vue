<template>
    <h2>{{ fullName }}</h2>
    <button @click="changeName">修改名字</button>
</template>
<script>
import { ref, computed } from "vue";
export default {
    name: 'ComputedAPI',
    setup() {
        const firstName = ref("Pan");
        const secondName = ref("Lichao");
        // const fullName = computed(() => {
        //     return firstName.value + secondName.value;
        // });
        const fullName = computed({
            get() {
                return firstName.value + secondName.value;
            },
            set(newValue) {
                const names = newValue.split(" ");
                console.log(names);
                firstName.value = names[0];
                secondName.value = names[1];
            }
        });
        const changeName = () => {
            // firstName.value = "Li";
            fullName.value = "Li Lichao";
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