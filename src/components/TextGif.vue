<template>
  <div id="main">

  </div>
</template>

<script>
import * as echarts from 'echarts/core'
import { GraphicComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'

export default {

  data () {
    return {
    }
  },
  created () {
    echarts.use([GraphicComponent, CanvasRenderer])
  },
  mounted () {
    const chartDom = document.getElementById('main')
    const myChart = echarts.init(chartDom)

    const option = {
      graphic: {
        elements: [
          {
            type: 'text',
            left: 'center',
            top: 'center',
            style: {
              text: 'IT中心',
              fontSize: 60,
              fontWeight: 'bold',
              lineDash: [0, 200],
              lineDashOffset: 0,
              fill: 'transparent',
              stroke: '#BCE2A2',
              lineWidth: 1
            },
            keyframeAnimation: {
              duration: 3000,
              loop: true,
              keyframes: [
                {
                  percent: 0.7,
                  style: {
                    fill: 'transparent',
                    lineDashOffset: 200,
                    lineDash: [200, 0]
                  }
                },
                {
                  // Stop for a while.
                  percent: 0.8,
                  style: {
                    fill: 'transparent'
                  }
                },
                {
                  percent: 1,
                  style: {
                    fill: '#6CB7EC'
                  }
                }
              ]
            }
          }
        ]
      }
    }

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
