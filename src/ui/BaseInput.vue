<script setup lang="ts">
interface BaseInputProps {
  type?: 'text' | 'password' | 'email' | 'password_confirmation'
}

defineProps<{ msg: string }>()
</script>

<template>
  <input type="text">
</template>

<style scoped>
</style>
