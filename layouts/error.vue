<template>
  <section>
    <div class="error-alert">
      <h2>Error 404</h2>

      <nuxt-link class="error-alert_link" to="/">Home</nuxt-link>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
section {
  display: flex;
  justify-content: center;
}
.error-alert {
  margin: 20px;
  padding: 20px;
  width: 50%;
  border-radius: 15px;
  border: 1px solid white;
  text-decoration: none;
  &_link {
    text-decoration: none;
    color: white;
    &:hover {
      color: rgb(236, 232, 37);
    }
  }
}
</style>
