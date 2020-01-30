<template>
  <div>
    <h3>Some User Details</h3>
    <p>User loaded with ID: {{ $route.params.id }}</p>
    <br />
    <router-link
      tag="button"
      :to="{
        name: 'userEdit',
        parmas: { id: $route.params.id },
        query: { locale: 'en', q: 100 }
      }"
      class="btn btn-primary"
    >
      Edit
    </router-link>
  </div>
</template>
