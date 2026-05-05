<template>
  <section id="conditions" class="py-10 md:py-14 bg-gray-50 scroll-mt-20">
    <div class="container-xl">

      <div v-animate class="text-center mb-8">
        <span class="section-tag">{{ tr.conditions.tag }}</span>
        <h2 class="section-heading mb-4">{{ tr.conditions.heading }}</h2>
      </div>

      <!-- Main card -->
      <div class="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <div class="grid grid-cols-1 lg:grid-cols-2">

          <!-- Left: checklist -->
          <div v-animate="{ type: 'left' }" class="p-5 sm:p-8 md:p-10">
            <div class="flex items-center gap-3 mb-5">
              <div class="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-7 h-7 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
              </div>
              <h3 class="text-base sm:text-xl font-bold text-gray-900">{{ tr.conditions.cardTitle }}</h3>
            </div>

            <ul class="space-y-4">
              <li v-for="condition in tr.conditions.items" :key="condition" class="flex items-start gap-3">
                <span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary-700 flex items-center justify-center mt-0.5">
                  <svg class="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                </span>
                <span class="text-gray-700 text-sm leading-relaxed">{{ condition }}</span>
              </li>
            </ul>
          </div>

          <!-- Right: image -->
          <div v-animate="{ type: 'right', delay: 100 }" class="relative min-h-52 sm:min-h-64 lg:min-h-0 bg-primary-50">
            <img
              src="/twocars.png"
              alt="Yevroprotokol shartlari"
              class="w-full h-full object-cover object-center"
              loading="lazy"
            />
          </div>

        </div>
      </div>


    </div>
  </section>
</template>

<script setup lang="ts">
const { tr } = useLang()
</script>
