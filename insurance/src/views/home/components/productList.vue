<template>
  <div id="procuct">
  	<router-link class="weui-media-box" v-for='item in productList' :to="'/projectDetail/'+item.product_id">
  		<div class="weui-media-box__hd">
  			<img :src="item.cover" alt="">
  		</div>
  		<div class="weui-media-box__bd">
  			<h4>{{item.title}}</h4>
  			<p>{{item.features}}</p>
  			<div class="tool-bar">
  				<button>{{item.price.slice(0,-3)}}元起购买</button>
  				<span>{{item.sale_num}}人购买</span>
  			</div>
  		</div>
  	</router-link>
  </div>
</template>

<script>
export default {
  name: 'product',
  props:['productList']
}
</script>

<style lang='less' scoped>
#procuct{
	margin-top: 0.1rem;
	padding-bottom: 0.44rem;
}
.weui-media-box{
	width: 100%;
	padding: 0.15rem 3%;
	display: flex;
	border-bottom: 1px solid #eee;
	background:#fff;
	.weui-media-box__hd{
		flex:4;
		width: 100%;
		height: auto;
		img{
			width: 100%;
		    max-height: 100%;
		    vertical-align: top
		}
	}
	.weui-media-box__bd{
		flex:5;
		margin-left: 3%;
		h4{
			width: 90%;
			line-height: 0.25rem;
			font-size: 0.14rem;
		    overflow: hidden;
		    text-overflow: ellipsis;
		    white-space: nowrap;
		    word-wrap: break-word;
   			word-break: break-all
		}
		p{
			color: #999999;
		    font-size: 0.12rem;
		    line-height: 0.18rem;
		    display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 2;
			overflow: hidden;
		}
		.tool-bar{
			button{
				background: #ff4774;
			    border: 0;
			    height: 0.3rem;
			    width: 1rem;
			    border-radius: 0.3rem;
			    color: #fff;
			    box-shadow: 1px 1px 15px #ff6087
			}
			span{
					font-size: 0.12rem;
				    float: right;
				    line-height: 30px;
				    color: #989898
			}
		}
	}
}
</style>
