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
            <div class="d-flex align-items-center">
              <h4 class="fs-5">Balance</h4>
              <font-awesome-icon :icon="['fas', 'eye']"></font-awesome-icon>
            </div>
            <h1 class="display-6 fs-3 fw-bolder text-dark card-subtitle mb-2">
              1000ks
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
            <span>
              <font-awesome-icon :icon="['fas', 'qrcode']" />
              QR CODE
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
              <font-awesome-icon :icon="['fas', 'mobile-screen']" />
              SCANNER
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
          <div class="card-body d-flex justify-content-between">
            <span>
              <i class="fa fa-qrcode"></i>
              TRANSACTION
            </span>
            <span>
              <font-awesome-icon :icon="['fas', 'arrow-right']" />
            </span>
          </div>
        </div>
      </div>
      <div class="col">
        <div
          class="card d-flex justify-content-center align-content-center"
          style="margin: 10px; height: 37px; border-radius: 10px"
        >
          <div class="card-body d-flex justify-content-between">
            <span> TRANSACTION </span>
            <span>
              <font-awesome-icon :icon="['fas', 'arrow-right']" />
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>
