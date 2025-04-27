<template>
  
  <div class="block text-center">
    <el-carousel height="850px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="small justify-center" text="2xl">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>

<div class="p-10 bg-[#333333] text-white">
  <h1>
    技术+美学+制造
  </h1>
  <h1>
    创造“独一无二”的产品
  </h1>
  <h2>
    一站式产品设计解决方案
  </h2>
  <p>
    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  </p>

  <div class="flex justify-between">
    <div>
      <h3>
        10+
      </h3>
      <p>
        xxxxxxxxxxxx
      </p>
      <p>
        xxxxxxxxxxxx
      </p>
    </div>
    <div>
      <h3>
        20+
      </h3>
      <p>
        xxxxxxxxxxxx
      </p>
      <p>
        xxxxxxxxxxxx
      </p>
    </div>
    <div>
      <h3>
        30+
      </h3>
      <p>
        xxxxxxxxxxxx
      </p>
      <p>
        xxxxxxxxxxxx
      </p>
    </div>
    <div>
      <h3>
        40+
      </h3>
      <p>
        xxxxxxxxxxxx
      </p>
      <p>
        xxxxxxxxxxxx
      </p>
    </div>
  
  

  </div>
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

<div>
  <div class="flex items-center justify-center p-20">
    <div class="flex-grow border-t border-gray-100"></div>
    <div class="px-4 text-xl text-white font-bold">NEWS</div>
    <div class="flex-grow border-t border-gray-100"></div>
  </div>
  <div class="flex flex-col gap-4 p-10">
        <!-- 第一行 -->
        <div class="grid grid-cols-4 h-[400px] gap-4">
            <div class="col-span-2 bg-black flex justify-center items-center">元素 1</div>
            <div class="col-span-1 bg-black flex justify-center items-center">元素 2</div>
            <div class="col-span-1 bg-black flex justify-center items-center">元素 3</div>
        </div>
        <!-- 第二行 -->
        <div class="grid grid-cols-10 h-[400px] gap-4">
            <div class="col-span-6 bg-black flex justify-center items-center">元素 4</div>
            <div class="col-span-4 bg-black flex justify-center items-center">元素 5</div>
        </div>
  </div>
</div>

</template>

<style scoped>
.demonstration {
  color: var(--el-text-color-secondary);
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
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

