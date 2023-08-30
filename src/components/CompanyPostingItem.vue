<template>
  <div class="card container p-0 mb-3">
    <div class="card-body row p-4">
      <div class="col">
        <h4 class="card-title">{{ jobPosting.title }}</h4>
        <p style="white-space: pre-wrap;" class="card-text">{{ jobPosting.content }}</p>
      </div>
      <div class="d-flex align-items-end flex-column">      
        <p class="card-text">Applicants: {{ jobPosting.applications.length }}</p>       
      </div> 
      <button v-if="jobPosting.applications.length && !showApplicants" @click="showApplicants = true" class="btn btn-primary margin-left-auto mt-2">View applicants ▼</button>
      <button v-if="jobPosting.applications.length && showApplicants" @click="showApplicants = false" class="btn btn-primary margin-left-auto mt-2">Hide applicants ▲</button>
      <div v-if="showApplicants">
        <div v-for="application in jobPosting.applications" :key="application.id" class="col mt-3">
          <h4 class="card-title">{{ application.user.name }}</h4>
          <p style="white-space: pre-wrap;" class="card-text">{{ application.message }}</p>
        </div>
      </div>
    </div> 
  </div>
</template>

<script>

import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'CompanyPostingItem',
  props: {
    jobPosting: {
      type: Object,
      required: true,
    }
  },
  setup(){
    const showApplicants = ref(false)
    return { showApplicants }
  }
})
</script>

<style scoped>

</style>