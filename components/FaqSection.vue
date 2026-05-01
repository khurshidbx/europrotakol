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
  <section id="faq" class="py-20 md:py-28 bg-gray-50 scroll-mt-20">
    <div class="container-xl">
      <div class="text-center mb-14">
        <span class="section-tag">FAQ</span>
        <h2 class="section-heading mb-4">Ko'p So'raladigan Savollar</h2>
        <p class="section-sub max-w-xl mx-auto">
          Yevroprotokol haqida eng ko'p beriladigan savollarga aniq javoblar.
        </p>
      </div>

      <div class="max-w-3xl mx-auto space-y-3">
        <div
          v-for="(faq, i) in faqs"
          :key="faq.question"
          class="bg-white rounded-2xl border overflow-hidden transition-all duration-200"
          :class="openIndex === i ? 'border-primary-200 shadow-sm' : 'border-gray-100'"
        >
          <button
            class="w-full text-left px-6 py-5 flex items-start justify-between gap-4 cursor-pointer group"
            @click="toggle(i)"
            :aria-expanded="openIndex === i"
          >
            <span
              class="font-semibold text-gray-900 text-base leading-snug group-hover:text-primary-700 transition-colors"
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

          <Transition
            enter-active-class="transition-all duration-300 ease-out overflow-hidden"
            leave-active-class="transition-all duration-200 ease-in overflow-hidden"
            @enter="(el) => { (el as HTMLElement).style.maxHeight = el.scrollHeight + 'px' }"
            @leave="(el) => { (el as HTMLElement).style.maxHeight = '0px' }"
            @after-leave="(el) => { (el as HTMLElement).style.maxHeight = '' }"
            @before-enter="(el) => { (el as HTMLElement).style.maxHeight = '0px' }"
          >
            <div v-if="openIndex === i">
              <div class="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                {{ faq.answer }}
              </div>
            </div>
          </Transition>
        </div>
      </div>

    </div>
  </section>
</template>
