<template>
  <Panel :close="close">
    <div class="navbar-panel">
      <h3>
        <template v-if="$store.state.auth.user">
          {{ $store.state.auth.user.name }}</template
        >
      </h3>
      <ul>
        <router-link to="/orders">
          <li>
            Orders
          </li>
        </router-link>
        <router-link to="/settings">
          <li>
            Settings
          </li>
        </router-link>
        <li class="navbar-panel__logout" @click="logout">
          Logout
        </li>
      </ul>
    </div>
  </Panel>
</template>

<script>
import Panel from "@/components/Misc/Panel";
import cookieMixin from "@/mixins/cookiesMixin";

export default {
  components: {
    Panel
  },
  mixins: [cookieMixin],
  props: {
    close: {
      type: Function,
      default: () => {}
    }
  },
  methods: {
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
          this.close()
        })
        .catch(err => {
          this.loading = false;
          console.log(err);
          alert("something went wrong...");
        });
    }
  }
};
</script>

<style></style>
