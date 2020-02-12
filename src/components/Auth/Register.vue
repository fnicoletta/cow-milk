<template>
  <WhiteModal title="Register" :closeModal="hideModal">
    <div class="register">
      <div class="auth__errors">
        <ul v-if="validationErrors">
          <li :key="i" v-for="(error, i) in validationErrors">
            {{ error }}
          </li>
        </ul>
      </div>
      <form @submit.prevent="register">
        <div class="auth__input">
          <label for="name">Name</label>
          <input
            placeholder="Enter your Name"
            name="name"
            type="text"
            class="default-input"
            v-model="name"
          />
        </div>
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
            placeholder="Enter your password(8 characters minimum)"
            name="password"
            type="password"
            class="default-input"
            v-model="password"
            ref="password"
          />
        </div>
        <div class="auth__input">
          <label for="password-confirm">Password Confirm</label>
          <input
            placeholder="Confirm your password"
            name="password-confirm"
            type="password"
            class="default-input"
            v-model="passwordConfirm"
            ref="passwordConfirm"
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
            >Already a member? Click
            <span @click="switchToLogin" class="btn-link">here</span> to sign
            in!</span
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
  props: {
    closeModal: {
      type: Function,
      default: () => {}
    },
    login: {
      type: Function,
      default: () => {}
    }
  },
  mixins: [cookiesMixin],

  components: {
    WhiteModal
  },
  data() {
    return {
      name: "",
      email: "",
      password: "",
      passwordConfirm: "",
      errors: null,
      loading: false,
      showingPassword: false
    };
  },
  computed: {
    validationErrors() {
      if (this.errors) {
        let errors = Object.values(this.errors);
        errors = errors.flat();
        return errors;
      }
      return null;
    }
  },
  methods: {
    switchToLogin() {
      this.login();
      this.hideModal();
    },
    hideModal() {
      document.body.classList.remove("modal-open");
      this.closeModal();
    },
    togglePass() {
      this.showingPassword = !this.showingPassword;
      if (this.showingPassword) {
        this.$refs.password.type = "text";
        this.$refs.passwordConfirm.type = "text";
      } else {
        this.$refs.password.type = "password";
        this.$refs.passwordConfirm.type = "password";
      }
    },
    emptyFields() {
      this.name = "";
      this.email = "";
      this.password = "";
      this.passwordConfirm = "";
    },
    register() {
      this.errors = null;
      this.$refs.password.type = "password";
      this.$refs.passwordConfirm.type = "password";
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
          this.$swal({
            title: `Register Successful`,
            icon: "success"
          });
          this.loading = false;
          this.emptyFields();
          this.hideModal()
        })
        .catch(err => {
          console.log(err.response.data.errors);
          this.errors = err.response.data.errors;
          this.loading = false;
        });
    }
  }
};
</script>

<style></style>
