<template>
  <div class="container mt-3">
    <div class="row mb-3">
      <div class="col">
        <h2>Your vacancies</h2>
      </div>
      <div class="col-auto">
        <button class="btn btn-primary" @click="router.push({name:'company-create-posting-page'})">+ Create job posting</button>
      </div>
    </div>
    <CompanyPostingList :job-postings="jobPostings"/>
  </div>
</template>

<script>
import {defineComponent, onBeforeMount, ref } from 'vue';
import { state } from '../state/state';
import { CompanyPostingList } from '../components'
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'CompanyHomePage',
  components: { CompanyPostingList },
  setup() {
    const jobPostings = ref([]);
    const router = useRouter();

    onBeforeMount(async () => {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/users/${state.user.id}/applicants`, {
        headers: {
           'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${state.token}`,
          },
        method: 'GET',
      })
      jobPostings.value = await response.json();
    })

    return {jobPostings, router};
  }
})
</script>

<style scoped>

</style>