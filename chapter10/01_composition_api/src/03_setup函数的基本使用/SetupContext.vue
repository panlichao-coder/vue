<template>
    <div>SetupContext组件</div>
    <h4>{{ message }}</h4>
</template>
<script>
export default {
    name: 'SetupContext',
    props: {
        message: {
            type: String,
            default: '默认值',
            required: true
        }
    },
    setup(props, context) {
        console.log(props.message);
        console.log(context.attrs.id, context.attrs.class);
        console.log(context.slots);
        console.log(context.emit);
    }
}
</script>