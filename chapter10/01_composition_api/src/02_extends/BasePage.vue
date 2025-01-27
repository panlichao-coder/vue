<template>
    <div>我是BasePage</div>
</template>
<script>
export default {
    name: 'BasePage',
    data() {
        return {
            title: 'BasePage'
        }
    },
    methods: {
        foo() {
            console.log('BasePage foo')
        }
    }
}
</script>