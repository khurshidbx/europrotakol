<script setup lang="ts">
import type { FaqItem } from '~/composables/useFaqData'

const props = defineProps<{
  limit?: number
}>()

const allFaqs = useFaqData()
const faqs = computed(() => (props.limit ? allFaqs.slice(0, props.limit) : allFaqs))
const openIndex = ref<number | null>(0)

const toggle = (i: number) => {
  openIndex.value = openIndex.value === i ? null : i
}
</script>

<template>
  <section id="faq" class="py-10 md:py-14 bg-white scroll-mt-20">
    <div class="container-xl">
      <div class="text-center mb-8">
        <h2 class="section-heading mb-4">Ko'p So'raladigan Savollar</h2>
      </div>

      <div class="max-w-3xl mx-auto space-y-3">
        <div
          v-for="(faq, i) in faqs"
          :key="faq.question"
          class="bg-white rounded-2xl border overflow-hidden transition-all duration-200"
          :class="openIndex === i ? 'border-primary-200 shadow-sm' : 'border-gray-100'"
        >
          <button
            class="w-full text-left px-4 sm:px-6 py-4 flex items-start justify-between gap-3 cursor-pointer group"
            @click="toggle(i)"
            :aria-expanded="openIndex === i"
          >
            <span
              class="font-semibold text-gray-900 text-sm sm:text-base leading-snug group-hover:text-primary-700 transition-colors"
              :class="{ 'text-primary-700': openIndex === i }"
            >
              {{ faq.question }}
            </span>
            <span
              class="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300"
              :class="openIndex === i ? 'bg-primary-700 rotate-45' : 'bg-gray-100'"
            >
              <svg
                class="w-4 h-4 transition-colors"
                :class="openIndex === i ? 'text-white' : 'text-gray-600'"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 4v16m8-8H4" />
              </svg>
            </span>
          </button>

          <div
            class="overflow-hidden"
            :style="{
              maxHeight: openIndex === i ? '400px' : '0px',
              transition: 'max-height 0.3s ease',
            }"
          >
            <div class="px-4 sm:px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3">
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
