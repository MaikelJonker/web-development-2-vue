<template>
  <JobPostingList v-if="isStateFetched" :job-postings="jobPostings"/>
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
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/users/${state.user.id}/applications`, {
        headers: { 
          'Content-Type': 'application/json', 
          Accept: 'application/json',
          Authorization: `Bearer ${state.token}`,
        },
        method: 'GET',
      })
      state.applications = await response.json();
    })

    const isStateFetched = computed(()=> !!state.applications);

    return {jobPostings, isStateFetched};
  },
})
</script>

<style scoped>

</style>