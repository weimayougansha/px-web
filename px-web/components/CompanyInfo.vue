<template>
  <div class="flex flex-row h-screen">
    <div class="w-1/3 bg-black text-white p-8">
      <h1 class="text-2xl font-bold mb-4">北京璞新设计</h1>
      <p class="text-sm mb-4">
        UTILIZE SYSTEMATIC DESIGN THINKING TO DRIVE THE IMPLEMENTATION OF CREATIVE IDEAS.
      </p>
      <div class="flex flex-col space-y-2 mb-4">
        <div class="flex items-center space-x-2">
          <el-icon :size="16">
            <Phone />
          </el-icon>
          <span>+86 153 3009 6866</span>
        </div>
        <div class="flex items-center space-x-2">
          <el-icon :size="16">
            <Message />
          </el-icon>
          <span>grape308395941</span>
        </div>
        <div class="flex items-center space-x-2">
          <el-icon :size="16">
            <Mail />
          </el-icon>
          <span>purecreation@gmail.com</span>
        </div>
        <div class="flex items-center space-x-2">
          <el-icon :size="16">
            <Location />
          </el-icon>
          <span>北京市昌平区万科龙域中心a座五层</span>
        </div>
      </div>
      <img src="/your-qr-code.png" alt="二维码" class="w-20 h-20" />
    </div>
    <div class="w-2/3 bg-gray-400 flex items-center justify-center">
      <p class="text-white">公司地图</p>
    </div>
  </div>
</template>

<script setup>
import { Phone, Message, Mail, Location } from '@element-plus/icons-vue'
</script>

<style scoped>
</style>