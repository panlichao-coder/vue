<template>
    <div class="hy-input">
        <input
            :value="modelValue"
            @input="handleInput"
        >
        <input
            v-model="value"
        >
    </div>
</template>
<script>
export default {
    name: "HyInput",
    props: {
        modelValue: String
    },
    emits: ["update:modelValue"],
    methods: {
        handleInput(event) {
            this.$emit("update:modelValue", event.target.value)
        }
    },
    computed: {
        value: {
            get() {
                return this.modelValue
            },
            set(value) {
                this.$emit("update:modelValue", value)
            }
        }
    }
}
</script>