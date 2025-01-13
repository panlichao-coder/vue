<template>
    <div class="app">
        <h2>App</h2>
    </div>
</template>
<script>
import("./utils/math").then(({ sum }) => {
    console.log(sum(1, 2))
})
</script>
