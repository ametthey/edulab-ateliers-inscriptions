<script setup lang="ts">
defineProps<{
  items: string[]
  modelValue: string[]
  orientation?: 'horizontal' | 'vertical'
}>()

defineEmits<{
  'update:modelValue': [value: string[]]
}>()
</script>

<template>
  <div class="my-4">
    <UCheckboxGroup
      :orientation="orientation || 'horizontal'"
      :value="modelValue"
      variant="list"
      :model-value="modelValue"
      :items="items"
      :ui="{
        fieldset: 'flex-wrap w-8/10'
      }"
      @update:model-value="$emit('update:modelValue', $event)"
    />
  </div>
</template>
