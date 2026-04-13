<script setup lang="ts">
defineProps<{
  label: string
  name: string
  placeholder?: string
  modelValue: string | number | null
}>()
defineEmits<{
  'update:modelValue': [value: string | number | null]
}>()
</script>

<template>
  <div class="my-4">
    <UFormField
      :label="label"
      :name="name"
    >
      <UTextarea
        :value="modelValue"
        class="w-96"
        :rows="6"
        :placeholder="placeholder"
        @update:model-value="$emit('update:modelValue', $event)"
      />
    </UFormField>
  </div>
</template>
