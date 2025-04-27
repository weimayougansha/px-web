<script setup lang="ts">
import * as echarts from 'echarts/core'
import { VisualMapComponent } from 'echarts/components'
import chinaJson from '@/assets/china.json'

echarts.registerMap('CN', chinaJson as any)

const option: ECOption = {
  backgroundColor: '#000', // 整体背景为黑色
  
  visualMap: {
    show: false, // 隐藏视觉映射组件，因为我们不需要渐变效果
  },

  series: [
    {
      name: 'CN PopEstimates',
      type: 'map',
      roam: true,
      map: 'CN',
      // 设置所有区域默认颜色为黑色
      itemStyle: {
        areaColor: '#000',    // 所有区域默认黑色
        borderColor: '#FFF',  // 边界颜色
        borderWidth: 1      // 边界宽度
      },
      // 高亮时的样式
      emphasis: {
        itemStyle: {
          areaColor: '#0000FF', // 高亮时为蓝色
        },
        label: {
          show: true,
        },
      },
      data: [
        // 北京和上海单独设置颜色
        { name: '北京市', value: 1, itemStyle: { areaColor: '#0000FF' } },
        { name: '天津市', value: 1, itemStyle: { areaColor: '#0000FF' } },
        { name: '浙江省', value: 1, itemStyle: { areaColor: '#0000FF' } },
        { name: '广东省', value: 1, itemStyle: { areaColor: '#0000FF' } },
      ],
    },
  ],
}
</script>

<template>
  <div id="map" title="Map Chart" desc="SSR + client-side lazy loading" class="w-full h-[600px]">
    <VChart :option="option" />
  </div>
</template>