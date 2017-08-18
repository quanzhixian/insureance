<template>
  <div id="banner-">     
	    <swiper :options="swiperOption" class='banner-content'>
            <swiper-slide v-for='item in bannerData'>
                <img :src="item">
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>

  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import '@/static/css/swiper.css'
export default {
  name: 'banner',
  data () {
  	return {
  		"swiperOption":{
	         autoplay:3000,
	         loop:true
	     },
	     "bannerData":[
	     	"//pubsto.datebao.com/ladderUploads/banner/fuqinjieapp.jpg",
	     	"//pubsto.datebao.com/ladderUploads/banner/eshun20170526152715.jpg",
	     	"//pubsto.datebao.com/ladderUploads/banner/guoshouebao.jpg",
	     	"//pubsto.datebao.com/ladderUploads/banner/shaoerbaiwanWAP.png"
	     ]
  	}
  },
  components:{
     swiper,
     swiperSlide
  }
}
</script>

<style lang='less' scoped>
.banner-content{
	width: 100%;
	height: auto;
	img{
		width: 100%;
		display: block;
	}
}
</style>
