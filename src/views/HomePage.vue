<template>
  <div class="container mt-3">
    <h2 class="mb-4">Jobs</h2> 
    <JobPostingList v-if="isStateFetched" @applied="fetchApplications" :job-postings="jobPostings"/> 
  </div>
</template>

<script>
import { computed, defineComponent, onBeforeMount, ref } from 'vue';
import { state } from '../state/state';
import { JobPostingList } from '../components'

export default defineComponent({
  name: 'HomePage',
  components: { JobPostingList },
  setup() {
    const jobPostings = ref([]);

    onBeforeMount(async () => {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/users/${state.user.id}/job-postings`, {
        headers: {
           'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${state.token}`,
          },
        method: 'GET',
      })
      jobPostings.value = await response.json();
    })
    onBeforeMount(async () => {
      fetchApplications();
    })

    async function fetchApplications(){
            
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/users/${state.user.id}/applications`, {
        headers: { 
          'Content-Type': 'application/json', 
          Accept: 'application/json',
          Authorization: `Bearer ${state.token}`,
        },
        method: 'GET',
      })
      state.applications = await response.json();   
    }
    const isStateFetched = computed(()=> !!state.applications);

    return {jobPostings, isStateFetched, fetchApplications};
  },
})
</script>

<style scoped>

</style>