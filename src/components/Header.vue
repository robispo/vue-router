<template>
  <nav>
    <ul class="nav nav-tabs">
      <router-link to="/" tag="li" active-class="active" exact>
        <a>Home</a>
      </router-link>
      <router-link to="/user/10" tag="li" active-class="active">
        <a>User 1</a>
      </router-link>
      <router-link to="/user/9" tag="li" active-class="active">
        <a>User 2</a>
      </router-link>
    </ul>
  </nav>
</template>

<script>
  export default {};
</script>

<style scoped></style>
