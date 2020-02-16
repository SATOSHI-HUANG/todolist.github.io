<script>
export default {
  props: {
    index: {
      type: Number,
      required: true
    }
  },
  computed: {
    todo() {
      return this.$store.state.todos[this.index];
    },
    completed: {
      get() {
        return this.todo.completed;
      },
      set(val) {
        this.$store.commit("UPDATE_TODO", {
          index: this.index,
          data: {
            content: this.todo.content,
            completed: val
          }
        });
      }
    },
    titleCompleted: function() {
      return {
        completed: this.completed
      };
    }
  },
  methods: {
    destoryHanlder() {
      if (confirm(`是否刪除此任務 ${this.todo.content} ?`))
        this.$store.commit("REMOVE_TODO", this.index);
    }
  }
};
</script>

<template src='./template.html'></template>

<style src='./style.css' scoped>
</style>>