<template>
  <div>
    <h3>Some User Details</h3>
    <p>User loaded with ID: {{ $route.params.id }}</p>
    <br />
    <router-link
      tag="button"
      :to="`/user/${$route.params.id}/edit`"
      class="btn btn-primary"
    >
      Edit
    </router-link>
  </div>
</template>
