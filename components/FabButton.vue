<template>
  <a
    href="tel:+998701648575"
    aria-label="Qo'ng'iroq qilish"
    class="fixed bottom-16 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-primary-700 text-white shadow-xl shadow-primary-900/40 hover:bg-primary-800 hover:scale-110 active:scale-95 transition-transform duration-200"
  >
    <!-- Pulse rings -->
    <span class="absolute inline-flex w-full h-full rounded-full bg-primary-600 opacity-60 animate-ping" />
    <span class="absolute inline-flex w-full h-full rounded-full bg-primary-500 opacity-30 animate-ping [animation-delay:0.4s]" />

    <!-- Phone icon -->
    <svg class="relative w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  </a>
</template>
