<template>
  <section v-if="user">
    <h2>User: {{ user.username }}</h2>
    <h3>{{ user.name }}</h3>
    <hr />
    <p>Phone: {{ user.phone }}</p>
    <p>E-mail: {{ user.email }}</p>
    <p>WebSite: {{ user.website }}</p>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      user: null,
    };
  },
  computed: {
    ...mapGetters({
      users: "modules/Users/GET_USERS",
    }),
  },
  validate({ params }) {
    return /^\d+$/.test(params.id);
  },
  mounted() {
    this.user = this.users.find((item) => item.id === +this.$route.params.id);
    console.log(this.user);
  },
};
</script>
