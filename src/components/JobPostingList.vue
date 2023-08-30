<template>
  <template v-for="jobPosting in jobPostings" :key="jobPosting.id">  
    <JobPostingItem @applied="$emit('applied')" :job-posting="jobPosting"/>
  </template>
</template>

<script>
import { defineComponent } from 'vue';
import { JobPostingItem } from '../components'

export default defineComponent({
  name: 'JobPostingList',
  props: {
    jobPostings: {
      type: Array,
      required: true,
    }
  },
  emits: ["applied"],
  components: { JobPostingItem },
  setup() {},
})
</script>