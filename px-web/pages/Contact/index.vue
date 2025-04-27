<template>
  <div class="h-[400px]">
    <img
      src="/bg.png"
    />
  </div>

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
            <Message />
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

    <div class="max-w-screen-lg mx-auto p-4">
    <h1 class="text-3xl font-bold mb-2">立即咨询</h1>
    <p class="text-gray-500 mb-4">CONSULT NOW</p>
    <form class="space-y-6">
      <div>
        <label for="name" class="block text-sm font-medium text-red-600">
          *称呼:
        </label>
        <input
          type="text"
          id="name"
          class="w-full mt-1 border-b border-gray-300 focus:border-red-500 focus:outline-none transition-colors"
          placeholder="请输入称呼"
        />
      </div>
      <div>
        <label for="phone" class="block text-sm font-medium text-red-600">
          *电话:
        </label>
        <input
          type="text"
          id="phone"
          class="w-full mt-1 border-b border-gray-300 focus:border-red-500 focus:outline-none transition-colors"
          placeholder="请输入电话"
        />
      </div>
      <div>
        <label for="company" class="block text-sm font-medium text-red-600">
          *企业名称:
        </label>
        <input
          type="text"
          id="company"
          class="w-full mt-1 border-b border-gray-300 focus:border-red-500 focus:outline-none transition-colors"
          placeholder="请输入企业名称"
        />
      </div>
      <div>
        <label for="demand-type" class="block text-sm font-medium text-red-600">
          *需求类型:
        </label>
        <div class="flex flex-wrap space-x-2 mt-1">
          <el-checkbox
            v-for="(type, index) in demandTypes"
            :key="index"
            :label="type"
            class="mb-2"
          >
            {{ type }}
          </el-checkbox>
        </div>
      </div>
      <div>
        <label for="demand-description" class="block text-sm font-medium text-red-600">
          *需求描述:
        </label>
        <textarea
          id="demand-description"
          class="w-full mt-1 border-b border-gray-300 focus:border-red-500 focus:outline-none transition-colors resize-none"
          placeholder="请输入内容……"
          rows="3"
        ></textarea>
      </div>
      <div class="flex justify-center">
        <el-button
          type="submit"
          class="bg-white text-gray-800 border border-gray-400 rounded-full px-8 py-2 text-sm font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all"
        >
          提交
        </el-button>
      </div>
    </form>
  </div>
</template>
<script setup>
import { Phone, Message, Location } from '@element-plus/icons-vue'
const demandTypes = [
  '设计咨询',
  '产品策划',
  '外观设计',
  '结构设计',
  '品牌策划',
  'logo设计',
  '包装设计',
  'Vi设计',
  '硬件设计',
  '软件设计',
  '手板制作',
  '批量生产'
];
</script>

<style scoped>
/* 自定义Element Plus复选框样式 */
::v-deep .el-checkbox__inner {
  border-radius: 0 !important;
  border-width: 1px !important;
}

::v-deep .el-checkbox__input.is-checked .el-checkbox__inner {
  background-color: #fff !important;
  border-color: #f56c6c !important;
}

::v-deep .el-checkbox__input.is-checked .el-checkbox__inner::after {
  border-color: #f56c6c !important;
}
</style>