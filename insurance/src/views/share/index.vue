<template>
  <div id="share-page">
  	<Bannerbar></Bannerbar>
  	<videoList></videoList>
  	<footerNav></footerNav>
  </div>
</template>

<script>
import  footerNav from  '@/components/Footer'
import  Bannerbar from  '@/components/Banner'
import videoList from './components/videoList'
export default {
  name: 'share',
  components:{
  	footerNav,
  	Bannerbar,
  	videoList
  }
}
</script>

<style lang='less' scoped>
</style>
