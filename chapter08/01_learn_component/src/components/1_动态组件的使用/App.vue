<template>
    <div class="app">
        <button v-for="(item, index) in list" :key="index" @click="handleClick(item)"
            :class="{ active: currentItem === item }">{{ item }}</button>
        <!-- 以前的写法 -->
        <template v-if="currentItem === 'HomeAbout'">
            <HomeAbout></HomeAbout>
        </template>
        <template v-else-if="currentItem === 'HomeCategory'">
            <HomeCategory></HomeCategory>
        </template>
        <template v-else-if="currentItem === 'HomePage'">
            <HomePage></HomePage>
        </template>
        <!-- 现在的写法 -->
        <component :is="currentItem" name="component" age="88" @pageClick="pageClick"></component>
        <!-- 缓存组件 -->
         <keep-alive>
            <component :is="currentItem" name="component" age="88" @pageClick="pageClick"></component>
        </keep-alive>
    </div>
</template>

<script>
import HomeAbout from "./page/HomeAbout";
import HomeCategory from "./page/HomeCategory";
import HomePage from "./page/HomePage";
export default {
    name: "App",
    components: {
        HomeAbout,
        HomeCategory,
        HomePage
    },
    data() {
        return {
            list: ["HomePage", "HomeCategory", "HomeAbout"],
            currentItem: "HomePage"
        }
    },
    methods: {
        handleClick(item) {
            this.currentItem = item;
        },
        pageClick(name) {
            console.log(name);
        }
    }
}
</script>

<style></style>