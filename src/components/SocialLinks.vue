<template>
  <ul class="links-container">
    <li>
      <a href="#" class="login-link google">
        <img src="@/assets/google-logo.svg" alt="google logo">
        <span>
          Google
        </span>
      </a>
    </li>
    <li>
      <a href="#" class="login-link github">
        <img src="@/assets/github-logo.svg" alt="github logo">
        <span>
          Github
        </span>
      </a>
    </li>
    <li>
      <a href="#" class="login-link microsoft">
        <img src="@/assets/microsoft-logo.svg" alt="microsoft logo">
        <span>
          Microsoft
        </span>
      </a>
    </li>
  </ul>
</template>

<style lang="scss" scoped>

.links-container {
  width: 100%;
  margin: $space-s 0;

  .login-link {
    background-color: $blue-background;
    color: $white-text;
    border-radius: 5px;
    margin: $space-xs 0;
    display: flex;
    align-items: center;
    height: 40px;

    img {
      width: 22px;
      margin-left: $space-s;
    }

    span {
      margin: 0 auto;
      font-size: $text-normal;
      font-weight: 600;
    }
  }

  .google {
    background-color: #4285F4;
    img{
      width: 32px;
      margin-left: $space-xxs;
    }
  }

  .github {
    background-color: #333333;
  }

  .microsoft {
    background-color: #ffffff;
    border: 1px solid #5e5e5e;
    span {
      color: #5e5e5e;
    }
  }
}
</style>