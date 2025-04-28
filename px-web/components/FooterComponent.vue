<template>
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
<script setup>

</script>