<script setup lang="ts">
const faqs = useFaqData()

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
}

useSeoMeta({
  title: "Ko'p So'raladigan Savollar — Yevroprotokol",
  description:
    "Yevroprotokol haqida eng ko'p beriladigan savollarga to'liq javoblar: qanday qo'llaniladi, qonuniy kuchi, to'ldirish tartibi va boshqalar.",
  ogTitle: "Ko'p So'raladigan Savollar — Yevroprotokol",
  ogDescription: 'Yevroprotokol xizmati haqida barcha savollaringizga javoblar.',
  ogUrl: 'https://yevroprotokol.uz/faq',
  robots: 'index, follow',
})

useHead({
  link: [{ rel: 'canonical', href: 'https://yevroprotokol.uz/faq' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(faqJsonLd) }],
})
</script>

<template>
  <div class="pt-20">
    <!-- Page header -->
    <div class="bg-gradient-to-br from-primary-900 to-primary-700 py-16 md:py-20">
      <div class="container-xl text-center">
        <nav aria-label="breadcrumb" class="mb-6">
          <ol class="flex justify-center items-center gap-2 text-sm">
            <li>
              <NuxtLink to="/" class="text-blue-200 hover:text-white transition-colors">Bosh sahifa</NuxtLink>
            </li>
            <li class="text-blue-400">›</li>
            <li class="text-white font-medium">FAQ</li>
          </ol>
        </nav>
        <h1 class="text-3xl md:text-5xl font-extrabold text-white mb-4">
          Ko'p So'raladigan Savollar
        </h1>
        <p class="text-xl text-blue-100 max-w-2xl mx-auto">
          Yevroprotokol xizmati haqida barcha savollaringizga aniq va to'liq javoblar.
        </p>
      </div>
    </div>

    <!-- Full FAQ list -->
    <FaqSection />

    <!-- CTA -->
    <section class="py-16 bg-white">
      <div class="container-xl text-center">
        <p class="text-gray-600 mb-6 text-lg">Savollaringiz qoldimi?</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:+998712000000" class="btn-primary">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            Qo'ng'iroq Qilish
          </a>
          <a href="mailto:info@yevroprotokol.uz" class="btn-primary !bg-gray-100 !text-gray-800 !shadow-none hover:!bg-gray-200">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Xat Yuborish
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
