<template>
  <div style="height: 10vh">
    <div
        class="d-flex justify-content-center align-items-center show-amount-box"
        style="height: 40vh"
    >
      <div
          class="card"
          style="padding-right: 60px; padding-left: 60px; border-radius: 20px; margin-top: 30px"
      >
        <h1 class="p-5">QR CODE</h1>

        <div class="card-body">
          <qrcode-vue :value="value" :size="size" level="H"/>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-center align-items-center show-amount-box"
         style="height: 40vh">
      <img
          alt="scanner"
          src="../assets/img/DpLogo.png"
          width="200px"
          height="200px"
      />
    </div>
  </div>
</template>

<script>
import QrcodeVue from "qrcode.vue";
import {mapActions} from "vuex";

export default {
  name: "QRView",
  data() {
    return {
      value: "",
      size: 150,
    };
  },
  components: {
    QrcodeVue,
  },
  methods: {
    ...mapActions(["fetchProfile"]),
  },
  async created() {
    await this.fetchProfile();
    this.value = this.$store.state.authUser.email;
  },
};
</script>

<style scoped></style>