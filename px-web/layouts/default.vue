<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <NavBarComponent />
      </el-header>
      <el-main>
        <slot />
      </el-main>
      <el-footer>
        <FooterComponent />
      </el-footer>
    </el-container>
  </div>
</template>

<script lang="ts" setup>

</script>
