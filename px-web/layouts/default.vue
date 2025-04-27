<template>
  <div>
      <el-menu
        :default-active="activeIndex"
        class="bg-gray-200"
        mode="horizontal"
        :ellipsis="false"
        @select="handleSelect"
      >
        <el-menu-item index="0" class="p-4">

            <img
                style="width: 100px"
                src="/logo.svg"
                alt="Element logo"
              />
              <img
                style="width: 100px"
                src="/company.svg"
                alt="Element logo"
              />
        </el-menu-item>
        <el-menu-item index="1">
          <NuxtLink to="/" class="text-sm font-bold lg:text-base hover:text-gray-300 transition-colors">HOME</NuxtLink>
        </el-menu-item>
        <el-menu-item index="2">
              <NuxtLink to="/works" class="text-sm font-bold lg:text-base hover:text-gray-300 transition-colors">WORKS</NuxtLink>
        </el-menu-item>
        <el-menu-item index="3">
              <NuxtLink to="/about" class="text-sm font-bold lg:text-base hover:text-gray-300 transition-colors">ABOUT</NuxtLink>
        </el-menu-item>
        <el-menu-item index="4">
              <NuxtLink to="/news" class="text-sm font-bold lg:text-base hover:text-gray-300 transition-colors">NEWS</NuxtLink>
        </el-menu-item>
        <el-menu-item index="5">
              <NuxtLink to="/service" class="text-sm font-bold lg:text-base hover:text-gray-300 transition-colors">SERVICE</NuxtLink>
        </el-menu-item>
        <el-menu-item index="6">
              <NuxtLink to="/contact" class="text-sm font-bold lg:text-base hover:text-gray-300 transition-colors">CONTACT</NuxtLink>
        </el-menu-item>

        <el-menu-item index="7">
          <el-dropdown>
            <img src="/bar.svg" alt="Logo" class="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
            <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>Action 1</el-dropdown-item>
              <el-dropdown-item>Action 2</el-dropdown-item>
              <el-dropdown-item>Action 3</el-dropdown-item>
              <el-dropdown-item disabled>Action 4</el-dropdown-item>
              <el-dropdown-item divided>Action 5</el-dropdown-item>
            </el-dropdown-menu>
            </template>
          </el-dropdown>
        </el-menu-item>
      </el-menu>
  </div>

  <slot />
  
  <div class="pl-[100px]  p-8 pl-6">
    <div class="flex">
      <img
                style="width: 100px"
                src="/logo.svg"
                alt="Element logo"
                class="pr-4"
              />
      <img
                style="width: 100px"
                src="/company.svg"
                alt="Element logo"
              />
    </div>
    <div class="flex justify-between text-white">
        <div>
            <h3 class="font-bold">列表 1</h3>
            <hr class="my-2">
            <ul class="list-disc list-inside">
                <li>列表项 1 - 1</li>
                <li>列表项 1 - 2</li>
                <li>列表项 1 - 3</li>
            </ul>
        </div>
        <div>
            <h3 class="font-bold">列表 2</h3>
            <hr class="my-2">
            <ul class="list-disc list-inside">
                <li>列表项 2 - 1</li>
                <li>列表项 2 - 2</li>
                <li>列表项 2 - 3</li>
            </ul>
        </div>
        <div>
            <h3 class="font-bold">列表 3</h3>
            <hr class="my-2">
            <ul class="list-disc list-inside">
                <li>列表项 3 - 1</li>
                <li>列表项 3 - 2</li>
                <li>列表项 3 - 3</li>
            </ul>
        </div>
    </div>

  <div>
    <el-divider />
  </div>

  </div>

</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style scoped>
        /* 使 el-menu 成为弹性容器 */
  .el-menu--horizontal {
    display: flex;
    justify-content: space-between;
    --el-menu-bg-color: #1A1A1A;
    --el-menu-text-color: white;

  }
  .example-showcase .el-dropdown-link {
  cursor: pointer;
  display: flex;
  align-items: center;
}
</style>