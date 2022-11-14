<template>
  <div class="homebox">
    <!-- 版心 -->
    <div class="contentbox">
     <div class="nav-top">
         <div class="gif-title">
          <dv-decoration-3 style="width:200px;height:30px;" :color="['#CFF8FE','#63DEE1']" />
          </div>
          <div class="nav-item">
            <router-link to="/user">首页</router-link>|
            <a href="#">前端</a>|
            <a href="#">后端项目</a>|
            <router-link to="/user">个人中心</router-link>|
            <a href="#">交易大厅</a>
         </div>
         <div class="nav-user">
            <ul>
              <li  class="searchbox">
                <img src="../assets/search.png" alt="" class="sblock">
                <!-- 二级nav -->
                <div class="chil-nav">
                   <ul>
                    <li class="chil-item1">1</li>
                    <li class="chil-item2">1</li>
                    <li class="chil-item3">
                      <div class="seearchbox">
                            <input type="text" >
                            <div class="imgbox">
                               <img src="../assets/search.png" alt=""/>
                            </div>
                      </div>
                        <div class="srarchbotom-nav">
                          <a href="#">发起招募</a>|
                          <a href="#">接单</a>|
                          <a href="#">探讨</a>
                        </div>
                    </li>
                   </ul>
                 </div>
              </li>
              <li><router-link to="/logo">登录</router-link>
              </li>
            </ul>
         </div>
        </div>
        <!-- logo-box -->
         <div class="gif-logobox">
         <div id="main">
         <LogoGif></LogoGif>
         <TExtGif></TExtGif>
         </div>
         </div>
          <!-- 网站说明 -->
         <div class="content-box messagebox">
          <h2>用户参与</h2>
          <div>
           <h5>关于网站</h5>
           <div>
            <p>用户可以发布个人的作品进行售卖，前端页面，后端项目，个人笔记，个人资源</p>
            <p>网站以用户为主，可以根据自己需求进行购买和出售。</p>
             <p>解决找资源的难点，和做兼职的门槛</p>
           </div>
           <div class="usermes1">用户为主</div>
           <div class="usermes2">门槛低</div>
           <div class="usermes3">有收入</div>
           <div>
            我们能整合用户，和需求这，让大家能在平台上受益
          </div>
          </div>
        </div>
        <!-- 前端单独页面 -->
        <div class="content-box hostdata">
          <div class="title-item">前端页面</div>
          <div class="item-show">
             <img src="../assets/yidong/移动2.png" alt=""/>
             <img src="../assets/yidong/移动1.png" alt=""/>
             <img src="../assets/yidong/移动3.png" alt=""/>
             <img src="../assets/yidong/移动3.png" alt=""/>
             <img src="../assets/yidong/移动2.png" alt=""/>
             <img src="../assets/yidong/移动1.png" alt=""/>
          </div>
          <div class="item-show">
            <img src="../assets/yidong/移动2.png" alt=""/>
            <img src="../assets/yidong/移动1.png" alt=""/>
            <img src="../assets/yidong/移动3.png" alt=""/>
            <img src="../assets/yidong/移动3.png" alt=""/>
            <img src="../assets/yidong/移动2.png" alt=""/>
            <img src="../assets/yidong/移动1.png" alt=""/>
          </div>
          </div>
          <!-- pc端 -->
        <!-- 后台管理 -->
        <div class="content-box hostdata">
        <div class="title-item">后台管理</div>
        <div class="item-show psbox">
          <a href=""><img src="../assets/pc/admin1.png" alt=""/></a>
          <img src="../assets/pc/admin2.png" alt=""/>
          <img src="../assets/pc/admin1.png" alt=""/>
          <img src="../assets/pc/admin2.png" alt=""/>
        </div>
        <div class="item-show psbox">
          <a href=""><img src="../assets/pc/admin1.png" alt=""/></a>
          <img src="../assets/pc/admin2.png" alt=""/>
          <img src="../assets/pc/admin1.png" alt=""/>
          <img src="../assets/pc/admin2.png" alt=""/>
        </div>
        </div>
        <!-- pc端 -->
        <div class="content-box">
          <div class="title-item">pc端网站</div>
          <div class="item-show htmlbox">
            <a href=""><img src="../assets/pc/pc1.png" alt=""/></a>
            <img src="../assets/pc/pc2.png" alt=""/>
            <img src="../assets/pc/pc2.png" alt=""/>
          </div>
          <div class="item-show htmlbox">
            <a href=""><img src="../assets/pc/pc1.png" alt=""/></a>
            <img src="../assets/pc/pc2.png" alt=""/>
            <img src="../assets/pc/pc2.png" alt=""/>
          </div>
          </div>
          <!-- 移动端 -->
        <div class="content-box">
          <div class="title-item">移动端</div>
          <div class="item-show">
            <img src="../assets/yidong/移动2.png" alt=""/>
            <img src="../assets/yidong/移动1.png" alt=""/>
            <img src="../assets/yidong/移动3.png" alt=""/>
            <img src="../assets/yidong/移动3.png" alt=""/>
            <img src="../assets/yidong/移动2.png" alt=""/>
            <img src="../assets/yidong/移动1.png" alt=""/>
         </div>
         <div class="item-show">
           <img src="../assets/yidong/移动2.png" alt=""/>
           <img src="../assets/yidong/移动1.png" alt=""/>
           <img src="../assets/yidong/移动3.png" alt=""/>
           <img src="../assets/yidong/移动3.png" alt=""/>
           <img src="../assets/yidong/移动2.png" alt=""/>
           <img src="../assets/yidong/移动1.png" alt=""/>
         </div>
          </div>
           <!-- ul设计 -->
        <div class="content-box">
          <div class="title-item">ul设计</div>
          <div class="item-show">
            <img src="../assets/yidong/移动2.png" alt=""/>
            <img src="../assets/yidong/移动1.png" alt=""/>
            <img src="../assets/yidong/移动3.png" alt=""/>
            <img src="../assets/yidong/移动3.png" alt=""/>
            <img src="../assets/yidong/移动2.png" alt=""/>
            <img src="../assets/yidong/移动1.png" alt=""/>
         </div>
         <div class="item-show">
           <img src="../assets/yidong/移动2.png" alt=""/>
           <img src="../assets/yidong/移动1.png" alt=""/>
           <img src="../assets/yidong/移动3.png" alt=""/>
           <img src="../assets/yidong/移动3.png" alt=""/>
           <img src="../assets/yidong/移动2.png" alt=""/>
           <img src="../assets/yidong/移动1.png" alt=""/>
         </div>
          </div>
          <!-- 移动端 -->
        <div class="content-box">
        <div class="title-item">小程序</div>
        <div class="item-show">
          <img src="../assets/yidong/移动2.png" alt=""/>
          <img src="../assets/yidong/移动1.png" alt=""/>
          <img src="../assets/yidong/移动3.png" alt=""/>
          <img src="../assets/yidong/移动3.png" alt=""/>
          <img src="../assets/yidong/移动2.png" alt=""/>
          <img src="../assets/yidong/移动1.png" alt=""/>
       </div>
       <div class="item-show">
         <img src="../assets/yidong/移动2.png" alt=""/>
         <img src="../assets/yidong/移动1.png" alt=""/>
         <img src="../assets/yidong/移动3.png" alt=""/>
         <img src="../assets/yidong/移动3.png" alt=""/>
         <img src="../assets/yidong/移动2.png" alt=""/>
         <img src="../assets/yidong/移动1.png" alt=""/>
       </div>
        </div>
        <!-- bottom -->
        <div class="company">
          <div>
           1
          </div>
          <div>
             2
          </div>
          <div>
             3
          </div>
          <div>
            4
          </div>
        </div>
    </div>
    <!-- 侧边nva -->
    <div class="right-aside">
        <div>发起招募</div>
        <div><router-link to="/user">个人中心</router-link> </div>
        <div>接单</div>
    </div>
  </div>
