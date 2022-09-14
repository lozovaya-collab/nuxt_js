<template>
  <v-app dark>
    <NavBar></NavBar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "../components/NavBar.vue";

export default {
  name: "DefaultLayout",
  components: {
    NavBar,
  },
  data() {
    return {};
  },
};
</script>
