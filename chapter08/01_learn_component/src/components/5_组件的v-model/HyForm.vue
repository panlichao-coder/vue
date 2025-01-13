<template>
    <div class="hy-form">
        <input
            :value="modelValue.name"
            @input="inputChange($event,'name')"
        >
        <input :value="modelValue.title" @input="inputChange($event,'title')">
    </div>
</template>
<script>
export default {
    name: "HyInput",
    props: {
        modelValue: Object
    },
    emits: ["update:modelValue"],
    methods: {
        inputChange(event, key) {
            this.$emit("update:modelValue", { ...this.modelValue, [key]: event.target.value })
        },
    },
}
</script>