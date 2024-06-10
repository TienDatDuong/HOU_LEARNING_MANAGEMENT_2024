<template>
  <el-table :data="tableData" class="w-full">
    <el-table-column prop="class" label="Lớp" width="80" />
    <el-table-column prop="sbd" label="Số báo danh" width="120" />
    <el-table-column prop="maSV" label="Mã sinh viên" width="120" />
    <el-table-column prop="student" label="Name" width="120" />
    <el-table-column prop="subject" label="Môn" width="250" />
    <el-table-column prop="day" label="Ngày thi" width="100" />
    <el-table-column prop="hour" label="Giờ thi" width="100" />
    <el-table-column prop="room" label="Phòng thi" width="100" />
    <el-table-column prop="note" label="Ghi chú" />
  </el-table>
</template>

<script lang="ts" setup>
import { tableData } from "./data";
</script>
