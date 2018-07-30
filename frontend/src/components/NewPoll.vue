<template>
<div>
  <div class="row">
    <div class="col sm-12 md-4">
      <div class="form-group">
        <label for="paperInputs2">Title</label>
        <input class="input-block" type="text" placheholder="Title" v-mode="detail">
      </div>
    </div>
    <div class="col sm-12 md-4">
      <div class="form-group">
        <label for="paperInputs3">Detail</label>
        <input class="input-block" type="text" placheholder="Detail" v-mode="title">
      </div>
    </div>
    <button class="btn-success">Create New!</button>
    <h4 v-if="created">Created!</h4>
  </div>
</div>
</template>
<script>
import {
  pollsService
} from '@/plugins/feathers';

export default {
  data: function() {
    return {
      title: '',
      detail: '',
      created: true
    }
  },
  methods: {
    addNewPoll: function(){
      pollsService.create()
    }
  }
}
</script>
<style scoped>
.row {
  margin-top: 5vh;
  /* width: 80vw; */
  margin-left: 15vw;
}
</style>
