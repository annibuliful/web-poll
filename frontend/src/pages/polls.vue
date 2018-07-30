<template>
<div>
  <img src="../assets/elections.svg">
  <NewPollComponent/>
  <div class="row">
    <div class="col-4">ssss</div>
    <div class="col-4">ssss</div>
  </div>
</div>
</template>
<script>
  import NewPollComponent from '@/components/NewPoll';

  export default{
    components:{
      NewPollComponent
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
