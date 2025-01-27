<template>
    <div>SetupProps组件</div>
    <h4>{{ message }}</h4>
</template>
<script>
export default {
    name: 'SetupProps',
    props: {
        message: {
            type: String,
            default: '默认值',
            required: true
        }
    },
    setup(props) {
        console.log(props);
        console.log(props.message);
    }
}
</script>