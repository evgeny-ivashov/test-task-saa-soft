<script setup lang="ts">
interface AccountSuccessProps {
  isVisible: boolean
}

defineProps<AccountSuccessProps>();
</script>

<template>
<div class="success" :class="{show: isVisible}">
  Учетная запись сохранена &#128276;
</div>
</template>

<style scoped>
.success {
  position: fixed;
  top: 10px;
  left: 50%;
  transform: translateX(-50%) translateY(-40px);
  width: 250px;
  height: 30px;
  background: aquamarine;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  transition: transform .3s;

  &.show {
    transform: translateX(-50%) translateY(0);
  }
}
</style>