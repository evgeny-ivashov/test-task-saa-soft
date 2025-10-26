<script setup lang="ts">
import {computed} from 'vue'

interface Props {
  modelValue: 'Локальная' | 'LDAP'
  label?: string
}

const props = defineProps<Props>()
const emit = defineEmits<{
  (e: 'update:modelValue', value: 'Локальная' | 'LDAP'): void
}>()

const model = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})
</script>

<template>
  <label class="baseSelect">
    <select v-model="model">
      <option value="Локальная">Локальная</option>
      <option value="LDAP">LDAP</option>
    </select>
  </label>
</template>

<style scoped>

</style>