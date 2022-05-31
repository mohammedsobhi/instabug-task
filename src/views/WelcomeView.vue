<template>
  <main class="welcome-container">
    <h1>Welcome</h1>
    <h2>User's Email: <br> <strong>{{ email }}</strong></h2>
    <button @click="handleLogout" class="logout">Log out</button>
    <small>I love instabug  ❤</small>
  </main>
</template>

<script>
export default {
  name: "WelcomeView",
  data() {
    return {
      email: window.localStorage.getItem("email"),
    }
  },
  methods: {
    handleLogout() {
      window.localStorage.removeItem("email");
      this.$router.push("/login");
    }
  },
}
</script>

<style lang="scss" scoped>

  .welcome-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px 20px 50px 20px;
    min-height: 100vh;

    h2 {
      font-weight: 400;
      margin: 20px;
      text-align: center;
    }

    button {
      border: 0;
      border-radius: 5px;
      background-color: $blue-background;
      padding: 8px 50px;
      color: $white-text;
      font-weight: 600;
      font-size: 16px;
      cursor: pointer;

      &:hover {
        opacity: 0.9;
      }
    }

    small {
      margin: 10px;
    }
  }
</style>