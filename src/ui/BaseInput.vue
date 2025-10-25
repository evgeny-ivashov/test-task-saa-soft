<script setup lang="ts">
import {computed} from "vue";

interface BaseInputProps {
  type?: string;
  placeholder?: string;
  modelValue: string;
}

const props = defineProps<BaseInputProps>()
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const model = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
})
</script>

<template>
  <label class="baseInput">
    <input
        :type="type"
        :placeholder="placeholder"
        v-model="model"
        class="base-input__field"
        @input="$emit('update:modelValue', model)"
    />
  </label>
</template>

<style scoped>
</style>
