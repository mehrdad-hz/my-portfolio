<template>
  <div id="app">
    <Navbar v-if="!isCompleted" />
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  name: "app",
  components: {
    Navbar,
  },
  methods: {},
  computed: {
    isCompleted() {
      return this.$route.name === "intro";
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap");

* {
  margin: 0;
  padding: 0;
  transition: all 300ms;
  box-sizing: border-box;
  font-family: "Ubuntu", sans-serif;
}
html,
body {
  width: 100%;
  height: 100%;
  background-size: auto;
  background-position: center center;
  background-repeat: no-repeat;
  background-color: #0a192f;
}
.cursor {
  color: #eee;
}

.content {
  width: 0;
  height: 1vw;
  background-color: #112240;
  position: absolute;
  top: 30px;
  left: 30px;
  text-align: center;
  display: inline-block;
  backdrop-filter: blur(30px);
  box-shadow: 0 10px 30px -15px rgb(2 12 27 / 70%);
}
</style>
