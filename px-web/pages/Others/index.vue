<template>
    <div class="container text-center text-white bg-[1A1A1A] h-[850px]">
        <h1>
        项目名称
        </h1>
        <h2>
        品牌logo
        </h2>
        <p>
        xxxxxxxxxxxxxxxxxxx
        </p>
    </div>


  <div class="container mx-auto p-4">
    <div class="grid grid-cols-4 gap-4 text-white">
      <el-card style="max-width: 480px; color:white; background:black">
        <div class="flex flex-col items-center justify-center bg-black rounded-md">
            <img 
              src="/fwzq.svg"
            />
            <span class="text-[#4D4D4D]">服务周期</span>
            <span class="text-white">2</span>
            <span class="text-[#4D4D4D]">weeks</span>
        </div>
      </el-card>
     <el-card style="max-width: 480px;color:white; background:black">
        <div class="flex flex-col items-center justify-center bg-black rounded-md">
            <img 
              src="/fwnr.svg"
            />
            <span class="text-[#4D4D4D]">服务内容</span>
            <div class="">
              xxxxxxxxxxx
            </div>
        </div>      
      </el-card>
      <el-card style="max-width: 480px;color:white; background:black">
        <div class="flex flex-col items-center justify-center bg-black rounded-md">
            <img 
              src="/xmbj.svg"
            />
            <span class="text-[#4D4D4D]">项目背景</span>
            <span>
              xxxxxxxxxxxxxxxxx
            </span>
        </div>      
      </el-card>
      <el-card style="max-width: 480px;color:white; background:black">
        <div class="flex flex-col items-center justify-center bg-black rounded-md">
            <img 
              src="/jjfa.svg"
            />
            <span class="text-[#4D4D4D]">解决方案</span>
            <span>
              xxxxxxxxxxxxxxxxxx
            </span>
        </div>      
      </el-card>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>


<style>
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
} 

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
