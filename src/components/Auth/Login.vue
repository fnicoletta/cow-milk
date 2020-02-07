<template>
  <WhiteModal title="Login" :closeModal="closeModal">
    <div class="login">
      <p v-if="error" class="login__error">
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
          <label for="password">Password</label>
          <input
            placeholder="Enter your Password"
            name="password"
            type="password"
            class="default-input"
            v-model="password"
            ref="password"
          />
        </div>
        <div class="auth__show-password">
          <i @click="togglePass" v-if="showingPassword" class="fas fa-eye"></i>
          <i @click="togglePass" v-else class="fas fa-eye-slash"></i>
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
      error: "",
      showingPassword: false
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
    togglePass() {
      this.showingPassword = !this.showingPassword;
      if (this.showingPassword) {
        this.$refs.password.type = "text";
      } else {
        this.$refs.password.type = "password";
      }
    },
    login() {
      this.$refs.password.type = "password";
      this.loading = true;
      this.error = "";
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
          this.closeModal();
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

<style lang="scss" scoped></style>
