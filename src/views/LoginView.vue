<template>
  <div id="app">
    <div class="login-page">
      <transition name="fade">
        <div class="wallpaper-login"></div>
      </transition>
      <div class="wallpaper-register"></div>

      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-8 mx-auto">
            <div class="card login">
              <h1>Login</h1>
              <form class="form-group">
                <input
                  v-model="credentials.email"
                  type="email"
                  class="form-control"
                  placeholder="Email"
                  required
                />
                <input
                  v-model="credentials.password"
                  type="password"
                  class="form-control"
                  placeholder="Password"
                  required
                />
                <button
                  type="submit"
                  class="btn btn-primary btn-block"
                  @click.prevent="login"
                >
                  Login
                </button>
                <p>
                  Don't have an account?
                  <a>Sign up here</a>
                </p>
                <p><a href="#">Forgot your password?</a></p>
              </form>
            </div>
            <span v-for="error in errors" :key="error" style="display: block">{{
              error
            }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    credentials() {
      return this.$store.state.Login.credentials;
    },
    errors() {
      return this.$store.state.Login.errors;
    },
  },
  methods: {
    ...mapActions(["login"]),
  },
};
</script>
<style scoped>
p {
  line-height: 1rem;
}

.card {
  padding: 20px;
}

input {
  margin-bottom: 20px;
}

.login-page {
  align-items: center;
  display: flex;
  height: 100vh;
}

.wallpaper-login {
  background: url(https://images.pexels.com/photos/32237/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)
    no-repeat center center;
  background-size: cover;
  height: 100%;
  position: absolute;
  width: 100%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.wallpaper-register {
  background: url(https://images.pexels.com/photos/533671/pexels-photo-533671.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)
    no-repeat center center;
  background-size: cover;
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: -1;
}

h1 {
  margin-bottom: 1.5rem;
}

.error {
  animation-name: errorShake;
  animation-duration: 0.3s;
}

@keyframes errorShake {
  0% {
    transform: translateX(-25px);
  }
  25% {
    transform: translateX(25px);
  }
  50% {
    transform: translateX(-25px);
  }
  75% {
    transform: translateX(25px);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
