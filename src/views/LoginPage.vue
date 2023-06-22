<template>
  <main class="center-content">
    <LoginForm @submit="login($event)"/>
  </main>
</template>

<script>
import { defineComponent } from 'vue';
import { LoginForm } from '../components';
import { useRouter } from 'vue-router';
import { state } from '../state/state';

export default defineComponent({
  name: 'LoginPage',
  components: { LoginForm },
  setup() {
    const router = useRouter();
    const login = async (data) => {

      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/login`, {
        headers: { 'Content-Type': 'application/json', Accept: 'application/json'},
        method: 'POST',
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      });
      if(response.ok){
        const data = await response.json();
        state.user = data.user;
        state.token = data.authorisation.token;
        router.push({name: 'home-page'})
      }
    };
    return {login};
  },
})
</script>

<style scoped>
main {
  height: 100%;
}
</style>
