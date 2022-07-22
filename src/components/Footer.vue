<template>
  <div>
    <footer>
      <div class="d-flex justify-content-center">
        <div class="col col-md-8">
          <div
            class="d-flex justify-content-between align-items-center footerEachDiv"
          >
            <router-link :to="{ name: 'home'}">
              <font-awesome-icon icon="fas fa-home" />
              <p>Home</p>
            </router-link>

            <a href="#">
              <font-awesome-icon icon="fas fa-home" />
              <p>Home</p>
            </a>
            <a href="#">
              <font-awesome-icon icon="fas fa-home" />
              <p>Home</p>
            </a>
            <a href="#">
              <font-awesome-icon icon="fas fa-home" />
              <p>Profile</p>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Footer",
};
</script>

<style scoped></style>
