<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { PUBLIC_LAYOUT } from "./contants";
const router = useRoute();
const layouts = computed(() => PUBLIC_LAYOUT + "-layout");
</script>

<template>
  <component :is="layouts" />
</template>
