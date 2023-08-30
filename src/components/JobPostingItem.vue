<template>
  <div class="card container p-0 mb-3">
    <div class="card-body row p-4 ">
      <div class="col">
        <h4 class="card-title">{{ jobPosting.title }}</h4>
        <p style="white-space: pre-wrap;" class="card-text">{{ jobPosting.content }}</p>
      </div>
      <div class="col">
        <h6 v-if="hasApplied">Applied!</h6>
        <div v-else class="d-flex align-items-end flex-column">
          <textarea class="block w-100" v-model="message"></textarea>
          <button class="btn btn-primary margin-left-auto mt-2" @click="apply">Apply</button>             
        </div> 
        <button v-if="hasApplied" class="btn btn-danger margin-left-auto mt-2" @click="cancelApplication">Cancel application</button>   
      </div>
    </div> 
  </div>
</template>

<script>

import { computed, defineComponent, ref } from 'vue';
import { state } from '../state/state';

export default defineComponent({
  name: 'JobPostingItem',
  props: {
    jobPosting: {
      type: Object,
      required: true,
    }
  },
  emits: ["applied"],
  components: {  },
  setup(props, ctx) {
    const message =ref('');

    const apply = async ()=> {
      await fetch(`${import.meta.env.VITE_API_URL}/api/users/${state.user.id}/applications`, {
        headers: { 
          'Content-Type': 'application/json', 
          Accept: 'application/json',
          Authorization: `Bearer ${state.token}`,        
        },
          
        method: 'POST',
        body: JSON.stringify({
          message: message.value,
          job_posting_id: props.jobPosting.id,
        }),
      })
      ctx.emit('applied');
    }

    const cancelApplication = async ()=> {
      await fetch(`${import.meta.env.VITE_API_URL}/api/users/${state.user.id}/applications/${state.applications[applicationIndex.value].id}`, {
        headers: { 
          'Content-Type': 'application/json', 
          Accept: 'application/json',
          Authorization: `Bearer ${state.token}`,   
        },
          
        method: 'DELETE',
        body: JSON.stringify({
          message: message.value,
          job_posting_id: props.jobPosting.id,
        }),
      })
      ctx.emit('applied');
    }

    const applicationIndex = computed(()=> {
      return state.applications.findIndex((application)=>{
        return application.job_posting_id === props.jobPosting.id;
      });
    })

    const hasApplied = computed(()=> {
      return applicationIndex.value != -1;
    })

    return {message, apply, hasApplied, cancelApplication}
  },
})
</script>

<style scoped>

</style>