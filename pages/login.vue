<template>
  <section class="login-page">
    <h2 class="login-page_title">Login Page</h2>
    <v-form class="login-page_form">
      <v-text-field
        class="login-page_form__input"
        label="Your Login"
        hide-details="auto"
      ></v-text-field>
      <v-btn class="login-page_form__btn" depressed color="primary"> Login </v-btn>
    </v-form>
    <nuxt-link class="login-page_link" to="/">back to home</nuxt-link>
  </section>
</template>

<script>
export default {
  layout: "empty",
};
</script>

<style lang="scss" scoped>
.login-page {
  margin: 0 auto;
  width: 60%;
  &_title {
    margin-bottom: 15px;
  }
  &_form {
    margin-bottom: 15px;
    &__input {
      margin-bottom: 15px;
    }
  }
  &_link {
    text-decoration: none;
    color: white;
    &:hover {
      color: rgb(236, 232, 37);
    }
  }
}
</style>
