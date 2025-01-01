<template>
    <div class="app">
        <h2>HomeContent</h2>
        <p>{{ name }} - {{ age }} - {{ friends }} - {{ friendLength }}</p>
    </div>
</template>
<script>
    export default{
        inject:["name","age","friends","friendLength"]
    }
</script>