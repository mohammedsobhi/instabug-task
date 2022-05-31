<template>
  <div class="slider-item">
    <img :src="currentData.image" alt="mobile illustration" class="slider-img" width="500" height="400">
    <p class="slider-text">{{ currentData.text }}</p>
    <div class="slider-dots">
      <span
        v-for="(item, index) in 3"
        :key="item"
        class="slider-dot"
        :class="{ active: index === currentSlider }"
        @click="currentSlider=index"
      ></span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ImageSlider",
    data() {
      return {
        currentSlider: 0, 
        sliderData: [
          {
            image:require("@/assets/slider-1.svg"),
            text: "Accelerate Your Entire Mobile Team Workflow",
          },
          {
            image:require("@/assets/slider-2.svg"),
            text: "The Most Comprehensive Bug Reporting Tool for Mobile Apps",
          },
          {
            image:require("@/assets/slider-3.svg"),
            text: "Secure Crash Reporting With Real-Time Alerts",
          },
        ],
      }
    },
    computed: {
      currentData() {
        return this.sliderData[this.currentSlider];
      },
    },
    mounted () {
      setInterval(() => {
        this.currentSlider = (this.currentSlider + 1) % 3;
      }, 3000);
    },
  }
</script>

<style lang="scss" scoped>

.slider-item {
  text-align: center;

  .slider-img {
    margin: 0 auto;
  }

  .slider-text {
    color: $white-text;
    font-size: $text-large;
    margin: $space-x-s 0;
  }

  .slider-dot {
    display: inline-block;
    width: $space-s;
    height: $space-s;
    border: 1px solid $white-text;
    border-radius: 50%;
    margin: 0 $space-xxs;
    cursor: pointer;
    &.active {
      background-color: $white-text;
    }
  }
}

</style>