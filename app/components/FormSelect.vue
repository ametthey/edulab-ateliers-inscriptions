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
        >
        <USelect
            :items="items"
            @update:model-value="$emit('update:modelValue', $event)"
            :class="width || 'w-90'"
            />
    </UFormField>
  </div>
</template>
