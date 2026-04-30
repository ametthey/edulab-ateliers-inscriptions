<script setup lang="ts">
defineProps<{
  label: string
  name: string
  type?: string
  placeholder?: string
  width?: string
  modelValue: string | number | null
}>()
defineEmits<{
  'update:modelValue': [value: string | number | null]
}>()
</script>

<template>
  <div class="mb-2">
    <UFormField
      :label="label"
      :name="name"
      :ui="{label: 'text-lg uppercase font-medium'}"
    >
      <UInput
        required
        :value="modelValue"
        :type="type || 'text'"
        :placeholder="placeholder"
        :class="width || ''"
        @update:model-value="$emit('update:modelValue', $event)"
      />
    </UFormField>
  </div>
</template>
