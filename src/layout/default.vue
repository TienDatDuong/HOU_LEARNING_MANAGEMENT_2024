<template>
  <el-row>
    <div style="display: flex">
      <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="menu"
        style="height: 100vh; width: 300px"
        default-active="2"
        text-color="#fff"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><Setting /></el-icon>
            <span>Dương Tiến Đạt</span>
          </template>
          <el-menu-item-group title="Group One">
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">
              <RouterLink to="/home">Go to About</RouterLink>
            </el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group Two">
            <el-menu-item index="1-3">
              <RouterLink to="/about">Go to Home</RouterLink>
            </el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="1-4">
            <template #title>item four</template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="2">
          <el-icon><icon-menu /></el-icon>
          <RouterLink to="/home">
            <span style="color: #fff"> Học kỳ 3 </span>
          </RouterLink>
        </el-menu-item>
        <el-menu-item index="3">
          <el-icon><document /></el-icon>
          <RouterLink to="/lich_thi_1_06_2024">
            <span style="color: #fff"> Lịch thi 1/6/2024</span>
          </RouterLink>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon><document /></el-icon>
          <RouterLink to="/about">
            <span style="color: #fff">test tabs</span>
          </RouterLink>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon><setting /></el-icon>
          <span>Danh sách học phần</span>
        </el-menu-item>
      </el-menu>
      <el-col :span="24" class="content"> <router-view /> </el-col>
    </div>
  </el-row>
</template>

<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>
<style scoped>
.content {
  margin: 20px;
}
</style>
