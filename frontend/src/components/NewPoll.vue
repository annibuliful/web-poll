<template>
<div>
  <div class="row">
    <div class="col sm-12 md-4">
      <div class="form-group">
        <label for="paperInputs2">Title</label>
        <input class="input-block" type="text" placheholder="Title" v-model="title">
      </div>
    </div>
    <div class="col sm-12 md-4">
      <div class="form-group">
        <label for="paperInputs3">Detail</label>
        <input class="input-block" type="text" placheholder="Detail" v-model="detail">
      </div>
    </div>
    <button class="btn-success" @click="addNewPoll">Create New!</button>
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
      created: false
    }
  },
  methods: {
    addNewPoll: function(){
      pollsService.create({
        title: this.title,
        detail: this.detail
      }).then((data)=>{
        console.log(data)
        this.title = ''
        this.detail = ''
        this.created = true
      }).catch((err)=>{
        console.log(err)
      })
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
