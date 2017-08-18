<template>
  <div id="nav-list">
  	<ul class="nav-list">
  		<li 
      v-for='(val,ind) in menuList' 
      :class='{active:ind==Index}' 
      :key="ind"
      @click="tapTab(ind,val.cat_id)">{{val.cat_name}}</li>
  	</ul>
  </div>
</template>

<script>
export default {
  name: 'nav',
  props: ["menuList"],
  data() {
    return {
      Index:0
    }
  },
  methods:{
    tapTab ( index,catId ) {
      this.Index=index
      this.$emit( "tapTab", catId )
    }
  }
}
</script>

<style lang='less' scoped>
#nav-list{
  position: sticky;
  position: -webkit-sticky;
  top: 0;
}
.nav-list{
	width: 100%;
	height: 0.4rem;
	display: flex;
  background:#fff;
  
	li{
		flex:1;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 0.13rem;
    color:#999;
		&.active{
			color: #e95e80;
			border-bottom: 1px solid #e95e80
		}
	}
}
</style>
