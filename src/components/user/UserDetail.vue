<template>
  <div>
    <h3>Some User Details</h3>
    <p>User loaded with ID: {{ $route.params.id }}</p>
    <br />
    <router-link tag="button" :to="link" class="btn btn-primary">
      Edit
    </router-link>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        link: {
          name: 'userEdit',
          parmas: { id: this.$route.params.id },
          query: { locale: 'en', q: 100 },
          hash: '#data'
        }
      };
    }
  };
</script>
