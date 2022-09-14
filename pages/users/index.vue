<template>
  <List :info="users"></List>
</template>

<script>
import { mapGetters } from "vuex";
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
  components: { List },
  mounted() {
    console.log(this.$store);
  },
};
</script>
<style lang="scss" scoped></style>
