<template>
    <div>
        <button @click="changeAge">+1</button>
        <p>{{ name }} -- {{ age }}</p>
        <p>{{ name1 }} -- {{ age1 }}</p>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue';

export default {
    name: 'ToRefsAPI',
    setup() {
        const info = reactive({
            name: '张三',
            age: 18
        });
        // let { name, age } = info;
        let { name, age } = toRefs(info);
        let name1 = toRefs(info, "name");
        let age1 = toRefs(info, "age");
        const changeAge = () => {
            info.age++;
        };
        return {
            name,
            age,
            name1,
            age1,
            changeAge
        };
    }
};
</script>