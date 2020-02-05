<template>
  <AuthBase>
    <div class="register">
      <h3 v-if="error">
        {{ error.error }}
      </h3>
      <form @submit.prevent="register" class="login__container">
        <div class="login__input">
          <label for="name">Name</label>
          <input
            class="default-input"
            placeholder="Enter your name"
            type="text"
            name="name"
            v-model="name"
          />
        </div>
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
        <div class="login__input">
          <label for="confirm">Confirm Password</label>
          <input
            class="default-input"
            placeholder="Confirm Password"
            type="text"
            name="confirm"
            v-model="passwordConfirm"
          />
        </div>
        <div class="register__submit">
          <button
            :class="loading ? 'button--disabled' : ''"
            class="button button--success"
          >
            Register
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
import AuthBase from "@/components/Auth/AuthBase";
export default {
  components: {
    AuthBase
  },
  data() {
    return {
      name: "",
      email: "",
      password: "",
      passwordConfirm: "",
      error: "",
      loading: false
    };
  },
  methods: {
    emptyFields() {
      this.name = "";
      this.email = "";
      this.password = "";
      this.passwordConfirm = "";
    },
    register() {
      this.loading = true;
      this.$edgewood
        .post("signup", {
          api_token: 12345,
          name: this.name,
          email: this.email,
          password: this.password,
          password_confirmation: this.passwordConfirm
        })
        .then(({ data }) => {
          alert("Register Successful!");
          this.loading = false;
          this.emptyFields();
        })
        .catch(err => {
          console.log(err);
          alert("Something went wrong...");
          this.loading = false;
        });
    }
  }
};
</script>

<style></style>
