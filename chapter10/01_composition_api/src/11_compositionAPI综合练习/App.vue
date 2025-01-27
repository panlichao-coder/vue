<template>
    <div>
        <CompositionAPIExample />
        <OptionAPIExample />
    </div>
</template>
<script>
import CompositionAPIExample from './CompositionAPIExample.vue';
import OptionAPIExample from './OptionAPIExample.vue';
export default({
    name: 'App',
    components: {
        CompositionAPIExample,
        OptionAPIExample
    },
})
</script>
