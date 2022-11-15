<template>
  <div class="sellbox">
    <div class="contentbox">
      <div id="main">
      </div>
      <div class="gochu" @click="gochushou">去出售</div>
      <div class="goodadd" v-if="hidden">
            <div class="gooditem">出售商品</div>
            <ul>
              <li><select name="" id="">
                <option value="">前端页面</option>
                <option value="">后台管理</option>
                <option value="">后端项目</option>
                <option value="">UL设计</option>
                <option value="">微信小程序</option>
              </select></li>
              <li><span>商品名称</span><input type="text"/></li>
              <li><span>商品描述</span><input type="text"/></li>
              <li><span>商品价格</span><input type="text"/></li>
              <li><span>上传图片</span></li>
              <li><button>发布</button><button @click="quxiao">取消</button></li>
            </ul>
      </div>
      <!--  -->
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts/core'
import {
  TitleComponent,
  GridComponent,
  LegendComponent
} from 'echarts/components'
import { ScatterChart } from 'echarts/charts'
import { UniversalTransition } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'
export default {
  data () {
    return {
      hidden: false
    }
  },
  methods: {
    gochushou () {
      this.hidden = true
    },
    quxiao () {
      this.hidden = false
    }
  },
  created () {
    echarts.use([
      TitleComponent,
      GridComponent,
      LegendComponent,
      ScatterChart,
      CanvasRenderer,
      UniversalTransition
    ])
  },
  mounted () {
    const chartDom = document.getElementById('main')
    const myChart = echarts.init(chartDom)
    const data = [
      [
        [28604, 77, 17096869, 'Australia', 1990],
        [31163, 77.4, 27662440, 'Canada', 1990],
        [1516, 68, 1154605773, 'China', 1990],
        [13670, 74.7, 10582082, 'Cuba', 1990],
        [28599, 75, 4986705, 'Finland', 1990],
        [29476, 77.1, 56943299, 'France', 1990],
        [31476, 75.4, 78958237, 'Germany', 1990],
        [28666, 78.1, 254830, 'Iceland', 1990],
        [1777, 57.7, 870601776, 'India', 1990],
        [29550, 79.1, 122249285, 'Japan', 1990],
        [2076, 67.9, 20194354, 'North Korea', 1990],
        [12087, 72, 42972254, 'South Korea', 1990],
        [24021, 75.4, 3397534, 'New Zealand', 1990],
        [43296, 76.8, 4240375, 'Norway', 1990],
        [10088, 70.8, 38195258, 'Poland', 1990],
        [19349, 69.6, 147568552, 'Russia', 1990],
        [10670, 67.3, 53994605, 'Turkey', 1990],
        [26424, 75.7, 57110117, 'United Kingdom', 1990],
        [37062, 75.4, 252847810, 'United States', 1990]
      ],
      [
        [44056, 81.8, 23968973, 'Australia', 2015],
        [43294, 81.7, 35939927, 'Canada', 2015],
        [13334, 76.9, 1376048943, 'China', 2015],
        [21291, 78.5, 11389562, 'Cuba', 2015],
        [38923, 80.8, 5503457, 'Finland', 2015],
        [37599, 81.9, 64395345, 'France', 2015],
        [44053, 81.1, 80688545, 'Germany', 2015],
        [42182, 82.8, 329425, 'Iceland', 2015],
        [5903, 66.8, 1311050527, 'India', 2015],
        [36162, 83.5, 126573481, 'Japan', 2015],
        [1390, 71.4, 25155317, 'North Korea', 2015],
        [34644, 80.7, 50293439, 'South Korea', 2015],
        [34186, 80.6, 4528526, 'New Zealand', 2015],
        [64304, 81.6, 5210967, 'Norway', 2015],
        [24787, 77.3, 38611794, 'Poland', 2015],
        [23038, 73.13, 143456918, 'Russia', 2015],
        [19360, 76.5, 78665830, 'Turkey', 2015],
        [38225, 81.4, 64715810, 'United Kingdom', 2015],
        [53354, 79.1, 321773631, 'United States', 2015]
      ]
    ]
    const option = {
      backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [
        {
          offset: 0,
          color: '#f7f8fa'
        },
        {
          offset: 1,
          color: '#cdd0d5'
        }
      ]),
      title: {
        text: '商品出售情况',
        left: '5%',
        top: '3%'
      },
      legend: {
        right: '10%',
        top: '3%',
        data: ['1990', '2015']
      },
      grid: {
        left: '8%',
        top: '10%'
      },
      xAxis: {
        splitLine: {
          lineStyle: {
            type: 'dashed'
          }
        }
      },
      yAxis: {
        splitLine: {
          lineStyle: {
            type: 'dashed'
          }
        },
        scale: true
      },
      series: [
        {
          name: '1990',
          data: data[0],
          type: 'scatter',
          symbolSize: function (data) {
            return Math.sqrt(data[2]) / 5e2
          },
          emphasis: {
            focus: 'series',
            label: {
              show: true,
              formatter: function (param) {
                return param.data[3]
              },
              position: 'top'
            }
          },
          itemStyle: {
            shadowBlur: 10,
            shadowColor: 'rgba(120, 36, 50, 0.5)',
            shadowOffsetY: 5,
            color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
              {
                offset: 0,
                color: 'rgb(251, 118, 123)'
              },
              {
                offset: 1,
                color: 'rgb(204, 46, 72)'
              }
            ])
          }
        },
        {
          name: '2015',
          data: data[1],
          type: 'scatter',
          symbolSize: function (data) {
            return Math.sqrt(data[2]) / 5e2
          },
          emphasis: {
            focus: 'series',
            label: {
              show: true,
              formatter: function (param) {
                return param.data[3]
              },
              position: 'top'
            }
          },
          itemStyle: {
            shadowBlur: 10,
            shadowColor: 'rgba(25, 100, 150, 0.5)',
            shadowOffsetY: 5,
            color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
              {
                offset: 0,
                color: 'rgb(129, 227, 238)'
              },
              {
                offset: 1,
                color: 'rgb(25, 183, 207)'
              }
            ])
          }
        }
      ]
    }

    option && myChart.setOption(option)
  }
}
</script>

<style scoped>
.sellbox{
  width: 100%;
}
.contentbox{
  display: flex;
}
#main{
  margin-top: 20px;
  width: 700px;
  height: 600px;
}
.goodadd{
  padding: 30px 0px 0px 20px;
  height: 300px;
  width: 400px;
  background-color: rgb(176, 188, 188);
  margin:50px 0px 0px 50px;
}
.gooditem{
  height: 50px;
  color: #EC7A80;
}
.goodadd ul li{
  height: 35px;
}
.goodadd ul li span{
  margin-left: 10px;
  color: #EC7A80;
}
.goodadd ul li input {
  outline: none;
  border: 1px solid #EC7A80;
  height: 20px;
  margin-left: 10px;
}
.goodadd ul li button{
  margin-right: 40px;
}
.gochu{
  height: 25px;
  width: 90px;
  text-align: center;
  background-color: antiquewhite;
  margin: 80px 0px 0px 20px;
  color: #EC7A80;
}
.gochu:hover{
  cursor: pointer;
}
</style>
