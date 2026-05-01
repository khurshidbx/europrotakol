<template>
  <footer id="contact" class="bg-gray-950 text-gray-400 scroll-mt-20">
    <!-- Main footer -->
    <div class="container-xl py-14 md:py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <!-- Brand column -->
        <div class="lg:col-span-1">
          <div class="flex items-center gap-2.5 mb-4">
            <div class="w-9 h-9 bg-primary-700 rounded-xl flex items-center justify-center">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <span class="text-white font-bold text-lg">Yevroprotokol</span>
          </div>
          <p class="text-sm leading-relaxed mb-5">
            O'zbekistondagi haydovchilar uchun avtohalokat hujjatini tezkor rasmiylashtirishga
            yordam beruvchi rasmiy onlayn xizmat.
          </p>
          <div class="flex gap-3">
            <a
              v-for="social in socials"
              :key="social.label"
              :href="social.href"
              :aria-label="social.label"
              class="w-9 h-9 bg-gray-800 hover:bg-primary-700 rounded-lg flex items-center justify-center transition-colors"
            >
              <svg class="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24" v-html="social.iconPath" />
            </a>
          </div>
        </div>

        <!-- Navigation -->
        <div>
          <h3 class="text-white font-semibold text-sm uppercase tracking-wider mb-4">Navigatsiya</h3>
          <ul class="space-y-2.5">
            <li v-for="link in navLinks" :key="link.href">
              <NuxtLink
                :to="link.href"
                class="text-sm hover:text-white transition-colors hover:translate-x-0.5 inline-block"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Resources -->
        <div>
          <h3 class="text-white font-semibold text-sm uppercase tracking-wider mb-4">Foydali</h3>
          <ul class="space-y-2.5">
            <li v-for="link in resourceLinks" :key="link.href">
              <NuxtLink
                :to="link.href"
                class="text-sm hover:text-white transition-colors"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="text-white font-semibold text-sm uppercase tracking-wider mb-4">Aloqa</h3>
          <ul class="space-y-3">
            <li class="flex items-start gap-2.5">
              <svg class="w-4 h-4 text-primary-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <a href="tel:+998712000000" class="text-sm hover:text-white transition-colors">+998 71 200-00-00</a>
            </li>
            <li class="flex items-start gap-2.5">
              <svg class="w-4 h-4 text-primary-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <a href="mailto:info@yevroprotokol.uz" class="text-sm hover:text-white transition-colors">info@yevroprotokol.uz</a>
            </li>
            <li class="flex items-start gap-2.5">
              <svg class="w-4 h-4 text-primary-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span class="text-sm">Toshkent, O'zbekiston</span>
            </li>
          </ul>

          <div class="mt-6 p-3 bg-green-900/40 rounded-xl border border-green-800/50">
            <p class="text-green-400 text-xs font-semibold mb-0.5">Ish vaqti</p>
            <p class="text-green-300 text-xs">Xizmat 24/7 ishlaydi</p>
          </div>
        </div>
      </div>
    </div>

  </footer>
</template>

<script setup lang="ts">
const navLinks = [
  { href: '#hero', label: 'Asosiy' },
  { href: '#services', label: 'Xizmatlar' },
  { href: '#about', label: 'Biz haqimizda' },
  { href: '#use-cases', label: "Qo'llanish holatlari" },
  { href: '#faq', label: 'Savollar' },
  { href: '#contact', label: 'Kontakt' },
]

const resourceLinks = [
  { href: '#faq', label: "Ko'p so'raladigan savollar" },
  { href: '/blog/yevroprotokol-nima', label: 'Yevroprotokol nima?' },
  { href: '/blog/qachon-qollash', label: "Qachon qo'llash mumkin?" },
  { href: '/blog/xatolar', label: "Eng ko'p uchraydigan xatolar" },
]

const socials = [
  {
    label: 'Telegram',
    href: 'https://t.me/evroprotakol24',
    iconPath: `<path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-2.04 9.61c-.15.678-.543.843-1.1.524l-3.037-2.238-1.466 1.41c-.162.162-.298.298-.61.298l.217-3.088 5.617-5.073c.244-.217-.053-.337-.38-.12L7.11 13.985l-2.97-.927c-.645-.202-.66-.645.135-.955l11.586-4.47c.537-.195 1.008.12.7.615z"/>`,
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/evroprotakol24',
    iconPath: `<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>`,
  },
]
</script>
