<template>
  <div>
    <el-table :data="tableData" class="w-full">
      <el-table-column prop="class" label="Lớp" width="80" />
      <el-table-column prop="student" label="Name" width="120" />
      <el-table-column
        prop="debt"
        label="Số tiền học phí dư nợ đầu kỳ"
        width="200"
      />
      <el-table-column prop="subject" label="Môn" width="250" />
      <el-table-column prop="creditNumber" label="Số tín" width="80" />
      <el-table-column prop="clear" label="Miễn môn" width="100" />
      <el-table-column prop="note" label="Ghi chú" />
    </el-table>
    <div style="margin-top: 10px">
      <div>
        <span>Tổng số tín chỉ cần phải học trong kỳ: {{ tongSoTinChi }}</span>
      </div>
      <div>
        <span>Đơn giá học phí trong kỳ: {{ donGia }} VNĐ</span>
      </div>
      <div>
        <span>Tổng phải thu học phí môn trong kỳ: {{ total }} VNĐ</span>
      </div>
      <div>
        <span>Tổng cộng tiền phải thu học phí trong kỳ: {{ result }} VNĐ</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import { tableData } from "./data";

const donGia = ref<number>(448000);
const duNoDauKhi = 896000;
const tongSoTinChi = tableData.reduce(
  (accumulator, currentValue) => accumulator + currentValue.creditNumber,
  0
);

const total = computed(() => donGia.value * tongSoTinChi);
const result = computed(() => total.value + duNoDauKhi);
</script>
