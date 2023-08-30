<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <h2 class="mb-4">Create new job posting</h2>
        <div class="card">
          <div class="card-body">
            <form @submit.prevent="$emit('submit', form)">
              <div class="mb-3">
                <label for="title" class="form-label"><strong>Title</strong></label>
                <input v-model="form.title" type="text" id="title" name="title" class="form-control" required>
              </div>
              <div class="mb-3">
                <label for="content" class="form-label"><strong>Description</strong></label>
                <textarea v-model="form.content" id="content" name="content" class="form-control" rows="10" required></textarea>
              </div>
              <button class="btn btn-primary" type="submit" @click="createPosting">Create Posting</button>
            </form>
          </div>
        </div>
        <button class="btn btn-secondary mt-3" @click="router.push({name: 'company-home-page'})">Back</button>
      </div>
    </div>
  </div>
</template>

<!-- <template>
  <form class="card form"
  @submit.prevent="$emit('submit', form)">  
    <label  class="input-field">
      Title
      <input v-model="form.title" type="text" name="title" required="true" class="input" />
    </label>
    <label  class="input-field">
      Desciption
      <textarea v-model="form.content" name="content" required="true" class="input"></textarea>
    </label>
    <button class="btn btn-primary" type="submit" @click="createPosting">
      Create Posting
    </button>
  </form>
</template> -->

<script>
import { defineComponent, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { state } from '../state/state';

export default defineComponent({
  name: 'CompanyCreatePosting',
  components: { },
  setup() {
    const router = useRouter();

    const createPosting = async () => {
      await fetch(`${import.meta.env.VITE_API_URL}/api/users/${state.user.id}/job-postings`, {
        headers: {
           'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${state.token}`,
          },
        method: 'POST',
        body: JSON.stringify(form)
      })
      router.push({name:"company-home-page"})
    }

    const form = reactive({
      title: null,
      content: null,
    });

    return { form, createPosting, router };
  }
})
</script>

<style scoped>

</style>