<template>
    <div class="show-message">
        <h4>{{ title }}</h4>
        <h4>{{ content }}</h4>
    </div>
</template>

<script>
export default {
    props: ['title', 'content']
}
</script>