<template>
  <div class="navbar">
    <Login v-if="loggingIn" :closeModal="toggleLogin"/>
    <Register v-if="registering" :closeModal="toggleRegister"/>
    <div
      class="navbar__container"
      :class="
        scrolledBy ? 'navbar--theme navbar--fixed' : 'navbar--transparent'
      "
    >
      <ul class="navbar__container-items">
        <!-- todo -->
        <div class="navbar__logo">
         <img src="https://dcassetcdn.com/design_img/3136635/606087/606087_17349263_3136635_50b8542e_thumbnail.png" alt="logo">
        </div>
        <div class="navbar__links">
          <router-link to="/">
            <li>Home</li>
          </router-link>
          <router-link to="/products">
            <li>Products</li>
          </router-link>
          <router-link to="/events">
            <li>Events</li>
          </router-link>
        </div>
        <div class="navbar__ctas">
          <a
            v-if="$store.state.auth.user"
            @click.stop="logout"
            class="navbar__cta-link"
          >
            <li><span>Logout</span></li>
          </a>
          <a v-if="!$store.state.auth.user" class="navbar__cta-link">
            <li>
              <span @click="toggleLogin">Login</span>/
              <span @click="toggleRegister">Register</span>
            </li>
          </a>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import cookieMixin from "@/mixins/cookiesMixin";
import Login from "@/components/Auth/Login";
import Register from "@/components/Auth/Register";
export default {
  components: {
    Login,
    Register
  },
  mixins: [cookieMixin],
  data() {
    return {
      scrollPosition: 0,
      loading: false,
      registering: false,
      loggingIn: false
    };
  },
  methods: {
    toggleLogin () {
      this.loggingIn =  !this.loggingIn
    },
    toggleRegister () {
      this.registering = !this.registering
    },
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
    logout() {
      this.loading = true;
      const currentToken = this.getCookie("jwt-token");
      this.setCookie("jwt-token", "", 0);
      const dataToPass = {
        api_token: 12345
      };
      const headers = {
        headers: {
          Authorization: `Bearer ${currentToken}`
        }
      };
      this.$edgewood
        .post("signout", dataToPass, headers)
        .then(({ data }) => {
          this.loading = false;
          this.$store.commit("auth/setUser", null);
          this.$router.push("/login");
        })
        .catch(err => {
          this.loading = false;
          console.log(err);
          alert("something went wrong...");
        });
    }
  },
  computed: {
    scrolledBy() {
      if (this.scrollPosition > 80) {
        return true;
      }
      return false;
    }
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  }
};
</script>

<style lang="scss">
.navbar__cta-link {
  cursor: pointer;
}
</style>
