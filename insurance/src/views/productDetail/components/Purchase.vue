<template>
  <div id="toubaoinfo" @click='menghide'>
    <div class="dialogtou">
      <div class="detail-project">
          <h1 class="project-title">{{product.title}}</h1>
          <a href="javascript:;" class="project-logo" target="_blank">
              <img :src="company.logo" alt="泰康人寿">
          </a>
      </div>
      <div class="weui-cells">
        <a class='weui-cell' href='javascript:;'  v-for='item in genes'>
          <div class="weui-cell__hd">
              <p>{{item.label}}：</p>
          </div>
          <div class="weui-cell__bd">
            <div v-if="item.type == 'list'">
              <div v-if="JSON.parse(item.options).list">
                <label class="label" v-for="item2 in JSON.parse(item.options).list"><input type="radio" :name="item.gene_key" checked /><span>{{item2.label}}</span></label>
              </div>
              <div v-else>
                <Picker  :name="item.gene_key" :step="JSON.parse(item.options)"></Picker>
              </div>
            </div>
            <div v-else-if="item.type == 'fixed'">
              {{item.value}}
              <input type="hidden" :name="item.gene_key" :value="item.value" />
            </div>
            <div v-else-if="item.type == 'date'">
              <DatePicker :name="item.gene_key" :values="item.value"></DatePicker>
            </div>
          </div>
        </a>
      </div>
      <div class="bottom-nav">
        <output>价格：¥{{product.price}}</output>
        <a href="javascript:;" class="btn" @click='toPolicyInfo'>立即投保</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  props:['genes','product','company','options'],
  mounted() {
    this.$el.addEventListener("touchmove",function(e){//阻止浏览器的默认行为
      e.preventDefault();
      return false;
    },false)
    $( this.$el ).find(".dialogtou").on("click", function(e) {//阻止冒泡
        e.stopPropagation();
    })
  },
  methods:{
    menghide() {
      this.$emit( "hidemeng")
    },
    toPolicyInfo() {
      if(this.options.need_health==1){
        alert(this.product.product_id)
        this.$store.dispatch('products/GetHealthState',{
          product_id: this.product.product_id
        }).then(function( response ){
          console.log( response )
        });
      }else{
        this.$router.push('/policyInfo')
      }
      
    }
  }
}
</script>

<style lang='less' scoped>
#toubaoinfo{
   position: fixed;
   top: 0;
   bottom: 0;
   right: 0;
   left: 0;
   background: rgba(0,0,0,.3);
   display: flex;
   align-items: flex-end;
   .dialogtou{
    width: 100%;
    padding: 0 3%;
    box-sizing: border-box;
    background: #fff;
   }
}
.detail-project{
  width: 100%;
  height: 0.4rem;

  display: flex;
  .project-title{
    flex:4;
    line-height: 0.4rem;
    font-size: 0.18rem;
  }
  .project-logo{
    flex:2;
    img{
      width: 100%;
      display: block;
    }
  }
}
.bottom-nav{
    height: 0.5rem;
    line-height: 0.5rem;
    display: -webkit-box;
    background: #fff;
    width: 100%;
    position: fixed;
    margin-top: 0.4rem;
    bottom: 0;
    output{
      display: block;
      -webkit-box-flex: 1;
      color: #ff4774;
      padding-left: 0.1rem;
      text-align: left;
      background: #fff
    }
    .btn{
      display: block;
      padding: 0 0.4rem;
      background: #ff4774;
      color: #fff;
      font-size: 0.14rem
    }
}
.weui-cells{
  margin-top: 0;
  font-size: 0.12rem;
  margin-bottom: 0.4rem;
  .weui-cell{
    padding-left: 0.1rem;
    color: #666;
    display: flex;
    padding: 0.15rem 0.1rem;
    border-bottom: 1px solid #eee;
  }
  .weui-cell__hd{
    width: 0.6rem;
    p{ color: #000;}
  }
  .detail-read-more{
    color: #999;
    font-size: 0.12rem;
    a{
      color: #1d50a2;
    }
  }
}
.label{
    display: inline-block;
    overflow: hidden;
    margin: 0 2px;
    input{
      display: none;
      &:checked + span{
        background: #ff4774;
        color: #fff;
        border-color: #ff4774;
      }
    }
    span{
      padding: 0.05rem 0.1rem;
      border-radius: 0.03rem;
      border: 1px solid #eee;
      display: block;
    }
  }



</style>
