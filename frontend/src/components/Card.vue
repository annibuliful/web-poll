<template>
<div class="card" style="width: 20rem;">
  <div class="card-body">
    <h4 class="card-title">{{title}}</h4>
    <p class="card-text">{{detail}}</p>
    <div class="like-button">
      <div class="flex">
        <div class="fifty">
          <p>{{likeNumber}}</p>
          <img src="../assets/thumbs-up.svg" @click="like">
        </div>
        <div class="fifty">
          <p>{{unlikeNumber}}</p>
          <img class="rotate" src="../assets/thumbs-up.svg" @click="unlike">
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import {
  pollsService
} from '@/plugins/feathers'
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    detail: {
      type: String,
      required: true
    },
    pollId: {
      type: String,
      required: true
    },
    likeNumber: {
      type: Number,
      required: true
    },
    unlikeNumber: {
      type: Number,
      required: true
    }
  },
  methods: {
    like: function() {
      pollsService.patch(this.pollId, {
        $inc: {
          like: 1
        }
      }).then(()=>{
        this.likeNumber += 1;
      })
    },
    unlike: function() {
      pollsService.patch(this.pollId, {
        $inc: {
          unlike: 1
        }
      }).then(()=>{
        this.unlikeNumber += 1;
      })
    }
  }
}
</script>
<style scoped>
div.fifty{
  width: 50%;
}
div.flex {
  display: flex;
}

img {
  width: 30px;
  display: inline-block;
  margin-left: 25%;
  cursor: pointer;
}

img.rotate {
  transform: rotate(180deg);
}
</style>
