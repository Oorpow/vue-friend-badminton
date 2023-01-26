<template>
  <ElSkeleton :style="styleConfig" v-for="i in nums" :key="i" animated>
    <template #template>
      <el-skeleton-item variant="image" style="width: 100%; height: 240px" />
      <div style="padding: 14px">
        <el-skeleton-item variant="p" style="width: 50%" />
        <div
          style="
            display: flex;
            align-items: center;
            justify-items: space-between;
          "
        >
          <el-skeleton-item variant="text" style="margin-right: 16px" />
          <el-skeleton-item variant="text" style="width: 30%" />
        </div>
      </div>
    </template>
  </ElSkeleton>
</template>

<script setup lang="ts">
type Props = {
  nums: number
  styleConfig: object
}

const props = withDefaults(defineProps<Props>(), {
  nums: 3,
  styleConfig: () => ({}),
})
</script>

<style scoped></style>
