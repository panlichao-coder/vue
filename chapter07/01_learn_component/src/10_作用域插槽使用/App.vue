<template>
    <div class="app">
        <show-names :names="names" v-slot="slotProps">
            <span>{{ slotProps.items }} = {{ slotProps.index }}</span>
        </show-names>
    </div>
</template>
<script>
import showNames from "./ShowNames.vue";

export default {
    components: {
        showNames,
    },
    data() {
        return {
            names: ["张三", "李四", "王五"],
        };
    },
};
</script>
