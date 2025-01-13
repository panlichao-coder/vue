<template>
    <div class="home-about">
        <h2>HomeAbout</h2>
        <button @click="add">加10</button>
    </div>
</template>

<script>
export default {
    name: "HomeAbout",
    data() {
        return {
            count: 0
        }
    },
    methods: {
        add() {
            this.count += 10;
            console.log(this.count);
        }
    },
    created() {
        console.log("HomeAbout created");
    },
    mounted() {
        console.log("HomeAbout mounted");
    },
    unmounted() {
        console.log("HomeAbout unmounted");
    },
    activated() {
        console.log("HomeAbout activated");
    },
    deactivated() {
        console.log("HomeAbout deactivated");
    },
}
</script>

<style></style>