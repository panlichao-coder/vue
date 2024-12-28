<template>
  <div class="app">
    <ShowMessage title="我是标题" content="我是内容"></ShowMessage>
    <ShowMessage :title="title" :content="content"></ShowMessage>
    <ShowMessage
      :title="message.title"
      :content="message.content"
    ></ShowMessage>
    <showMessage v-bind="message"></showMessage>
  </div>
</template>

<script>
import ShowMessage from "./ShowMessage.vue";
export default {
  components: {
    ShowMessage,
  },
  data() {
    return {
      title: "标题",
      content: "内容",
      message: {
        title: "message.标题",
        content: "message.内容",
      },
    };
  },
};
</script>
