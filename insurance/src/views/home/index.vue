<template>
  <div id="home-page">
    <Bannerbar></Bannerbar>
    <navList :menuList='menuList'  @tapTab="tabClick"></navList>
    <productList :productList='productList'></productList>
    <footerNav></footerNav>
  </div>
</template>

<script>
import  footerNav from  '@/components/Footer'
import  Bannerbar from  '@/components/Banner'
import  navList from  './components/nav.vue'
import  productList from  './components/productList.vue'
import $ from 'zepto'
export default {
  name: 'home',
  data() {
    return {
      menuList:[],
      productList:[],
      loadFalg:true,
      loadPage:0,
      carId:0,
      loadmoreFlag:true
    }
  },
  components:{
    footerNav,
    Bannerbar,
    navList,
    productList
  },
  created() {
    this.GetTypeList();
    this.getProductList({})
  },
  activated () {
    this.scrollLoad();
  },
  deactivated () {
    $( window ).off( "scroll")
  },
  methods:{
    GetTypeList() {//得到导航条数据
      this.$store.dispatch('products/GetTypeList').then(res=>{
        this.menuList=res.cart_list
      })
    },
    getProductList ( { page=0, carId=0, page_size=5 } ) {
      this.loadmoreFlag=false
      let that = this;
      this.$store.dispatch('products/GetProductList',{
        page,
        page_size,
        carId
      }).then( function( response ){
        console.log(response)
        if( response.list.length < 0 ){
          that.loadFalg = false;
        }
        that.productList = that.productList.concat( response.list )
        that.loadmoreFlag=true
      })
    },
    scrollLoad () {
      let that = this;
      let bodyHeight = 0;//整个文档的高度
      let winHeight = $(window).height()
      $( window ).on( "scroll", function () {
        if(!that.loadmoreFlag) return false;
        if( that.loadFalg ){
          let scrollTop = $(this).scrollTop(),//滚动条的高度
              bodyHeight = $("body").height();//整个文档的高度
          console.log(scrollTop,winHeight,bodyHeight)
          if( scrollTop+winHeight >= bodyHeight ){
            console.log('到底部了')
            that.getProductList({
              page: ++that.loadPage,
              carId:that.carId
            });
          }
        }

      })
    },
    tabClick ( catId ) {
      this.loadPage =  0;     //初始化
      this.carId = catId;
      this.productList = [];
      this.getProductList({
        page: this.loadPage,
        carId: this.carId
      });
    },
  }
}
</script>

<style lang='less' scoped>
</style>
