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
    <div class="bg-white p-4">
    <h1 class="text-3xl font-bold text-center mb-8 text-black">PROCESSING RANGE</h1>
    <div class="flex justify-around bg-white">
      <div class="flex flex-col items-center">
      <div class="rounded-full border-2 p-10">
        <img src="/ffjy.svg" class="h-[50px]"/>
      </div>
        <p class="text-gray-600 mt-2">丰富经验</p>
      </div>
      <div class="flex flex-col items-center">
        <div class="rounded-full border-2 p-10">
        <img src="/jgnl.svg" class="h-[50px]"/>
      </div>
        <p class="text-gray-600 mt-2">加工能力</p>
      </div>
      <div class="flex flex-col items-center">
        <div class="rounded-full border-2 p-10">
        <img src="/top.svg" class="h-[50px]"/>
      </div>
        <p class="text-gray-600 mt-2">顶尖设备</p>
      </div>
      <div class="flex flex-col items-center">
        <div class="rounded-full border-2 p-10">
        <img src="/xjgl.svg" class="h-[50px]"/>
      </div>
        <p class="text-gray-600 mt-2">先进管理</p>
      </div>
      <div class="flex flex-col items-center">
        <div class="rounded-full border-2 p-10">
        <img src="/ksjf.svg" class="h-[50px]"/>
      </div>
        <p class="text-gray-600 mt-2">快速交付</p>
      </div>
      <div class="flex flex-col items-center">
        <div class="rounded-full border-2 p-10">
        <img src="/iso.svg" class="h-[50px]"/>
      </div>
        <p class="text-gray-600 mt-2">ISO体系</p>
      </div>
    </div>
  </div>

  <div id="map" title="Map Chart" desc="SSR + client-side lazy loading" class="w-full h-[600px]">
    <VChart :option="option" />
  </div>
</template>