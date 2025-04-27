<template>
  <div class="py-[20px] bg-black">
    <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="item in 6" :key="item">
        <h3 text="2xl" justify="center">{{ item }}</h3>
        </el-carousel-item>
    </el-carousel>
  </div>
  <div class="container text-white">
    <el-breadcrumb separator="|" class="text-white">
        <el-breadcrumb-item :to="{ path: '/' }">ALL</el-breadcrumb-item>
        <el-breadcrumb-item>医疗产品</el-breadcrumb-item>
        <el-breadcrumb-item>工业制造</el-breadcrumb-item>
        <el-breadcrumb-item>智能出行</el-breadcrumb-item>
        <el-breadcrumb-item>3C数码</el-breadcrumb-item>
        <el-breadcrumb-item>特种装备</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
  <div class="grid grid-cols-2 gap-4 p-10">
  <div class="bg-black text-white h-[450px] flex flex-col justify-end">
    <!-- flex 容器 + 两端对齐 -->
    <div class="flex justify-between p-4">
      <div>元素 1</div>
      <div>元素 2</div>
    </div>
  </div>
  <div class="bg-black text-white h-[450px] flex flex-col justify-end">
    <!-- flex 容器 + 两端对齐 -->
    <div class="flex justify-between p-4">
      <div>元素 1</div>
      <div>元素 2</div>
    </div>
  </div>
  <div class="bg-black text-white h-[450px] flex flex-col justify-end">
    <!-- flex 容器 + 两端对齐 -->
    <div class="flex justify-between p-4">
      <div>元素 1</div>
      <div>元素 2</div>
    </div>
  </div>
  <div class="bg-black text-white h-[450px] flex flex-col justify-end">
    <!-- flex 容器 + 两端对齐 -->
    <div class="flex justify-between p-4">
      <div>元素 1</div>
      <div>元素 2</div>
    </div>
  </div>
</div>
</template>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
