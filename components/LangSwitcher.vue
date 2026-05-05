<script setup lang="ts">
import type { Lang } from '~/composables/useLang'
const { lang, setLang } = useLang()
</script>

<template>
  <div class="flex items-center gap-0.5 bg-gray-100 rounded-lg p-0.5">
    <button
      v-for="l in (['uz', 'ru'] as Lang[])"
      :key="l"
      @click="setLang(l)"
      :class="[
        'px-3 py-1.5 rounded-md text-xs font-bold uppercase tracking-wide transition-all duration-200',
        lang === l
          ? 'bg-white text-primary-700 shadow-sm'
          : 'text-gray-500 hover:text-gray-700',
      ]"
    >
      {{ l }}
    </button>
  </div>
</template>
