<template>
<div class="card" style="width: 20rem;">
  <div class="card-body">
    <h4 class="card-title">{{title}}</h4>
    <p class="card-text">{{detail}}</p>
  </div>
</div>
</template>
<script>
  export default{
    props:{
      title:{
        type: String,
        required: true
      },
      detail:{
        type: String,
        required: true
      },
      pollId:{
        type: String,
        required: true
      }
    }
  }
</script>
