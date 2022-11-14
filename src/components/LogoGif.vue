<template>
  <div id="main">

  </div>
</template>

<script>
import * as echarts from 'echarts/core'
import { GraphChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
export default {

  data () {
    return {
    }
  },
  created () {
    echarts.use([GraphChart, CanvasRenderer])
  },
  mounted () {
    const chartDom = document.getElementById('main')
    const myChart = echarts.init(chartDom)

    const data = [
      {
        fixed: true,
        x: myChart.getWidth() / 2,
        y: myChart.getHeight() / 2,
        symbolSize: 20,
        id: '-1'
      }
    ]
    const edges = []
    const option = {
      series: [
        {
          type: 'graph',
          layout: 'force',
          animation: false,
          data: data,
          force: {
            // initLayout: 'circular'
            // gravity: 0
            repulsion: 100,
            edgeLength: 5
          },
          edges: edges
        }
      ]
    }
    setInterval(function () {
      data.push({
        id: data.length + ''
      })
      const source = Math.round((data.length - 1) * Math.random())
      const target = Math.round((data.length - 1) * Math.random())
      if (source !== target) {
        edges.push({
          source: source,
          target: target
        })
      }
      myChart.setOption({
        series: [
          {
            roam: true,
            data: data,
            edges: edges
          }
        ]
      })
      // console.log('nodes: ' + data.length);
      // console.log('links: ' + data.length);
    }, 200)

    option && myChart.setOption(option)
  }
}
</script>

<style>
#main{
  width: 1200px;
  height: 200px;
}
</style>
