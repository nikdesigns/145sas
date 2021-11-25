<template>
  <top-navbar></top-navbar>
  <router-view />
  <bottom-footer></bottom-footer>
</template>



<script>
import BottomFooter from "./components/BottomFooter.vue";
import TopNavbar from "./components/TopNavbar.vue";
export default {
  components: { TopNavbar, BottomFooter },
};
</script>


<style>
</style>
