<template>
    <div class="app">
        <h4 ref="title">App</h4>
        <nav-bar ref="navBar"></nav-bar>
        <button @click="btnClick">点击</button>
    </div>
</template>
<script>
import NavBar from "./NavBar";
export default {
    name: "App",
    components: {
        NavBar
    },
    data(){
        return{
            name:["coder","why"]
        }
    },
    methods:{
        btnClick(){
            console.log(this.$refs.title);
            console.log(this.$refs.navBar);
            console.log(this.$refs.navBar.msg);
            this.$refs.navBar.sysHello();
            console.log(this.$refs.navBar.$el);
        }
    }
}
</script>
