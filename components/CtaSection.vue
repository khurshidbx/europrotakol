<template>
  <section id="cta" class="py-12 md:py-16 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 relative overflow-hidden">
    <!-- Background shapes -->
    <div class="absolute inset-0 opacity-10" aria-hidden="true">
      <div class="absolute top-0 right-0 w-80 h-80 bg-orange-400 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div class="absolute bottom-0 left-0 w-60 h-60 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
    </div>

    <div class="container-xl relative z-10 text-center">
      <div class="max-w-2xl mx-auto">
        <!-- <span class="inline-block bg-orange-500/20 text-orange-300 font-semibold text-sm uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
          Hoziroq Boshlang
        </span> -->

        <h2 class="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
         Yordam kerakmi ?<br />
        </h2>

        <p class="text-xl text-blue-100 mb-10 leading-relaxed">
          Bizga qo'ng'iroq qiling yoki Telegram orqali yozing!

        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-wrap gap-4 justify-center mb-12">
          <!-- Phone -->
          <a
            href="tel:+998992014141"
            class="btn-cta !text-sm !px-5 !py-3 sm:!text-lg sm:!px-8 sm:!py-4 !rounded-xl"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            Qo'ng'iroq Qilish
          </a>

          <!-- Telegram -->
          <a
            href="https://t.me/evroprotakol24"
            target="_blank"
            rel="noopener"
            class="btn-outline-white !text-sm !px-5 !py-3 sm:!text-lg sm:!px-8 sm:!py-4 !rounded-xl"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-2.04 9.61c-.15.678-.543.843-1.1.524l-3.037-2.238-1.466 1.41c-.162.162-.298.298-.61.298l.217-3.088 5.617-5.073c.244-.217-.053-.337-.38-.12L7.11 13.985l-2.97-.927c-.645-.202-.66-.645.135-.955l11.586-4.47c.537-.195 1.008.12.7.615z"/>
            </svg>
            Telegram
          </a>

          <!-- Instagram -->
          <a
            href="https://instagram.com/evroprotakol24"
            target="_blank"
            rel="noopener"
            class="btn-outline-white !text-sm !px-5 !py-3 sm:!text-lg sm:!px-8 sm:!py-4 !rounded-xl"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Instagram
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
