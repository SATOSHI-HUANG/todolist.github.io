<template>
  <div id="app">
    <nav-list></nav-list>
    <todo-input></todo-input>
    <div class="list">
      <todo-item v-for="index in todoIndex" :key="index" :index="index"></todo-item>
    </div>
  </div>
</template>

<script>
import NavList from "./components/NavComponent/index.vue";
import TodoInput from "./components/TotoInput/index.vue";
import TodoItem from "./components/TotoItem/index.vue";

export default {
  name: "App",
  components: {
    NavList,
    TodoInput,
    TodoItem
  },
  computed: {
    todoIndex() {
      return this.$store.getters["todoIndex"];
    }
  },
  mounted() {
    this.$store.dispatch("INIT_TODOS");
  }
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #e1e1e1;
  width: 100%;
  height: 100vh;
}
</style>
