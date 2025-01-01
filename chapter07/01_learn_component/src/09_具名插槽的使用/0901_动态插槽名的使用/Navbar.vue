<template>
    <div class="navbar">
        <div class="left">
            <slot :name="name"></slot>
        </div>
        <div class="center">
            <slot name="center"></slot>
        </div>
        <div class="right">
            <slot name="right"></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name: "NavBar",
        props: {
            name: {
                type: String,
                default: "left",
            },
        },
    };
</script>