<template>
  <div class="home">
    <div style="height: 10vh; background-color: blue">
      <div
          class="d-flex justify-content-center align-items-center show-amount-box"
          style="height: 20vh"
      >
        <div
            class="card"
            style="padding-right: 60px; padding-left: 60px; border-radius: 30px"
        >
          <div class="card-body">
            <div class="d-flex align-items-center justify-content-center mb-2">
              <span class="fs-6 mx-2">Balance </span>
              <font-awesome-icon :icon="['fas',   showBalance ? 'mobile-screen' : 'eye']" class="mx-2" @click="showBalance = !showBalance"/>
            </div>
            <h1 class="display-6 fs-3 fw-bolder text-dark card-subtitle mb-2">
              {{ showBalance ? balance : '******' }}
            </h1>
          </div>
        </div>
      </div>
    </div>

    <div class="d-flex justify-content-between" style="margin-top: 50px">
      <div class="col col-sm-6">
        <div
            class="card"
            style="margin: 10px; height: 50px; border-radius: 10px"
        >
          <div class="card-body">
            <span class="qrcode">
              <font-awesome-icon :icon="['fas', 'qrcode']"/>
              <router-link :to="{ name: 'qrcode'}" class="text-uppercase qrcode"> qr code</router-link>
            </span>
          </div>
        </div>
      </div>

      <div class="col col-sm-6">
        <div
            class="card d-flex justify-content-center align-items-center align-content-center"
            style="margin: 10px; height: 50px; border-radius: 10px"
        >
          <div class="card-body">
            <span class="trext-uppercase fs-6 fw-normal text-black">
              <font-awesome-icon :icon="['fas', 'mobile-screen']"/>
              <router-link :to="{ name: 'scanner' }" class="text-uppercase scanner"> scanner</router-link>
            </span>
          </div>
        </div>
      </div>
    </div>

    <div>

      <div class="col">
        <div
            class="card d-flex justify-content-center align-content-center"
            style="margin: 10px; height: 37px; border-radius: 10px"
        >

          <router-link :to="{ name: 'transfer' }" class="text-uppercase transaction">
            <div class="card-body d-flex justify-content-between align-items-center">
              <span>Transfer</span>
              <font-awesome-icon :icon="['fas', 'arrow-right']"/>
            </div>
          </router-link>

        </div>
      </div>

      <div class="col">
        <div
            class="card d-flex justify-content-center align-content-center"
            style="margin: 10px; height: 37px; border-radius: 10px"
        >

          <router-link :to="{ name: 'transactions' }" class="text-uppercase transaction">
            <div class="card-body d-flex justify-content-between align-items-center">
              <span>History</span>
              <font-awesome-icon :icon="['fas', 'arrow-right']"/>
            </div>
          </router-link>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      balance: 0,
      showBalance: false
    }
  },
  mounted() {
    this.$store.dispatch("fetchProfile").then((response) => {
      this.balance = this.$store.state.authUser.balance
    }).catch((error) => {
      console.log(error);
    })
  },
};
</script>

<style scoped>
.qrcode {
  text-decoration: none;
  color: black;
}

.scanner {
  text-decoration: none;
  color: black;
}

.transaction {
  text-decoration: none;
  color: black;
}
</style>
