<template>
  <WhiteModal title="Login" :closeModal="hideModal">
    <div class="login">
      <div class="auth__errors" v-if="validationErrors">
        <ul v-if="Array.isArray(validationErrors)">
          <li :key="i" v-for="(error, i) in validationErrors">
            {{ error }}
          </li>
        </ul>
        <span v-else>
          {{ validationErrors }}
        </span>
      </div>
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
        <div class="auth__cta" v-else>
          <span
            >Not a member yet? Click
            <span @click="switchToRegister" class="btn-link">here</span> to sign
            up!</span
          >
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
      errors: null,
      showingPassword: false
    };
  },
  props: {
    closeModal: {
      type: Function,
      default: () => {}
    },
    register: {
      type: Function,
      default: () => {}
    }
  },
  mixins: [cookiesMixin],
  components: {
    WhiteModal
  },
  computed: {
    validationErrors() {
      if (this.errors) {
        if (this.errors.errors) {
          return errors.error;
        } else {
          let errors = Object.values(this.errors);
          errors = errors.flat();
          return errors;
        }
      }
      return null;
    }
  },
  methods: {
    switchToRegister () {
      this.register()
      this.hideModal()
    },
    hideModal() {
      document.body.classList.remove("modal-open");
      this.closeModal();
    },
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
            console.log(err.response.data);
            console.log(err.response.status);
            if (err.response.status === 422) {
              this.errors = err.response.data.errors;
            } else {
              this.errors = err.response.data;
            }
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
