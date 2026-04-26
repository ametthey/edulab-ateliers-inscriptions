<script setup lang="ts">
defineProps<{
  label: string
  name: string
  rows?: number | null
  placeholder?: string
  width?: number | null
  modelValue: string | number | null
}>()
defineEmits<{
  'update:modelValue': [value: string | number | null]
}>()
</script>

<template>
  <div class="my-2">
    <UFormField
      :label="label"
      :name="name"
        :ui="{label: 'text-lg uppercase font-medium'}"
    >
      <UTextarea
        :value="modelValue"
         :class="width || 'w-96'"
        :rows="rows || 2"
        :placeholder="placeholder"
        @update:model-value="$emit('update:modelValue', $event)"
      />
    </UFormField>
  </div>
</template>
