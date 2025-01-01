<template>
    <div class="show-names">
        <div v-for="(name, index) in names" :key="index">
            <slot :items="name" :index="index"></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: "ShowNames",
    props: {
        names: {
            type: Array,
            default: () => [],
        },
    },
};
</script>