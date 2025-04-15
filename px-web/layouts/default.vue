<template>
  <header class="bg-black text-white w-full">
    <div class="container flex items-center justify-between">
      <div>
        <!-- SVG Logo -->
        <a href="#" class="flex items-center space-x-2">
          <img src="/logo.svg" alt="Logo" class="w-8 h-8">
          <span class="text-xl font-bold text-white">My Brand</span>
        </a>
      </div>
      <div>
        <nav class="hidden md:flex items-center space-x-8">
          <NuxtLink to="/" class="hover:text-gray-300 transition-colors">HOME</NuxtLink>
          <NuxtLink to="/works" class="hover:text-gray-300 transition-colors">WORKS</NuxtLink>
          <NuxtLink to="/about" class="hover:text-gray-300 transition-colors">ABOUT</NuxtLink>
          <NuxtLink to="/news" class="hover:text-gray-300 transition-colors">NEWS</NuxtLink>
          <NuxtLink to="/service" class="hover:text-gray-300 transition-colors">SERVICE</NuxtLink>
          <NuxtLink to="/contact" class="hover:text-gray-300 transition-colors">CONTACT</NuxtLink>
        </nav>
      </div>
    </div>
  </header>
  <!-- 页面内容插入位置 -->
  <slot />
</template>

<script setup>
import { ref } from 'vue';

const mobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};
</script>

<style scoped>
/* 可以添加额外的自定义样式，如果Tailwind不足以满足需求 */
</style>
