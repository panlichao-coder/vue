<template>
    <div class="home-page">
        <h4 ref="title">Home组件：{{ message }}</h4>
        <button @click="changeMessage">修改Home组件的message</button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            message: "Hello Vue"
        }
    },
    methods:{
        changeMessage(){
            this.message = "Hello World"
        }
    },
    beforeCreate(){
        console.log("Home beforeCreate");
    },
    created(){
        console.log("Home created");
    },
    beforeMount(){
        console.log("Home beforeMount");
    },
    mounted(){
        console.log("Home mounted");
    },
    beforeUnmount(){
        console.log("Home beforeUnmount");
    },
    unmounted(){
        console.log("Home unmounted");
    },
    beforeUpdate(){
        console.log("Home beforeUpdate",this.$refs.title.innerHTML);
    },
    updated(){
        console.log("Home updated",this.$refs.title.innerHTML);
    },
}
</script>
