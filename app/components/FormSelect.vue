<script setup lang="ts">
defineProps<{
  label: string
  modelValue: string | number | null
  width?: string
  items: Array<{ label: string, value: string | number }>
}>()

defineEmits<{
  'update:modelValue': [value: string | number | null]
}>()
</script>

<template>
  <div class="my-2">
    <UFormField
        :label="label"
        :ui="{label: 'text-lg font-medium'}"
        >
        <USelect
            :items="items"
            :model-value="modelValue"
            :error-pattern="/^name\..+/"
            :class="width || ''"
            @update:model-value="$emit('update:modelValue', $event)"
            />
    </UFormField>
  </div>
</template>
