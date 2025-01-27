<template>
    <div>
        <button @click="updateState">更新状态</button>
    </div>
</template>

<script>
import { reactive, ref, readonly } from 'vue';

export default {
    name: 'ReadonlyAPI',
    setup() {
        const info1 = { name: 'why' };
        const readonlyInfo1 = readonly(info1);

        const info2 = reactive({ name: 'kobe' });
        const readonlyInfo2 = readonly(info2);

        const info3 = ref("why");
        const readonlyInfo3 = readonly(info3);

        const updateState = () => {
            // 只能修改原始对象，不能修改 readonly 对象
            info1.name = 'kobe';
            info2.name = 'james';
            info3.value = 'james';
            // readonlyInfo1.name = 'james';
            // readonlyInfo2.name = 'james';
            // readonlyInfo3.value = 'james';
            console.log(readonlyInfo1, readonlyInfo2, readonlyInfo3)
        };

        return {
            updateState
        };
    }
};
</script>