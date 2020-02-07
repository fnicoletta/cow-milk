<template>
  <WhiteModal title="Login" :closeModal="closeModal">
    <div class="login">
      <p class="login__error">
        {{ error.error }}
      </p>
      <form @submit.prevent="login">
        <div class="auth__input">
          <label for="email">Email</label>
          <input
            placeholder="Enter your email"
            name="email"
            type="text"
            class="default-input"
            v-model="email"
          />
        </div>
        <div class="auth__input">
          <label for="email">Password</label>
          <input
            placeholder="Enter your email"
            name="email"
            type="password"
            class="default-input"
            v-model="password"
          />
        </div>
        <div class="auth__submit">
          <button
            :class="loading ? 'button--disabled' : ''"
            class="button button--success"
          >
            Submit
          </button>
        </div>
        <div
        v-if="loading"
          style="display: flex; justify-content:center; margin-top: 10px;"
        >
          <Spinner color="gray" />
        </div>
      </form>
    </div>
  </WhiteModal>
</template>

<script>
import WhiteModal from "@/components/Common/WhiteModal";
import cookiesMixin from "../../mixins/cookiesMixin";

export default {
  data() {
    return {
      email: "",
      password: "",
      loading: false,
      error: ''
    };
  },
  props: {
    closeModal: {
      type: Function,
      default: () => {}
    }
  },
  mixins: [cookiesMixin],
  components: {
    WhiteModal
  },
  methods: {
    login() {
      this.loading = true;
      this.error = ''
      this.$edgewood
        .post("/signin", {
          email: this.email,
          password: this.password,
          api_token: 12345
        })
        .then(({ data }) => {
          this.loading = false;
          this.setCookie("jwt-token", data.token, 1);
          this.$store.commit("auth/setUser", data.user);
          // this.$router.push("/");
          this.closeModal()
        })
        .catch(err => {
          if (err.response) {
            this.error = err.response.data;
          } else {
            console.log(err);
            alert("Something went wrong...");
          }
          this.loading = false;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  height: 100%;
  margin-top: 15px;
  .default-input {
    width: 90%;
    display: block;
    margin: 0 auto;
  }
  label {
    margin-left: 25px;
  }
  .auth__input {
    margin: 10px 0;
  }
  .auth__submit {
    text-align: center;
    button {
      width: 90%;
    }
  }
}
.login__error {
  color: red;
  text-align: center;
}
</style>
