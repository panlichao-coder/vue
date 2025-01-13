<template>
    <div class="app">
        <h2>App</h2>
        <h4>{{ message }}</h4>
        <button @click="changeMessage">改变message</button>
        <horizon-line></horizon-line>
        <h3>双向绑定效果</h3>
        <hy-input :message="message" @update:modelValue="setMessage"></hy-input>
        <hy-input v-model="message"></hy-input>
        <h3>绑定多个model</h3>
        <hy-multiple-input 
            :message="message" 
            :title="title" 
            @update:message="setMessage" 
            @update:title="setTitle"
        ></hy-multiple-input>
        <h4>{{ message }}</h4>
        <h4>{{ title }}</h4>
        <h3>绑定对象</h3>
        <h4>{{ formData.name }}</h4>
        <h4>{{ formData.title }}</h4>
        <hy-form v-model="formData"></hy-form>
    </div>
</template>

<script>
import HyInput from './HyInput.vue'
import HyMultipleInput from './HyMultipleInput.vue'
import HyForm from './HyForm.vue';
export default {
  components: { HyInput, HyMultipleInput, HyForm },
    name: "App",
    data() {
        return {
            message: "Hello Vue",
            title: "title",
            formData:{
                name: "name",
                title: "title"
            }
        }
    },
    methods: {
        changeMessage() {
            this.message = "Hello World"
        },
        setMessage(value){
            this.message = value
            console.log(value)
        },
        setTitle(value){
            this.title = value
            console.log(value)
        }
    }
}
</script>