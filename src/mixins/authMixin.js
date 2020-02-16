export default {
  computed: {
    isAdmin() {
      if (this.$store.state.auth.user) {
        return this.$store.state.auth.user.auth_lvl > 0;
      }
      return false;
    }
  }
};