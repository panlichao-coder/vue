<template>
    <div class="hy-mutiinput">
        <input
            :value="message"
            @input="input1Change"
        >
        <input :value="title" @input="input2Change">
    </div>
</template>
<script>
export default {
    name: "HyInput",
    props: {
        message: String,
        title: String
    },
    emits: ["update:message","update:title"],
    methods: {
        input1Change(event) {
            this.$emit("update:message", event.target.value)
        },
        input2Change(event) {
            this.$emit("update:title", event.target.value)
        }
    },
}
</script>