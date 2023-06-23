<template>
  <NavBar />
  <main class="p-5">
    <RouterView />
  </main>
</template>

<script>
import { defineComponent } from 'vue';
import { NavBar } from '../components';

export default defineComponent({
  name: 'BaseLayout',
  components: { NavBar },
  setup() {},
})
</script>

<style scoped>
main {
  height: 100%;
}
</style>