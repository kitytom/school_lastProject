<template>
  <div class="userhome">
    <div class="user-top">
        <div>logo</div>
        <div>
          <div class="seearchbox">
            <input type="text" >
            <div class="imgbox">
            <img src="../assets/search.png" alt=""/>
            </div>
      </div>
        </div>
        <div class="userimg">
          <div class="userpic"></div>
          <div class="usernickname">用户昵称</div>
        </div>
    </div>
    <div class="center-box">
      <div class="aside-left">
        <router-link to="/getdool">接单</router-link>
        <router-link to="/sell">出售</router-link>
        <router-link to="/shion">发货情况</router-link>
        <router-link to="/home">返回首页</router-link>
        <router-link to="/information">资料分享</router-link>
        <router-link to="/income">收益</router-link>
        <router-link to="/message">消息</router-link>
        <router-link to="/collection">商品收藏</router-link>
        <router-link to="/setup">设置</router-link>
      </div>
      <div class="aside-right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.user-top{
  height: 80px;
  width: 100%;
  line-height: 80px;
  background-color: antiquewhite;
  display: flex;
  justify-content: space-around;
}
.seearchbox{
  width: 400px;
  height: 50px;
  margin-top:10px ;
  text-align: center;
  background-color: #EEF2FF;
  border: 2px solid rgb(64, 190, 150);
  position: relative;
}
.seearchbox input{
  display: inline-block;
  outline: none ;
  border: 0;
  width: 350px;
  height: 46px;
  font-size: 23px;
  position: absolute;
  left: 3px;
  top: 2px;
  background-color: #EEF2FF;
}
.seearchbox .imgbox{
  height: 50px;
  border-left: 2px solid#40BE96;
  position: absolute;
  right: 0px;
}
.seearchbox img{
  width: 40px;
  height: 40px;
  margin:5px 0px 0px 2px;
}
.userimg{
  display:flex;
}
.userpic{
  width: 50px;
  height: 50px;
  margin:15px 5px 0px 0px ;
  background-color: #40BE96;
}
.center-box{
  width: 100%;
  height: 633px;
  display: flex;
}
.aside-left{
  width: 130px;
  height: 530px;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: coral;
  justify-content: space-around;
  position: fixed;
  top: 100px;
}
.aside-left a{
  display: block;
  height: 50px;
  width: 100%;
  line-height: 50px;
  margin-bottom: 10px;
}
.aside-left a:hover{
  background-color: #A5D5B7;
}
.aside-right{
  width: 1380px;
  margin-left: 140px;
  background-color: rgb(137, 150, 150);
}
</style>
