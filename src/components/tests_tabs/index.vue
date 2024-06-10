<script lang="ts" setup>
import { ref, defineAsyncComponent } from "vue";
import type { TabsPaneContext } from "element-plus";
import User from "./components/uses.vue";
const Config = defineAsyncComponent(() => import("./components/config.vue"));

const activeName = ref("first");

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);
};
</script>
<template>
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="User" name="first"><User /> </el-tab-pane>
    <el-tab-pane label="Config" name="second"><Config /></el-tab-pane>
  </el-tabs>
</template>
