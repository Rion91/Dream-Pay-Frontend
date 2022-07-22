<template>
  <div>
    <div
        class="d-flex justify-content-center align-items-center show-amount-box"
        style="height: 100vh"
    >
      <div
          class="card"
          style="padding-right: 60px; padding-left: 60px; border-radius: 30px"
      >
        <h1 class="p-2">SCANNER</h1>
        <div class="card-body">
          <div class="panel panel-default">
            <div class="panel-heading">
              <div class="row">
                <div class="col-md-6">
                  <img
                      alt="scanner"
                      src="../assets/img/QRScanner.png"
                      width="200px"
                      height="200px"
                  />
                </div>
                <div class="col-md-6 mt-3">
                  <input
                      type="button"
                      class="btn btn-success btn-xs"
                      @click="openModel"
                      value="SCANNER"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
        class="d-flex justify-content-center align-items-center show-amount-box"
        style="height: 100vh; visibility: hidden;"
    >
      <div
          class="card"
          style="padding-right: 60px; padding-left: 60px; border-radius: 30px"
      >
        <div class="card-body">
          <div
              :class="{ fullscreen: fullscreen }"
              ref="wrapper"
              @fullscreenchange="onFullscreenChange"
          ></div>
        </div>
      </div>
    </div>

    <div v-if="myModel">
      <transition name="model">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h4 class="modal-title"></h4>
                  <button type="button" class="btn btn-secondary btn-xs" @click="myModel = false">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <qrcode-stream
                      @init="logErrors"
                      @decode="onDecode"
                      :track="paintOutline"
                  >
                  </qrcode-stream>
                  <br/>
                  <small class="text-muted">Align front of QR code within frame to scan</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "QRView",
  data() {
    return {
      value: "",
      fullscreen: false,
      allData: "",
      myModel: false,
      actionButton: "Insert",
      dynamicTitle: "Add Data",
    };
  },
  computed: {
    fullscreenIcon() {
      if (this.fullscreen) {
        return "/fullscreen-exit.svg";
      } else {
        return "/fullscreen.svg";
      }
    },
  },
  watch: {
    fullscreen(enterFullscreen) {
      if (enterFullscreen) {
        this.requestFullscreen();
      } else {
        this.exitFullscreen();
      }
    },
  },
  components: {},
  methods: {
    onDecode(value) {
      this.value = value;
      router.push({name: 'transfer', params: {recipient: this.value}})
    },
    paintOutline(detectedCodes, ctx) {
      for (const detectedCode of detectedCodes) {
        const [firstPoint, ...otherPoints] = detectedCode.cornerPoints;

        ctx.strokeStyle = "red";

        ctx.beginPath();
        ctx.moveTo(firstPoint.x, firstPoint.y);
        for (const {x, y} of otherPoints) {
          ctx.lineTo(x, y);
        }
        ctx.lineTo(firstPoint.x, firstPoint.y);
        ctx.closePath();
        ctx.stroke();
      }
    },
    // eslint-disable-next-line no-unused-vars
    onFullscreenChange(event) {
      // This becomes important when the user doesn't use the button to exit
      // fullscreen but hits ESC on desktop, pushes a physical back button on
      // mobile etc.

      this.fullscreen = document.fullscreenElement !== null;
    },

    requestFullscreen() {
      const elem = this.$refs.wrapper;

      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.mozRequestFullScreen) {
        /* Firefox */
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        /* IE/Edge */
        elem.msRequestFullscreen();
      }
    },

    exitFullscreen() {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        /* Firefox */
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        /* Chrome, Safari and Opera */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        /* IE/Edge */
        document.msExitFullscreen();
      }
    },

    logErrors(promise) {
      promise.catch(console.error);
    },

    openModel: function () {
      this.myModel = !this.myModel;
    },
  },
};
</script>

<style scoped>

.fullscreen {
  position: fixed;
  z-index: 1000;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}

.fullscreen-button {
  background-color: white;
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 1rem;
}

.fullscreen-button img {
  width: 2rem;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
</style>
