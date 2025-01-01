<template>
    <div class="app">
        <TabControl @titleClick="modify"></TabControl>
        <h2>{{ tabName }}</h2>
    </div>
</template>
<script>
import TabControl from './TabControl.vue';
export default {
    props: {
        tabName: {
            type: string,
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
            tabName: ""
        }
    },
    methods: {
        modify() {
            this.tabName = tabName
        },
    }
}
</script>