<template>
  <div>
    <nav
      class="d-flex justify-content-between navbar"
      style="background-color: aquamarine"
    >
      <div class="container">
        <a></a>
        <h1 class="text-uppercase fs-4 fw-bold text-center text-dark">
          DreamPay
        </h1>
        <font-awesome-icon :icon="['fas', 'bell']"></font-awesome-icon>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Navbar",
};
</script>

<style scoped></style>
