<template>
  <div
    style="height: 100vh"
    class="d-flex justify-content-center align-items-center"
  >
    <div class="card d-flex justify-content-center">
      <div class="card-body">
        <h3>Pin Code</h3>
        <div class="input-wrapper" v-on:keyup.enter="storePin(pin)">
          <PincodeInput v-model="pin" :length="6" placeholder="0" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PincodeInput from "vue-pincode-input";
import { mapActions } from "vuex";
export default {
  name: "PincodeView",
  computed: {
    pin: {
      // getter
      get: function () {
        return this.$store.state.Pincode.pin;
      },
      // setter
      set: function (newValue) {
        this.$store.state.Pincode.pin = newValue;
      },
    },
  },
  components: {
    PincodeInput,
  },
  methods: {
    ...mapActions(["storePin"]),
  },
};
</script>

<style scoped></style>
