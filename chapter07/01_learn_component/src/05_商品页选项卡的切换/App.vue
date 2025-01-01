<template>
    <div class="app">
        <TabControl @titleClick="modify"></TabControl>
        <h2>{{ name }}</h2>
    </div>
</template>
<script>
import TabControl from './TabControl.vue';
export default {
    props: {
        tabName: {
            type: String,
            default() {
                return "";
            }
        }
    },
    components: {
        TabControl
    },
    data() {
        return {
            name: ""
        }
    },
    created(){
        this.name = "衣服"
    },
    methods: {
        modify(tabName) {
            this.name = tabName
        },
    }
}
</script>