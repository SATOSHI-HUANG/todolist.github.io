<script>
export default {
  data() {
    return {
      items: {
        "My Task": "all",
        "In Progress": "active",
        Completed: "completed"
      },
      current_item: "all"
    };
  },
  methods: {
    selectHandler(e) {
      let item = this.items[e.target.innerHTML];

      if (item == this.current_item) return;

      this.current_item = item;

      this.$store.commit("SELECT_ITEM", item);
    }
  }
};
</script>

<template src='./template.html'></template>

<style src='./style.css' scoped>
</style>