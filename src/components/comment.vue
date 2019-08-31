<template>
         <div class="comment-wrapper">
          <div class="items">
            <div class="item" v-for="(item,index) in commentList" :key="index">
              <div class="left">
                <img :src="item.user.avatarUrl" alt="">
              </div>
              <div class="right">
                <div class="top">
                  <span class='user'>{{item.user.nickname}}:</span>
                  <span class='content'>{{item.content}}</span>
                </div>
                <div class="bottom">
                  <div class="time">{{item.time|time}}</div>
                  <div class="like-wrapper">
                      <span>👍</span>({{item.likedCount}})
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
</template>

<script>
import axios from "axios";
export default {
data() {
        return {
          commentList: []
        }
      },
      filters: {
        time(e) {
          let t = new Date(e);
          return t.getFullYear() + '年' + (t.getMonth() + 1) + '月' + t.getDate() + '日'
        }
      },
      created() {
        // console.log(this.$route.params.id);
        axios.get(`https://autumnfish.cn/comment/hot?id=${this.$route.params.id}&type=0`)
          .then(res => {
            this.commentList = res.data.hotComments
          })
      },
}
</script>

<style>
@import url("../assets/css/comment.css");
</style>