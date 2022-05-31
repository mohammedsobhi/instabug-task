<template>
  <footer class="companies-footer">
    <p class="footer-text">Trusted by the top companies.</p>
    <ul class="companies">
      <li v-for="(img,index) in companies" :key="index" class="company" width="80px">
        <img :src="img" alt="company logo" :class="`company-${index}`">
      </li>
    </ul>
  </footer>
</template>

<script>
  export default {
    name: "CompaniesFooter",
    data() {
      return {
        companies: [
          require("@/assets/lyft-full-logo.svg"),
          require("@/assets/buzzfeed-full-logo.svg"),
          require("@/assets/asana-full-logo.svg"),
          require("@/assets/one-plus-logo.svg"),
          require("@/assets/house-party-logo.svg"),
        ],
      }
    },
  }
</script>

<style lang="scss" scoped>

.footer-text {
  text-align: center;
  margin: $space-s 0;
  color: #a1a7b2;
}

.companies {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;

  .company {
    max-width: 80px;
    img {
      margin: 0;
    }
    .company-0 {
      max-width: 30px;
    }
  }
}

</style>