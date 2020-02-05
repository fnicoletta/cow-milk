<template>
  <div class="navbar">
    <div
      class="navbar__container"
      :class="
        scrolledBy ? 'navbar--theme navbar--fixed' : 'navbar--transparent'
      "
    >
      <ul class="navbar__container-items">
        <router-link to="/">
          <li>Home</li>
        </router-link>
        <router-link to="/products">
          <li>Products</li>
        </router-link>
        <router-link to="/events">
          <li>Events</li>
        </router-link>
        <a v-if="$store.state.auth.user" @click.stop="logout" class="navbar__cta-link">
          <li>Logout</li>
        </a>
      </ul>
    </div>
  </div>
</template>

<script>
import cookieMixin from '@/mixins/cookiesMixin'
export default {
  mixins: [cookieMixin],
  data() {
    return {
      scrollPosition: 0,
      loading: false
    };
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
    logout() {
      this.loading = true
      const currentToken = this.getCookie("jwt-token")
      this.setCookie('jwt-token', '', 0);
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
          this.loading = false
          this.$store.commit('auth/setUser', null)
          this.$router.push('/login')
        })
        .catch(err => {
          this.loading = false
          console.log(err);
          alert('something went wrong...')
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
