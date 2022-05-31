<template>
  <div class="login-container">
    <section class="img-slider">
      <image-slider/>
    </section>
    <section class="form-section">
      <div class="form-container">
        <header>
          <img class="logo" src="@/assets/Instabug-logo.svg" alt="instabug logo" width="56" height="56">
          <h1 class="title">Log in to Instabug</h1>
        </header>
        <social-links/>
        <or-divider/>
        <login-form/>
      </div>
      <companies-footer/>
    </section>
  </div>
</template>

<script>
import ImageSlider from '@/components/ImageSlider.vue';
import SocialLinks from '@/components/SocialLinks.vue';
import OrDivider from '@/components/OrDivider.vue';
import LoginForm from '@/components/LoginForm.vue';
import CompaniesFooter from '@/components/CompaniesFooter.vue';

export default {
  name: "LoginView",
  components: {
    ImageSlider,
    SocialLinks,
    OrDivider,
    LoginForm,
    CompaniesFooter
},
}
</script>

<style lang="scss" scoped>
  .login-container {
    min-height: 100vh;
    display: flex;
  }

  .form-section,
  .img-slider {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: $space-xx-s;
  }

  .img-slider {
    background-color: $blue-background;

    /* hide image slider on small screens */
    @media (max-width: 760px) {
      display: none;
    }
  }

  .form-container {
    width: 400px;
    @media (max-width: 440px) {
      width: 300px;
    }

    .logo {
      margin: 0 auto;
    }

    .title {
      text-align: center;
      font-weight: 400;
      font-size: $text-largest;
      color: $blue-text;
    }
  }

</style>