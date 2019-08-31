<template>
  <div>
    <br>
    <br>
    <el-carousel>
      <el-carousel-item v-for="(item,index) in banners" :key="index">
        <img :src="item.imageUrl" alt="" width="100%" height="100%">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      banners: []
    }
  },
  created() {
    this.$axios.get('/banner').then(res => {
      // console.log(res);
      this.banners=res.data.banners
    })
  }
};
</script>

<style>
</style>