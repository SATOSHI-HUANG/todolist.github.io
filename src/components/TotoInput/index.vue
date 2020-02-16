<script>
export default {
  data() {
    return {
      todo: ""
    };
  },
  methods: {
    submitHanlder() {
      if (!this.todo) return;
      this.$store.commit("ADD_TODO", {
        content: this.todo,
        completed: false
      });

      this.todo = "";
    }
  }
};
</script>

<template src='./template.html'></template>

<style src='./style.css' scoped>
</style>