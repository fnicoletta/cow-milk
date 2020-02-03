<template>
  <div class="login">
    <h3 v-if="error">
      {{ error }}
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
        <button class="button button--success">
          Login
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import cookiesMixin from '../mixins/cookiesMixin';
export default {
  data() {
    return {
      email: "",
      password: "",
      error: ""
    };
  },
  methods: {
    login () {
      this.$edgewood.post('/signin', {
        email: this.email,
        password: this.password,
        api_token: 12345
      }).then(({data}) => {
        this.setCookie('jwt-token', data.token, 1)
        this.$router.push('/');
      })
      .catch(err => {
        if (err.response) {
          this.error = err.response.data
        } else {
          console.log(err)
          alert('Something went wrong...')
        }
      })
    }
  },
  mixins: [cookiesMixin],
  mounted () {
    if (this.checkCookie('jwt-token')) {
      console.log(this.getCookie('jwt-token'))
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: $cream;
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
