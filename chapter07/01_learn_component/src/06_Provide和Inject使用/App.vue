<template>
    <div class="app">
        <h2>APP</h2>
        <HomePage></HomePage>
        <button @click="addFriend">Add Friend</button>
    </div>
</template>
<script>
    import HomePage from "./HomePage.vue";
    import { computed } from "vue";
    export default{
        components:{
            HomePage
        },
        data(){
            return {
                friends: ["kobe","james"]
            }
        },
        provide(){
            return {
                name: "why",
                age: 18,
                friends: this.friends,
                friendLength: computed(() => this.friends.length)
            }
        },
        methods:{
            addFriend(){
                this.friends.push("jack")
            }
        }
    }
</script>