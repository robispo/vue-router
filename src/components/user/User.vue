<template>
  <div>
    <h1>The User Page</h1>
    <hr />
    <p>Id: {{ id }}</p>
    <button class="btn btn-primary" @click.prevent="navHome">Home</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        id: this.$route.params.id
      };
    },
    methods: {
      navHome() {
        this.$router.push({ path: '/' });
      }
    }
  };
</script>

<style scoped></style>
