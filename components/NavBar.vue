<template>
  <v-app-bar app>
    <ul class="nav-bar">
      <li class="nav-bar_item">
        <span class="nav-bar_item__logo">Nuxt SSR</span>
      </li>
      <li class="nav-bar_item">
        <nuxt-link exact active-class="active" class="nav-bar_item__link" to="/"
          >Home</nuxt-link
        >
      </li>

      <li class="nav-bar_item" v-for="(route, index) of routes" :key="index">
        <nuxt-link
          v-if="route.name !== 'index' && route.name !== 'users-id'"
          active-class="active"
          class="nav-bar_item__link"
          :to="route.path"
          >{{ route.name }}</nuxt-link
        >
      </li>
    </ul>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      routes: [],
    };
  },
  mounted() {
    this.routes = this.$router.options.routes;
  },
};
</script>

<style lang="scss" scoped>
.nav-bar {
  display: flex;
  color: white;
  list-style: none;
  &_item {
    display: flex;
    align-items: center;
    padding: 15px;
    &__logo {
      font-size: 20px;
      font-weight: 600;
    }
    &__link {
      color: white;
      text-decoration: none;
      text-transform: capitalize;
    }
    .active {
      color: rgb(236, 232, 37);
    }
  }
}
</style>
