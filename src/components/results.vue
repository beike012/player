<template>
         <div class="result-wrapper">
          <div class="song" v-for="item in musicList" :key="item.id">
            <div class="name">
              <span class="iconfont icon-play" @click="toPlayer(item.id)"></span>
              <a href="" @click.prevent="toComment(item.id)">{{item.name}}</a>
              <span class="iconfont icon-editmedia" v-if="item.mvid!=0" @click="toMv(item.mvid)"></span>
            </div>
            <div class="singer">{{item.artists[0].name}}</div>
            <div class="album">《{{item.album.name}}》</div>
            <div class="time">{{item.duration|duration}}</div>
          </div>
         </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      musicList: []
    }
  },
  methods: {
    toComment(id) {
      this.$router.push(`/comment/${id}`);
    },
    toPlayer(id) {
      this.$router.push(`/player/${id}`);
    },
    toMv(id) {
      this.$router.push(`/video/${id}`);
    }
  },
  filters: {
    duration(time) {
      let sec = Math.floor(time / 1000);
      let min = Math.floor(sec / 60);
      sec = sec % 60;
      sec = sec < 10 ? "0" + sec : sec;
      return min + ":" + sec;
    }
  },
  created() {
    axios
      .get(
        `https://autumnfish.cn/search?keywords=${this.$route.params.keywords}`
      )
      .then(res => {
        this.musicList = res.data.result.songs;
      });
  }
};
</script>

<style>
@import url("../assets/css/results.css");
</style>