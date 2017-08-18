<template>
  <div class="plan-list">
    <nav class="tab-nav">
      <a 
        v-for="(item,index) in planList" 
        href="javascript:;"  
        :key='index'
        @click="tabProductDetail(index,item.product_id)" 
        :class="{active:index==Index}">{{item.plan_title}}</a>
    </nav>
    <div class="weui-cells">
      <a 
        class="weui-cell weui-cell_access" 
        v-for="item in choiceList" 
        href="javascript:;"
        @click="showDialog(item.description,item.label)">
        <div class="weui-cell__bd">
            <p>{{item.label}}</p>
        </div>
         <div class="weui-cell__ft" @click=''>{{item.value}}</div>
      </a>
      <p class="weui-cell detail-read-more">更多详情，请阅读<a target="_blank" href="" class="base-color" title="安心防癌保险投保须知">《投保须知》</a>和<a target="_blank" href="" title="安心防癌保险保险条款" class="base-color">《保险条款》</a></p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'detailCard',
  props: [ 'choiceList', 'planList' ],
  data () {
    return {
      show: false,
      content: '',
      title: '',
      Index:0
    }
  },
  methods:{
    tabProductDetail(i,productId) {
      this.Index=i
      this.$emit( "tapTab", productId)
      
    },
    showDialog(content,title) {
      this.show=true
      this.content=content
      this.title=title
      this.$mLayer.open({
          title: title,
          content: content
      });
    }
  }
}
</script>
<style scoped lang="less">

.tab-nav{
  width: 100%;
  height: 0.44rem;
  display: flex;
  overflow-y: hidden;
  box-sizing: border-box;
  border-bottom: 1px solid #eee;
  background:#fff;
  a{
    font-size: 0.12rem;
    display: inline-block;
    height: 0.4rem;
    padding: 0 0.12rem;
    text-align: center;
    line-height: 0.44rem;
    -webkit-box-flex: 1;
    &.active{
      color: #ff4774;
      border-bottom: 1px solid #ff4774;
    }
  }
}
.weui-cells{
  width: 100%;
  padding: 0 3%;
  box-sizing: border-box;
  background:#fff;
  padding-bottom: 0.5rem;
}
.weui-cell_access{
  width: 100%;
  height: 0.4rem;
  font-size: 0.12rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.weui-cell__ft{
  text-align: right;
  color: #999999;
  font-size: 0.11rem;
  position: relative;
  padding-right: 0.1rem;
}
.weui-cell__ft::after{
    content: " ";
    display: inline-block;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    height: 8px;
    width: 8px;
    border-width: 2px 2px 0 0;
    border-color: #999;
    border-style: solid;
    position: relative;
    top: 0;
    right: 0;
    margin-left: 0.05rem;
}
.weui-cell{
  padding-left: 0.1rem;
  color: #666;
  &:before{
    left: 0;
    display: none;
  }
}
.detail-read-more{
  color: #999;
  font-size: 0.12rem;
  a{
    color: #1d50a2;
  }
}
</style>
