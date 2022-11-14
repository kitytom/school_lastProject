<template>
  <div class="login-mainbox">
    <div class="loginmain">
      <dv-border-box-1 :color="['#E987A6', '#3C609F']">
          <div class="logio">
            <dv-border-box-11 :color="['#FF92B0']" title="登录" class="boderbox">
              <div>
                 <input type="text" placeholder="用户名"/>
                 <input type="text" placeholder="密码"/>
                 <button @click="gohome">登录</button>
              </div>
            </dv-border-box-11>
          </div>
      </dv-border-box-1>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    gohome () {
      // 登录成功后跳转到home页面
      this.$router.push('/home')
    }
  }
}
</script>

<style scoped>
.login-mainbox{
  width: 100%;
  height: 713px;
  position: relative;
  background-image: url('../assets/login2.jpg');
  background-size: 100%;
}
.login-mainbox .loginmain{
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -650px;
  margin-top: -300px;
  width: 1300px;
  height: 600px;
  vertical-align: middle;
}
.logio{
  width: 700px;
  height: 400px;
  padding-top: 100px;
  margin: auto;
}
.boderbox{
  position: relative;
}
.boderbox div{
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -120px;
  margin-top: -120px;
  width: 240px;
  height: 240px;
  display: flex;
  flex-direction: column;
}
.boderbox div input{
  margin-top: 30px;
  width: 240px;
  height: 30px;
  font-size: 17px;
  padding-left: 10px;
  border: 2px solid  #fe5b89;
  background-color: #42A3D5;
  opacity: 0.5;
  outline: none;
  color: #ffffff;
}
.boderbox div button{
  width: 90px;
  height: 30px;
  margin-top:40px ;
  border: 1px solid #FF92B0;
  background-color: #42A3D5;
  opacity: 0.5;
  color: white;
}
.boderbox div button:hover{
  background-color: #fa5d8a;
  color: white;
}
</style>
