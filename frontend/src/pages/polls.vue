<template>
<div>
  <img src="../assets/elections.svg">
  <NewPollComponent/>
  <div class="row">
    <CardComponent title="sssss" detail="eas" pollId="ss" v-for="(value , index) in listPolls" :key="index"/>
  </div>
</div>
</template>
<script>
  import NewPollComponent from '@/components/NewPoll';
  import CardComponent from '@/components/Card';
  import {pollsService} from '@/plugins/feathers'

  export default{
    data: function(){
      return{
        listPolls: []
      }
    },
    created(){
      pollsService
        .find({})
        .then((data)=>{
          this.listPolls = data;
      })
    },
    components:{
      NewPollComponent,
      CardComponent
    }
  }
</script>
<style scoped>
div.row {
  width: 80vw;
  margin-left: 10vw;
}

.row {
  margin-top: 30px;
}

img {
  margin-top: 5vw;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 20%;
}
</style>
