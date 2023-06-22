<template>
  <div v-for="jobPosting in jobPostings">
    <JobPostingItem :job-posting="jobPosting"/>
  </div>
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
  components: { JobPostingItem },
  setup() {},
})
</script>