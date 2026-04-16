<script setup lang="ts">
defineProps<{
  label: string
  name: string
  type?: string
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
      <UInput
        required
        :value="modelValue"
        :type="type || 'text'"
        :placeholder="placeholder"
        @update:model-value="$emit('update:modelValue', $event)"
      />
    </UFormField>
  </div>
</template>
