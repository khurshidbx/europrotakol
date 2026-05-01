<script setup lang="ts">
const faqs = useFaqData()

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Yevroprotokol',
  url: 'https://yevroprotokol.uz',
  logo: 'https://yevroprotokol.uz/logo.png',
  description:
    "O'zbekistondagi haydovchilar uchun avtohalokat hujjatini tezkor rasmiylashtirishga yordam beruvchi rasmiy onlayn xizmat.",
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'UZ',
    addressLocality: 'Toshkent',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+998-71-200-00-00',
    contactType: 'customer service',
    availableLanguage: ['uz', 'ru'],
  },
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Yevroprotokol',
  url: 'https://yevroprotokol.uz',
  inLanguage: 'uz',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://yevroprotokol.uz/search?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
}

useSeoMeta({
  title: "Yevroprotokol — Avtohalokatni Politsiyasiz 15 Daqiqada Rasmiylashtiiring",
  description:
    "Yevroprotokol xizmati yordamida yo'l-transport hodisasini politsiyasiz 15 daqiqada rasmiylashtiiring. Avtohalokat hujjati tez, qonuniy va bepul. Yevropa protokol xizmati O'zbekistonda.",
  ogTitle: "Yevroprotokol — Avtohalokatni Tez Rasmiylashtiiring",
  ogDescription:
    "Kichik yo'l-transport hodisalarida 15 daqiqada rasmiy hujjat tayyorlang. Bepul va qonuniy.",
  ogType: 'website',
  ogUrl: 'https://yevroprotokol.uz',
  ogImage: 'https://yevroprotokol.uz/og-image.jpg',
  ogLocale: 'uz_UZ',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Yevroprotokol — Avtohalokatni Tez Rasmiylashtiiring',
  twitterDescription:
    "Yo'l-transport hodisasini politsiyasiz 15 daqiqada rasmiylashtiiring.",
  robots: 'index, follow',
})

useHead({
  link: [{ rel: 'canonical', href: 'https://yevroprotokol.uz' }],
  meta: [
    {
      name: 'keywords',
      content:
        "yevroprotokol, yevropa protokol, yevropotokkol, avtohalokat hujjati, yo'l-transport hodisasi rasmiylashtirish, yevroprotokol o'zbekiston, avtohalokat, sug'urta, OSAGO",
    },
  ],
  script: [
    { type: 'application/ld+json', innerHTML: JSON.stringify(organizationJsonLd) },
    { type: 'application/ld+json', innerHTML: JSON.stringify(websiteJsonLd) },
    { type: 'application/ld+json', innerHTML: JSON.stringify(faqJsonLd) },
  ],
})
</script>

<template>
  <div>
    <HeroSection />
    <AboutSection />
    <HowItWorks />
    <!-- <UseCases /> -->
    <FaqSection />
    <TestimonialsSection />
    <CtaSection />
  </div>
</template>
