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
  '@type': 'LocalBusiness',
  name: 'Evroprotokol24',
  alternateName: ['Европротокол24', 'Yevroprotokol24'],
  url: 'https://www.evroprotokol24.uz',
  logo: 'https://www.evroprotokol24.uz/logo.png',
  image: 'https://www.evroprotokol24.uz/og-image.jpg',
  description:
    "Evroprotokol — kichik DTP hujjatini GAI chaqirmasdan online rasmiylashtiramiz. Toshkent va Toshkent viloyati bo'ylab xizmat. Европротокол в Узбекистане — оформление ДТП без ГИБДД онлайн.",
  telephone: '+998776410641',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'UZ',
    addressLocality: 'Toshkent',
    addressRegion: 'Toshkent',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 41.2995,
    longitude: 69.2401,
  },
  areaServed: [
    { '@type': 'City', name: 'Toshkent' },
    { '@type': 'AdministrativeArea', name: 'Toshkent viloyati' },
  ],
  openingHours: 'Mo-Su 00:00-24:00',
  priceRange: 'Bepul / Бесплатно',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+998776410641',
    contactType: 'customer service',
    availableLanguage: ['uz', 'ru'],
    contactOption: 'TollFree',
  },
  sameAs: [
    'https://t.me/evroprotokol24',
    'https://instagram.com/evroprotokol24',
  ],
  serviceType: 'Evroprotokol — DTP rasmiylastirish / Оформление европротокола при ДТП',
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Evroprotokol24',
  url: 'https://www.evroprotokol24.uz',
  inLanguage: ['uz', 'ru'],
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://www.evroprotokol24.uz/search?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
}

useSeoMeta({
  title: 'Европротокол Ташкент | Evroprotokol 24 — ДТП без ГАИ за 15 минут',
  description:
    "Европротокол в Узбекистане — оформление ДТП без вызова ГАИ. Европротокол Ташкент, европротокол 24. Evroprotokol Toshkent 24/7. +998 77 641 06 41",
  ogTitle: 'Европротокол Ташкент | Evroprotokol 24 — ДТП без ГАИ',
  ogDescription:
    "Европротокол в Узбекистане — быстрое оформление ДТП без ГАИ. Европротокол 24, Ташкент. Evroprotokol Toshkent 24/7.",
  ogType: 'website',
  ogUrl: 'https://www.evroprotokol24.uz',
  ogImage: 'https://www.evroprotokol24.uz/og-image.jpg',
  ogLocale: 'ru_RU',
  ogLocaleAlternate: ['uz_UZ'],
  twitterCard: 'summary_large_image',
  twitterTitle: 'Европротокол Ташкент | Evroprotokol 24 — ДТП без ГАИ',
  twitterDescription:
    "Европротокол в Узбекистане — оформление ДТП без ГАИ. Европротокол 24, Ташкент 24/7.",
  robots: 'index, follow',
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://www.evroprotokol24.uz' },
    { rel: 'alternate', hreflang: 'uz', href: 'https://www.evroprotokol24.uz' },
    { rel: 'alternate', hreflang: 'ru', href: 'https://www.evroprotokol24.uz' },
    { rel: 'alternate', hreflang: 'x-default', href: 'https://www.evroprotokol24.uz' },
  ],
  meta: [
    {
      name: 'keywords',
      content: [
        // UZ asosiy
        'evroprotokol', 'evroprotokol nima', 'evroprotokol qanday toldiriladi',
        'evroprotokol blanki', 'evroprotokol namunasi', 'evroprotokol shakli',
        'evroprotokol qoidalari', 'evroprotokol online', 'evroprotokol yuklab olish',
        // UZ vaziyatga oid
        'DTP evroprotokol', 'kichik DTP rasmiylastirish', 'GAIsiz DTP rasmiylastirish',
        'GAI chaqirmasdan DTP', 'DTP hujjati online', "yo'l-transport hodisasi rasmiylastirish",
        // UZ misspellings
        'yevroprotokol', 'evrorotokol', 'evprotokol', 'evroprotokoll',
        // RU asosiy
        'европротокол', 'европротокол Узбекистан', 'европротокол бланк',
        'европротокол образец заполнения', 'как оформить европротокол',
        'европротокол онлайн', 'европротокол без ГИБДД', 'европротокол при ДТП',
        'европротокол скачать', 'европротокол правила',
        // RU vaziyatga oid
        'оформление ДТП без полиции', 'ДТП без вызова полиции',
        'извещение о ДТП', 'схема ДТП европротокол',
        'европротокол страховая', 'ОСАГО европротокол',
        // RU misspellings
        'европпротокол', 'европротакол', 'европротокл', 'еврапротокол',
        // Long-tail
        'evroprotokol toldirisli tartibi', 'европротокол лимит выплат',
        'европротокол если один виновник', 'европротокол фото с места ДТП',
      ].join(', '),
    },
    { name: 'geo.region', content: 'UZ-TK' },
    { name: 'geo.placename', content: 'Toshkent, Uzbekistan' },
    { name: 'geo.position', content: '41.2995;69.2401' },
    { name: 'ICBM', content: '41.2995, 69.2401' },
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
    <ServicesSection />
    <ConditionsSection />
    <FaqSection />
    <CtaSection />
  </div>
</template>
