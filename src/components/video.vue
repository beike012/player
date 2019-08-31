<template>
  <div class="video">
          <div class="title-wrapper">
            <span class='tag'>MV</span>
            <span class='title'>{{mvName}}</span>
            <span class='artist'>{{mvArtist}}</span>
          </div>
          <video :src="mvUrl" controls></video>
        </div>
</template>

<script>
import axios from "axios";
export default {
data() {
      return {
        mvName: '',
        mvUrl: '',
        mvArtist: ''
      }
    },
    created() {
      axios
        .get(`https://autumnfish.cn/mv/detail?mvid=${this.$route.params.mvid}`)
        .then(backData => {
          // console.log(backData)
          this.mvName = backData.data.data.name
          this.mvUrl = backData.data.data.brs['240']
          this.mvArtist = backData.data.artistName
        })
    }
}
</script>

<style>
@import url("../assets/css/video.css");

</style>