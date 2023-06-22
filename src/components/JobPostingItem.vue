<template>
  <div>
    <h4>{{ jobPosting.title }}</h4>
    <p>{{ jobPosting.content }}</p>
    <h6 v-if="hasApplied">Applied!</h6>
    <div v-else>
      <textarea v-model="message"></textarea>
      <button @click="apply">Apply</button>
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
  components: {  },
  setup(props) {
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
    }

    const hasApplied = computed(()=> {
      return state.applications.findIndex((application)=>{
        return application.job_posting_id === props.jobPosting.id;
      }) !== -1;
    })

    return {message, apply, hasApplied}
  },
})
</script>