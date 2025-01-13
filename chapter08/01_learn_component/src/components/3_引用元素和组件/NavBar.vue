<template>
    <div class="nav-bar">
        <h2>NavBar</h2>
        <button @click="getParentAndRoot">获取父组件和根组件</button>
    </div>
</template>
<script>
export default{
    name: "NavBar",
    methods:{
        sysHello(){
            console.log("Hello from NavBar")
        },
        getParentAndRoot(){
            console.log(this.$parent);
            console.log(this.$parent.names);
            console.log(this.$root);
        }
    },
    data(){
        return{
            msg: "Hello, NavBar!"
        }
    }
}
</script>
