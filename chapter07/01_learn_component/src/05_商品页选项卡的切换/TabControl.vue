<template>
  <div class="tab-control">
    <div v-for="(title, index) in titles" class="tab-control-item" :class="{ active: currentIndex === index }"
      :key="title" @click="itemClick(index)">
      <span>{{ title }}</span>
    </div>
  </div>
</template>
<script>
export default {
  emits: ["titleClick"],
  data() {
    return {
      titles: ["衣服", "鞋子", "裤子", "筷子", "碗", "洗衣机", "电冰箱", "电脑",],
      currentIndex: 0,
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.tabName = this.titles[index];
      this.$emit("titleClick", this.tabName);
    },
  },
};
</script>
<style scoped>
  .tab-control{
    display: flex;
  }
  .tab-control-item{
    flex: 1;
    text-align: center;
  }
  .tab-control-item.active{
    color: red;
  }
  .tab-control-tem.active span{
    border-bottom: 2px solid red;
    padding:5px 10px;
  }
</style>