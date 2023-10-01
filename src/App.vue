<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App"
});
</script>

<style>
body {
  color: white;
  margin: 0;
  padding: 0;
  background: rgb(253, 253, 254);
  background: linear-gradient(
    0deg,
    rgba(253, 253, 254, 1) 0%,
    rgba(171, 157, 202, 1) 59%,
    rgba(60, 83, 164, 1) 100%
  );
  height: 100dvh;
  /* padding-top: 140px; */
}
.container {
  width: 100%;
  max-width: 600px;
  margin: auto;
}
#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  height: 100%;
}
</style>
