<template>
  <div id="player">
    <h2 class="title">黑云音乐</h2>
    <div class="search">
      <input type="text" @keyup.enter="queryMusic" v-model="keywords" />
      <button>
        <span class="iconfont icon-search" @click="queryMusic"></span>
      </button>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  data() {
    return {
      keywords: "北京欢迎你"
    };
  },
  methods: {
    queryMusic() {
      this.$router.push(`/results/${this.keywords}`);
    }
  }
};
</script>

<style>
</style>
