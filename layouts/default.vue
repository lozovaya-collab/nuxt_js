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

<script lang="ts">
import NavBar from "../components/NavBar.vue";

import { defineComponent } from "vue";

export default defineComponent({
  name: "DefaultLayout",
  components: {
    NavBar,
  },
  data() {
    return {};
  },
});
</script>
