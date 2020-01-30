<template>
  <div>
    <h1>The User Page</h1>
    <hr />
    <p>Id: {{ id }}</p>
    <button class="btn btn-primary" @click.prevent="navHome">Home</button>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    props: {
      id: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        //id: this.$route.params.id
      };
    },
    watch: {
      // $route(to, from) {
      //   this.id = to.params.id;
      // }
    },
    methods: {
      navHome() {
        this.$router.push({ path: '/' });
      }
    }
  };
</script>

<style scoped></style>
