<template>
  <nav>
    <h5 href="#">JobFinder</h5>
    <div>
        <RouterLink :to="{name: 'home-page'}">Home</RouterLink>
        <!-- <RouterLink :to="{name: 'applicants-page'}">Applicants</RouterLink>
        <RouterLink :to="{name: 'applications-page'}">Applications</RouterLink> -->
        <RouterLink :to="{name: 'login-page'}">Logout</RouterLink>
    </div>
  </nav>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseLayout',
  components: {  },
  setup() {},
})
</script>