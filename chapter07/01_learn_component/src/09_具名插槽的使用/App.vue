<template>
    <div class="app">
        <nav-bar>
            <template #left>
                <button>左边的按钮</button>
            </template>
            <template #right>
                <button>右边的按钮</button>
            </template> 
            <template #center>
                <button>中间的按钮</button>
            </template>
        </nav-bar>
    </div>
</template>
<script>
import NavBar from "./Navbar.vue";
export default {
    components: {
        NavBar
    },
};
</script>