<template>
    <div class="home-page" @click="handleClick">
        <h2>HomePage</h2>
    </div>
</template>

<script>
export default {
    name: "HomePage",
    props: {
        name: {
            type: String,
            default: "HomePage"
        },
        age: {
            type: Number,
            default: 18
        },
    },
    emits: ["PageClick"],
    methods: {
        handleClick() {
            this.$emit("PageClick", "HomePage");
        }
    }
}
</script>

<style></style>