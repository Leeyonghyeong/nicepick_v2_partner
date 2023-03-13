<template>
  <section>
    <article ref="chartElement" class="graph"></article>
  </section>
</template>

<script lang="ts" setup>
import * as echarts from 'echarts/core'
import {
  TooltipComponent,
  GridComponent,
  TooltipComponentOption,
  GridComponentOption,
} from 'echarts/components'
import { BarChart, BarSeriesOption } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
import { Traffic } from '../../../../../types/traffic'
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps<{
  chartData: Traffic
}>()

type EChartsOption = echarts.ComposeOption<
  TooltipComponentOption | GridComponentOption | BarSeriesOption
>

const chartElement = ref<HTMLDivElement | null>(null)

echarts.use([TooltipComponent, GridComponent, BarChart, CanvasRenderer])

let trafficChart: echarts.ECharts

const makeChart = () => {
  if (chartElement.value) {
    const chartDom = chartElement.value
    trafficChart = echarts.init(chartDom)

    const option: EChartsOption = {
      tooltip: {
        trigger: 'axis',
        backgroundColor: '#191919',
        textStyle: {
          color: '#fff',
        },
      },
      xAxis: {
        type: 'category',
        axisTick: { show: true },
        data: ['월', '화', '수', '목', '금', '토', '일'],
      },
      yAxis: [
        {
          type: 'value',
        },
      ],
      series: [
        {
          type: 'bar',
          barMaxWidth: 20,
          itemStyle: {
            borderRadius: [50, 50, 0, 0],
          },
          emphasis: {
            focus: 'series',
          },
          color: '#3D50CB',
          data: [
            props.chartData.monCount,
            props.chartData.tueCount,
            props.chartData.wedCount,
            props.chartData.thurCount,
            props.chartData.friCount,
            props.chartData.satCount,
            props.chartData.sunCount,
          ],
        },
      ],
    }

    option && trafficChart.setOption(option)

    window.addEventListener('resize', resizeChart)
  }
}

const resizeChart = () => {
  if (trafficChart) {
    trafficChart.resize()
  }
}

onMounted(() => {
  makeChart()
})

onUnmounted(() => {
  window.removeEventListener('resize', resizeChart)
})
</script>

<style lang="scss" scoped>
section {
  width: 100%;
  height: 100%;

  .graph {
    width: 100%;
    height: 280px;
  }
}
</style>
