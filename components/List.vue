<template>
  <ul>
    <li v-for="item of info" :key="item.id">
      <a @click.prevent="openUser(item.id)">{{ item.name }}</a>
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

<style lang="scss" scoped></style>
