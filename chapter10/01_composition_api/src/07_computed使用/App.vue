<template>
    <div>App</div>
    <ComputedAPI />
    <ComputedAPI2 />
</template>
<script>
import ComputedAPI from './ComputedAPI.vue'
import ComputedAPI2 from './ComputedAPI2.vue'
export default ({
    name: "App",
    components: {
        ComputedAPI,
        ComputedAPI2,
    },
})
</script>