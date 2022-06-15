<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

footer {
  background-color: #ffffff;
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 10px 0 !important;
}

.footerEachDiv {
  text-align: center;
  padding: 0px 11px;
  color: #000;
}

footer a {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>
<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default {
  components: { Footer, Navbar },
};
</script>
