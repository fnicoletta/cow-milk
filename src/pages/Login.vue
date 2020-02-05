<template>
  <AuthBase>
    <div class="login">
      <h3 v-if="error">
        {{ error.error }}
      </h3>
      <form @submit.prevent="login" class="login__container">
        <div class="login__input">
          <label for="email">Email</label>
          <input
            class="default-input"
            placeholder="Enter your email"
            type="text"
            name="email"
            v-model="email"
          />
        </div>
        <div class="login__input">
          <label for="password">Password</label>
          <input
            class="default-input"
            placeholder="Enter your password(8 characters)"
            type="text"
            name="password"
            v-model="password"
          />
        </div>
        <div class="login__submit">
          <button :class="loading ? 'button--disabled' : ''" class="button button--success">
            Login
          </button>
          <div
            v-if="loading"
            style="display: flex; justify-content:center; margin-top: 10px;"
          >
            <Spinner />
          </div>
        </div>
      </form>
    </div>
  </AuthBase>
</template>

<script>
import cookiesMixin from "../mixins/cookiesMixin";
import AuthBase from "@/components/Auth/AuthBase";
export default {
  components: {
    AuthBase
  },
  data() {
    return {
      email: "",
      password: "",
      error: "",
      loading: false
    };
  },
  methods: {
    login() {
      this.loading = true
      this.$edgewood
        .post("/signin", {
          email: this.email,
          password: this.password,
          api_token: 12345
        })
        .then(({ data }) => {
          this.loading = false
          this.setCookie("jwt-token", data.token, 1);
          this.$store.commit("auth/setUser", data.user);
          this.$router.push("/");
        })
        .catch(err => {
          if (err.response) {
            this.error = err.response.data;
          } else {
            console.log(err);
            alert("Something went wrong...");
          }
            this.loading = false
        });
    }
  },
  mixins: [cookiesMixin],
  mounted() {
    if (this.checkCookie("jwt-token")) {
      console.log(this.getCookie("jwt-token"));
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  .login__submit {
    // text-align: center;
    button {
      width: 100%;
    }
  }
  .default-input {
    width: 350px;
    margin: 10px 0;
  }
}
</style>
