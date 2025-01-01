<template>
    <div class="app">
        <h2>APP</h2>
        <home-about></home-about>
        <home-page></home-page>
    </div>
</template>
<script>
import homeAbout from "./HomeAbout.vue";
import homePage from "./HomePage.vue";
export default ({
    components: {
        homeAbout,
        homePage,
    },
})
</script>
