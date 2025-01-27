<template>
    <div>
        <input v-model="message" />
        <h4>{{ message }}</h4>
    </div>
</template>
<script>
import useDebounceRef from './useDebounceRef.js';
export default {
    name: 'CustomRefAPI',
    setup() {
        const message = useDebounceRef("Hello World", 500);
        return {
            message
        }
    }
}
</script>