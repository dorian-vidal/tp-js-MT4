<script>
import tp1 from "./components/tp1.vue";
import tp2 from "./components/tp2.vue";
export default {
  components: {
    tp1,
    tp2,
  },
};
</script>

<template>
  <div>
    <router-link to="/">TP 1</router-link>
    <br />
    <router-link to="/tp2">TP 2</router-link>
    <router-view></router-view>
  </div>
</template>

<style scoped></style>
