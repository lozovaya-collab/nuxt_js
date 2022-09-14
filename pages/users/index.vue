<template>
  <section>
    <h2>Users page</h2>
    <List :info="users"></List>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import List from "../../components/List";

export default {
  name: "users",
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      users: "modules/Users/GET_USERS",
    }),
  },
  methods: {
    ...mapActions(["modules/Users/getListUser"]),
  },
  components: { List },
  asyncData({ store }) {
    store.dispatch("modules/Users/getListUser");
  },
  mounted() {},
};
</script>
<style lang="scss" scoped></style>
