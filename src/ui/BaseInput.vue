<script setup lang="ts">
import {computed} from "vue";

interface BaseInputProps {
  type?: 'text' | 'password'
  placeholder?: string
  modelValue?: string | { text: string }[] | null
  required?: boolean
  maxlength?: number
}

const props = withDefaults(defineProps<BaseInputProps>(), {
  type: 'text',
  modelValue: '',
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | { text: string }[] | null): void
}>()

const model = computed({
  get: () => {
    if (Array.isArray(props.modelValue)) {
      return props.modelValue.map((label) => label.text).join(";");
    }
    return props.modelValue ?? "";
  },
  set: (val) => {
    const arr = val.split(";")
        .map((space) => space.trim())
        .map(text => ({ text }));
    emit("update:modelValue", arr);
  },
})
</script>

<template>
  <input
      :required="required"
      :maxlength="maxlength"
      :type="type"
      :placeholder="placeholder"
      v-model="model"
  />
</template>

<style scoped>
input {
  padding: 10px;
  border-radius: 10px;
  background: aliceblue;
  border: 1px solid;

  &:invalid {
    border-color: #FF0000;
  }
}
</style>
