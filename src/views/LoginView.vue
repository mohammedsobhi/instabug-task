<template>
  <div class="login-container">
    <section class="img-slider">
      <image-slider/>
    </section>
    <section class="form-container">
      <header>
        <div class="logo">
          <!-- <img src="" alt=""> -->
        </div>
        <h1 class="title">Log in to Instabug</h1>
      </header>
      <!-- social links (ul>li>a) -->
      <!-- or divider -->
      <!-- login form -->
      <!-- login-footer -->
    </section>
  </div>
</template>

<script>
import ImageSlider from '@/components/ImageSlider.vue';

export default {
  name: "LoginView",
  components: {
    ImageSlider,
  },
}
</script>

<style lang="scss" scoped>
  .login-container {
    height: 100vh;
    display: flex;
  }

  .form-container,
  .img-slider {
    flex: 1;
    display: flex;
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
</style>