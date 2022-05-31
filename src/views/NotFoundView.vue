<template>
  <main class="not-found">
    <img src="../assets/not-found.jpg" alt="not found illustration" width="400" height="300">
    <h1>404 - Page Not Found!</h1>
    <h2>Sorry, that page doesn't exist. What would you like to do?</h2>
  </main>
</template>

<script>
export default {
  name: "NotFoundView",
}
</script>

<style lang="scss" scoped>

.not-found {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 $space-s $space-xs $space-s;

  img{
    width: 600px;
    height: auto;
  }

  h1 {
    color: $blue-background;
    margin: $space-x-s 0;
    text-align: center;
  }

  h2 {
    font-size: $text-medium;
    font-weight: 400;
    color: $blue-text;
    text-align: center;
  }
}

</style>

