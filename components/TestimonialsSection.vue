<template>
  <section class="py-20 md:py-28 bg-white">
    <div class="container-xl">
      <div class="text-center mb-14">
        <span class="section-tag">Mijozlar fikri</span>
        <h2 class="section-heading mb-4">Haydovchilar Nima Deydi?</h2>
        <p class="section-sub max-w-xl mx-auto">
          Minglab haydovchilar yevroprotokol xizmatidan mamnun foydalanmoqda.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="review in testimonials"
          :key="review.name"
          class="card flex flex-col gap-4"
        >
          <!-- Stars -->
          <div class="flex gap-1">
            <svg v-for="n in 5" :key="n" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
          </div>

          <!-- Quote -->
          <blockquote class="text-gray-700 text-sm leading-relaxed flex-1 italic">
            "{{ review.quote }}"
          </blockquote>

          <!-- Author -->
          <div class="flex items-center gap-3 pt-2 border-t border-gray-100">
            <div
              class="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
              :class="review.avatarBg"
            >
              {{ review.initials }}
            </div>
            <div>
              <p class="text-sm font-bold text-gray-900">{{ review.name }}</p>
              <p class="text-xs text-gray-400">{{ review.location }} · {{ review.date }}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const testimonials = [
  {
    quote:
      "Avval politsiyani kutib 3 soatimni yo'qotardim. Endi 15 daqiqada hamma narsa tayyor. Bu xizmat hayotimni osonlashtirdi!",
    name: 'Jasur Toshmatov',
    location: 'Toshkent',
    date: 'Mart 2025',
    initials: 'JT',
    avatarBg: 'bg-blue-600',
  },
  {
    quote:
      "Qo'rqib ketgandim, lekin xizmat hamma narsani bosqichma-bosqich tushuntirdi. Sug'urta kompaniyam hujjatni muammosiz qabul qildi.",
    name: 'Malika Rahimova',
    location: 'Samarqand',
    date: 'Yanvar 2025',
    initials: 'MR',
    avatarBg: 'bg-purple-600',
  },
  {
    quote:
      "Kechqurun soat 23:00 da kichik avariya bo'ldi. Politsiyani kutmasdan telefonim orqali hujjatni to'ldirdim. Ajoyib!",
    name: 'Bobur Nazarov',
    location: "Farg'ona",
    date: 'Fevral 2025',
    initials: 'BN',
    avatarBg: 'bg-green-600',
  },
]

</script>
