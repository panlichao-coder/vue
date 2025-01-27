<template>
    <div>
        <h4> {{ info.name }} -- {{ info }}</h4>
        <h4> {{ age }}</h4>
        <h4> {{ name }}</h4>
        <button @click="changeName">修改</button>
    </div>
</template>
<script>
import { reactive, watch,ref } from 'vue'
export default {
    setup() {
        const info = reactive({name:"coder why", age: 18})
        const name = ref("why")
        const age = ref(18)
        watch(
            [()=> ({...info}),name,age],([newInfo,newName,newAge],[oldInfo,oldName,oldAge]) => {
                console.log(oldInfo, newInfo);
                console.log(oldName, newName);
                console.log(oldAge, newAge);
            }
        )
        const changeName = () => {
            info.name = "kobe"
            name.value = "kobe"
            age.value = 24
        }
        return {
            info,
            changeName
        }
    }
}
</script>