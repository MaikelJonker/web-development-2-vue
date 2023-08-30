<template>
  <template v-for="jobPosting in jobPostings" :key="jobPosting.id">
    <CompanyPostingItem :job-posting="jobPosting"/>
  </template>
</template>

<script>
import { defineComponent } from 'vue';
import { CompanyPostingItem } from '.';

export default defineComponent({
  name: 'CompanyPostingList',
  components: { CompanyPostingItem },
  props: {
    jobPostings: {
      type: Array,
      required: true,
    }
  },
  emits: ["applied"],
  setup() {},
})
</script>