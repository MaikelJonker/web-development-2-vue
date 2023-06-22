<template>
  <form class="card form"
  @submit.prevent="$emit('submit', form)">  
    <label  class="input-field">
      Email
      <input v-model="form.email" type="email" name="email" required="true" class="input" />
    </label>
    <label  class="input-field">
      Password
      <input v-model="form.password" type="password" name="password" required="true" class="input" />
    </label>
    <button
      type="submit">
      Login
    </button>
  </form>
</template>

<script>
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  name: 'LoginForm',
  emits:['submit'],
  setup() {
    
    const form = reactive({
      email: null,
      password: null,
    });

    return { form };
  },
})
</script>

<style scoped>
.login-form {
  display: flex;
  flex-direction: column;
}
</style>
