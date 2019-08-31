<template>
      <div class="player">
        <div class="left">
          <img class='disc' src="../assets/img/disc.png" alt="">
          <img class='cover' src="../assets/img/cover.png" alt="">
        </div>
        <div class="right">
          <div class="title"><img :src="coverUrl" alt=""><span>{{songName}}</span> </div>
          <div class="singer">歌手: <span>{{singerName}}</span></div>
          <div class="album">所属专辑: <span>{{albumName}}</span></div>
          <audio class='audio' controls :src="musicUrl"></audio>
          <ul class='lyric-container'>
            <li class='lyric' v-for="(item,index) in lyric" :key="index">{{item}}</li>
          </ul>
        </div>
      </div>
</template>

<script>
import axios from "axios";
export default {
data() {
        return {
          // 歌曲地址
          musicUrl: '',
          // 歌手名
          singerName: '',
          // 封面
          coverUrl: '',
          // 专辑名
          albumName: '',
          // 歌名
          songName: '',
          // 歌词
          lyric: []
        }
      },
      created() {
        axios
          .get(`https://autumnfish.cn/song/url?id=${this.$route.params.id}`)
          .then(backData => {
            // console.log(backData)
            // 设置歌曲地址
            this.musicUrl = backData.data.data[0].url
          })
        // 调用接口 获取 歌曲信息
        axios
          .get(`https://autumnfish.cn/song/detail?ids=${this.$route.params.id}`)
          .then(backData => {
            // console.log(backData)
            // 封面地址
            this.coverUrl = backData.data.songs[0].al.picUrl
            // 专辑名
            this.albumName = backData.data.songs[0].al.name
            // 歌手名
            this.singerName = backData.data.songs[0].ar[0].name
            // 歌名
            this.songName = backData.data.songs[0].name
          })

        // 歌词
        axios
          .get(`https://autumnfish.cn/lyric?id=${this.$route.params.id}`)
          .then(backData => {
            // console.log(backData)
            // 保存歌词为数组
            this.lyric = backData.data.lrc.lyric.split('\n')
            // 循环数组 切掉 [00:00.000]
            for (let i = 0; i < this.lyric.length; i++) {
              this.lyric[i] = this.lyric[i].slice(10)
            }
          })
      },
}
</script>

<style>
@import url("../assets/css/player.css");
</style>