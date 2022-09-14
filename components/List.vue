<template>
  <ul>
    <li v-for="item of info" :key="item.id">
      <a @click.prevent="openUser(item.id)">{{ item.username }}</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "List",
  props: {
    info: {
      required: true,
      type: Array,
    },
  },
  methods: {
    openUser(id) {
      this.$router.push("/users/" + id);
    },
  },
};
</script>

<style lang="scss" scoped>
ul {
  padding: 0;
  margin-top: 15px;
  list-style: none;
}
a {
  text-decoration: none;
  color: white;
}
</style>
