<template>
  <navBar />
  <router-view />
</template>

<script>
import navBar from "@/components/navBar.vue";
export default {
  name: "app",
  components: {
    navBar,
  },
  setup() {
    return {};
  },
};

</script>

<style>
.navbar .navbar-nav .nav-link:hover {
  border-bottom: 2px solid #eceded;
  margin-bottom: -2px;
  color: rgb(255, 255, 255);
  transition: 0.1s;
}
a.router-link-exact-active {
  border-bottom: 2px solid #eceded !important;
  margin-bottom: -2px;
  color: rgb(255, 255, 255);
}
.nav-link {
  margin-left: 10px !important;
}


body {
  background-color: whitesmoke !important;
}
</style>
