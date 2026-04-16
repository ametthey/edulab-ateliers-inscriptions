<script setup lang="ts">
defineProps<{
  label: string
  name: string
  rows?: number | null
  placeholder?: string
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
    >
      <UTextarea
        :value="modelValue"
         class="w-96"
        :rows="rows || 2"
        :placeholder="placeholder"
        @update:model-value="$emit('update:modelValue', $event)"
      />
    </UFormField>
  </div>
</template>
