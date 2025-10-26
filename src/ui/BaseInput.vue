<script setup lang="ts">
import {computed} from "vue";

interface BaseInputProps {
  type?: 'text' | 'password'
  placeholder?: string
  modelValue: string
  name?: string
}

const props = withDefaults(defineProps<BaseInputProps>(), {
  type: 'text',
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const model = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
})
</script>

<template>
  <input
      :name="name || 'default'"
      :type="type"
      :placeholder="placeholder"
      v-model="model"
      @input="$emit('update:modelValue', model)"
  />
</template>

<style scoped>
input {
  padding: 10px;
  border-radius: 10px;
  background: aliceblue;
  border: 1px solid;
}
</style>