</template>

<script>
import LogoGif from '../components/LogoGif.vue'
import TExtGif from '../components/TextGif.vue'
export default {
  components: {
    LogoGif,
    TExtGif
  },
  data () {
    return {
    }
  },
  methods: {

  }
}
</script>

<style scoped>
.homebox{
  width: 100%;
  height: 100%;
  background-image:url('../assets/bg.png');
}
.contentbox{
  width: 1200px;
  height: 100%;
  margin: 0 auto;

}
.nav-top{
  height: 60px;
  line-height: 60px;
  display: flex;
  color: #595757;
  background-color: #F1F7FF;
}
.gif-title{
   margin-top: 13px;
}
.nav-item>a{
  color: #000000;
  margin: 0px 15px 0px 15px;
}
.nav-user{
  margin-left:400px;
}
.nav-user ul{
   display: flex;
}
.nav-user ul li{
  margin-left: 20px;
}
.nav-user img{
  margin: 15px 10px 0px 0px;
  width: 30px;
  height: 30px;
}
.searchbox{
  position: relative;
}
.chil-nav{
  width: 1200px;
  height: 200px;
  display: flex;
  background-color: rgb(168, 214, 214);
  position: absolute;
  right: -98px;
  top: 60px;
  display: none;
}
.chil-nav .chil-item3{
  margin-top: 50px;
}
.searchbox:hover>.chil-nav{
  display: block;
  z-index: 100;
}
.chil-item1{
  width: 300px;
}
.chil-item2{
  width: 300px;
}
.chil-item3 .seearchbox{
  width: 400px;
  height: 50px;
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
  position: absolute;
  right: 0px;
}
.seearchbox img{
  margin:5px 0px 0px 2px;
}
.imgbox{
  width: 40px;
  height: 48px;
  padding-top: 2px;
  border-left: 2px solid rgb(64, 190, 150);
}
.srarchbotom-nav{
  margin-top: -10px;
}
.srarchbotom-nav a{
  margin: 0px 10px 0px 10px;
}
.gif-logobox{
  height: 200px;
  width: 100%;
  background-image:linear-gradient(60deg,#586a78 0%, #c2e59c 100%)
}
.content-box{
  width: 1180px;
  height: 500px;
  padding: 20px 0px 0px 20px;
  background-color: #EEF2FF;
  position: relative;
  border-bottom:1px solid  #64b3f4;
}
.messagebox{
  height: 180px;
}
.usermes1,.usermes2,.usermes3{
  width: 70px;
  height: 70px;
  line-height: 70px;
  text-align: center;
  border-radius: 100%;
  background-color: #A5D5B7;
}
.usermes1{
  position: absolute;
  right: 200px;
  top: 50px;
}
.usermes2{
  position: absolute;
  right: 100px;
  top: 30px;
}
.usermes3{
  position: absolute;
  right: 10px;
  top: 20px;
}
.hostdata{
  background-color: #EEF2FF;
  height: 500px;
}
.right-aside{
  width: 100px;
  height: 150px;
  text-align: center;
  padding-top: 20px;
  border-radius: 10px 0px 0px 10px;
  background-image:linear-gradient(60deg,#64b3f4 0%, #c2e59c 100%);
  position: fixed;
  right: 10px;
  top: 300px;
}
.right-aside:hover{
  cursor: pointer;
}
.right-aside div{
  height: 60px;
  line-height: 10px;
}
.item-show {
  margin-bottom:10px ;
  display: flex;
  justify-content: space-around;
}
.item-show img{
   height: 220px;
   width: 160px;
   margin-right: 10px;
   box-shadow: 2px 2px 10px #83C3D7;
}
.psbox img{
  height: 220px;
  width: 260px;
}
.htmlbox img{
  height: 220px;
  width: 360px;
}
.company{
  height: 200px;
  background-color: rgb(183, 164, 168);
  display: flex;
  justify-content: space-around;
}
.title-item{
  width: 100%;
  height: 42px;
  font-size: 18px;
  text-align: center;
}
</style>
