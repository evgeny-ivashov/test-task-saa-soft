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
  <select v-model="model" name="entryType">
    <option value="Локальная">Локальная</option>
    <option value="LDAP">LDAP</option>
  </select>
</template>

<style scoped>
select {
  padding: 10px;
  border-radius: 10px;
  background: aliceblue;
  border: 1px solid;
}
</style>