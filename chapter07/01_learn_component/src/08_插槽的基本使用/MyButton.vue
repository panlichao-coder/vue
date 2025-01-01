<template>
    <div class="my-button">
        <button @click="handleClick">Click me</button>
    </div>
</template>
<script>
export default {
    methods: {
        handleClick() {
            console.log("Click me");
        },
    },
};
</script>