<template>
  <div class="login">
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
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login () {
      this.$edgewood.post('/signin', {
        email: this.email,
        password: this.password,
        api_token: 12345
      }).then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
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
