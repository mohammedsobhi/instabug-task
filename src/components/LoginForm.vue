<template>
  <div class="form-container">
    <form class="form">
      <div class="error-message">
        <p>Your email and/or password are incorrect</p>
      </div>
      <div class="form-control">
        <label for="email">Work Email</label>
        <input type="email" name="email" id="email" placeholder="you@company.com">
        <span class="email-error">enter valid email</span>
      </div>
      <div class="form-control">
        <label for="password">Password</label>
        <a href="#" class="forgot-password">Forgot password?</a>
        <input type="password" name="password" id="password" placeholder="8+ Characters">
        <span class="password-error">enter valid password</span>
      </div>
      <button class="login-btn" type="submit" disabled>Login</button>
    </form>
    <div class="form-footer">
      <span>Don't have an account? <a href="#">Sign up</a></span>
      <a href="#">Login via SSO</a>
    </div>
  </div>
</template>

<script>
  export default {
    
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
    display: none;
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