<template>
  <div class="form-container">
    <form class="form" @submit.prevent="handleLogin">
      <div v-if="loginError" class="error-message">
        <p>Your email and/or password are incorrect</p>
      </div>

      <div class="form-control">
        <label for="email">Work Email</label>
        <input 
          type="email"
          name="email"
          id="email"
          v-model="email"
          placeholder="you@company.com"
          @blur="validateEmail"
          :class="{'invalid-field' : !isValidEmail}"
        >
        <span v-if="!isValidEmail" class="email-error">Enter a valid email address.</span>
      </div>

      <div class="form-control">
        <label for="password">Password</label>
        <a href="#" class="forgot-password">Forgot password?</a>
        <input 
          type="password"
          name="password"
          id="password"
          v-model="password"
          placeholder="6+ Characters"
          :class="{'invalid-field' : !isValidPassword}"
          @input="validatePassword"
          @blur="validatePassword"
        >
        <span v-if="!isValidPassword" class="password-error">{{ passwordErrMsg }}</span>
      </div>

      <button
        class="login-btn"
        type="submit"
        :disabled="!(isValidEmail && isValidPassword && email && password)"
      >Login</button>

    </form>
    <div class="form-footer">
      <span>Don't have an account? <a href="#">Sign up</a></span>
      <a href="#">Login via SSO</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "LoginForm",
    data() {
      return {
        email: "",
        password: "",
        passwordErrMsg: "",
        isValidEmail: true,
        isValidPassword: true,
        isLoginError: false,
        loginError: false,

        validUsers: [
          { email: "mohamed@instabug.com", password: "A12345678" },
          { email: "mohamed1@instabug.com", password: "A12345678" },
          { email: "mohamed2@instabug.com", password: "A12345678" },
          { email: "mohamed3@instabug.com", password: "A12345678" },
          { email: "mohamed4@instabug.com", password: "A12345678" },
          { email: "mohamed5@instabug.com", password: "A12345678" },
          { email: "mohamed6@instabug.com", password: "A12345678" },
          { email: "mohamed7@instabug.com", password: "A12345678" },
        ],

      }
    },
    methods: {
      validateEmail() {
        //eslint-disable-next-line
        this.isValidEmail = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) ? true : false;
      },

      validatePassword() {
        const emailName = this.email.substring(0, this.email.indexOf("@"));
        if (this.password.includes(emailName) && emailName !== "") {
          this.passwordErrMsg = "Password shouldn't contain email address name";
          this.isValidPassword = false;
        }
        else if (this.password.length < 6 ||
          !/[0-9]/.test(this.password) ||
          !/[A-Z]/.test(this.password)) {
          this.passwordErrMsg = "Must be at least 6 and contain one number and one uppercase";
          this.isValidPassword = false;
        }
        else {
          this.passwordErrMsg = "";
          this.isValidPassword = true;
        }
      },

      handleLogin() {
        const userExists = this.validUsers
          .find((user) => user.email === this.email && user.password === this.password);

        if(userExists) {
          localStorage.setItem("email", this.email);
          this.$router.push("/welcome");
        }
        else {
          this.loginError = true;
        }
      }
    },
  }
</script>

<style lang="scss" scoped>

.error-message {
  font-size: $text-medium;
  background-color: $error-background;
  border: 1px solid rgba(0,0,0,0.25);
  border-radius: 3px;
  margin-block-end: 16px;
  padding: $space-xs;
}

.form-control {
  margin-block-end: 16px;
  position: relative;

  label {
    display: inline-block;
    margin-block-end: 4px;
    cursor: pointer;
  }

  input {
    width: 100%;
    padding: 8px 16px;
    border: 1px solid $gray-color;
    border-radius: 4px;
    color: $blue-text;
    outline: 0;
    &:focus {
      border-color: #09f;
      box-shadow: inset 0 0 4px 0 #09f;
    }
    &::placeholder {
      color: $gray-color-1;
    }
  }

  .invalid-field {
    border-color: #f24220;
  }

  .forgot-password {
    position: absolute;
    right: 0px;
    color: #a6a6a6;
    &:hover {
      color: $blue-primary;
    }
  }

  .email-error,
  .password-error {
    color: #f24220;
    font-size: $text-small;
    display: inline-block;
    margin-block-start: 4px;
  }
}

.login-btn {
  width: 100%;
  background-color: $blue-primary;
  color: $white-text;
  height: 40px;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  margin-block-end: $space-xs;
  cursor: pointer;
  &:disabled {
    background-color: $gray-color-1;
    cursor: not-allowed;
  }
  &:not(:disabled):hover {
    border-color: #09f;
    background-color: #09f;
  }
}

.form-footer{
  display: flex;
  justify-content: space-between;

  a {
    color: $blue-primary;
    &:hover {
      color: $blue-dark;
    }
  }
}


</style>