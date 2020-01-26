<template>
  <div>
    <h1>The User Page</h1>
    <hr />
    <button class="btn btn-primary" @click.prevent="navHome">Home</button>
  </div>
</template>

<script>
  export default {
    methods: {
      navHome() {
        this.$router.push({ path: '/' });
      }
    }
  };
</script>

<style scoped></style>
