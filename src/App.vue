<template>
  <div id="app">
    <TheNavigation />
    <TheCart />
    <router-view />
  </div>
</template>
<script>
import TheNavigation from "@/components/TheNavigation";
import TheCart from "@/components/TheCart";
export default {
  components: { TheNavigation, TheCart },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  position: relative;
}
#nav {
  text-align: center;
}
</style>
