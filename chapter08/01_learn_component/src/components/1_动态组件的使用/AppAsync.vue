<template>
    <div class="app-async">
        <home></home>
        <async-category></async-category>
    </div>
</template>
<script>
// 不会分包处理
import Home from './page/HomeHome.vue'
// 会分包处理
import { defineAsyncComponent } from 'vue'
const AsyncCategory = defineAsyncComponent(() => import('./page/AsyncCategory.vue'))
export default {
    components: {
        Home,
        AsyncCategory
    }
}

</script>
