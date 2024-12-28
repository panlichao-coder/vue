<template>
  <div>
    <button @click="sub">-1</button>
    <button @click="add">+1</button>
    <input type="text" v-model.number="count" />
    <button @click="incrementN">+N</button>
  </div>
</template>
<script>
export default {
  emits:{
    add: null,
    sub: null,
    addN: (num) => {
      if (typeof num === 'number' && num > 10) {
        return true;
      } else {
        return false;
      }
    }
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    add() {
      this.$emit("add");
    },
    sub() {
      this.$emit("sub");
    },
    incrementN() {
      this.$emit("addN", this.count);
    },
  },
};
</script>
