 <script setup lang="ts">
  const props = defineProps<{
    titre: string
    places: number
    disponibles: number
    date: string
    horaires: string
    description: string
    orientation: 'horizontal' | 'vertical'
  }>()

  const isHorizontal = computed(() => props.orientation === 'horizontal')
  </script>

  <template>
    <div class="flex flex-col max-w-9/10 gap-2 my-2" :class="{ 'items-start': isHorizontal , 'items-center': !isHorizontal}">
      <div v-if="isHorizontal" class="flex flex-row items-center gap-4">
        <p class="text-xl font-base">{{ titre }}</p>
        <span>-</span>
        <p class="text-sm font-light">{{ places - disponibles }}/{{ places }} places disponibles</p>
      </div>
      <div v-else class="flex flex-col justify-center items-center gap-1">
        <p class="text-xl font-base">{{ titre }}</p>
        <p class="text-sm font-light">{{ places - disponibles }}/{{ places }} places disponibles</p>
      </div>
      <p class="text-sm font-light w-90" :class="{ 'w-90': isHorizontal, 'w-60 text-center': !isHorizontal }">{{ description }}</p>
      <p class="text-sm font-bold">Le {{ date }} de {{ horaires }}</p>
    </div>
  </template>
