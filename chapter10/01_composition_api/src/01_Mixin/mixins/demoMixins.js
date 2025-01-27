export const demoMixin = {
  data() {
    return {
      mesage: "Hello World",
      title: "标题",
    };
  },
  methods: {
    foo() {
      console.log("foo函数被调用了(MIXIN)");
    },
  },
  created() {
    console.log("demo mixin created");
  },
};
