<template>
  <div>
    <top-header></top-header>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TopHeader from "./components/TopHeader.vue";

export default defineComponent({
  name: "App",
  components: {
    TopHeader
  }
});
</script>

<style>
body {
  color: white;
  margin: 0;
  padding: 0;
  background: #f0f4f7;
  padding-top: 140px;
}
.container {
  width: 100%;
  max-width: 600px;
  margin: auto;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}
</style>
