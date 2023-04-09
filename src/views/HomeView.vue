<template>
  <IpwHome />
</template>

<script>
// @ is an alias to /src
import IpwHome from "@/components/IpwHome/IpwHome.vue";

import "aos/dist/aos.css";
import AOS from "aos";
import $ from "jquery";
import { onMounted } from "vue";
export default {
  name: "HomeView",
  components: {
    IpwHome,
  },
  setup() {
    onMounted(() => {
      AOS.init({
        duration: 1500,
      });

      $("h1").animate({ opacity: "1" }, 3000);
      $("p").animate({ opacity: "1" }, 2000);
    });
  },
};
</script>

<style scoped>
div {
  background-color: black;
}
</style>
