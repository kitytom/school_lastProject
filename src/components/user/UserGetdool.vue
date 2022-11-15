<template>
  <div class="usergetdool">
   <div class="topbox">
    <div class="data-left">
      <dv-capsule-chart :config="config" style="width:300px;height:200px" />
    </div>
    <div class="data-left text">
      已有新订单未发货！
    </div>
    <div class="data-left">
      <dv-scroll-board :config="config1" style="width:500px;height:220px" />
    </div>
   </div>
   <!--  -->
   <div class="dindan">
     <span>订单编号:1212323</span>
     <span>名称：移动端页面</span>
     <button>去发货</button>
   </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      config: {
        data: [
          {
            name: '1号',
            value: 167
          },
          {
            name: '2号',
            value: 123
          },
          {
            name: '3号',
            value: 98
          },
          {
            name: '4号',
            value: 75
          },
          {
            name: '5号',
            value: 66
          }
        ],
        colors: ['#e062ae', '#fb7293', '#e690d1', '#32c5e9', '#96bfff'],
        unit: '数量',
        showValue: true
      },
      config1: {
        header: ['订单编号', '订单名称', '发货情况'],
        data: [
          ['<span style="color:#37a2da;">001</span>', '前端页面', '已发货'],
          ['行2列1', '<span style="color:#32c5e9;">002</span>', '行2列3'],
          ['行3列1', '行3列2', '<span style="color:#67e0e3;">行3列3</span>'],
          ['行4列1', '<span style="color:#9fe6b8;">行4列2</span>', '行4列3'],
          ['<span style="color:#ffdb5c;">行5列1</span>', '行5列2', '行5列3'],
          ['行6列1', '<span style="color:#ff9f7f;">行6列2</span>', '行6列3'],
          ['行7列1', '行7列2', '<span style="color:#fb7293;">行7列3</span>'],
          ['行8列1', '<span style="color:#e062ae;">行8列2</span>', '行8列3'],
          ['<span style="color:#e690d1;">行9列1</span>', '行9列2', '行9列3'],
          ['行10列1', '<span style="color:#e7bcf3;">行10列2</span>', '行10列3']
        ],
        index: true,
        columnWidth: [50],
        align: ['center']
      }
    }
  }

}
</script>

<style scoped>
.usergetdool{
  width: 100%;
  height: 500px;
  background-color: #a1a4a5;
}
.topbox{
  height: 230px;
  display: flex;
  border-bottom:1px solid black ;
}
.data-left{
  height: 100%;
  width: 300px;
  text-align: center;
  margin-left: 20px;
}
.text{
  padding-top: 50px;
  height: 170px;
}
.dindan{
   height: 100px;
   line-height: 100px;
   padding-left: 20px;
   background-color: rgb(201, 201, 197);
}
.dindan span{
  display: inline-block;
  margin-left: 20px;
}
.dindan button{
 margin-left: 60px;
 height: 30px;
 width: 50px;

}
</style>
