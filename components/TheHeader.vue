<script setup lang="ts">
const isMenuOpen = ref(false)
const activeSection = ref('hero')
const { tr } = useLang()

const navHrefs = ['#hero', '#services', '#conditions', '#faq', '#cta']
const navLinks = computed(() => [
  { href: '#hero',       label: tr.value.nav.home },
  { href: '#services',   label: tr.value.nav.services },
  { href: '#conditions', label: tr.value.nav.conditions },
  { href: '#faq',        label: tr.value.nav.faq },
  { href: '#cta',        label: tr.value.nav.contact },
])

const sectionIds = navHrefs.map((l) => l.replace('#', ''))
const observers: IntersectionObserver[] = []

onMounted(() => {
  sectionIds.forEach((id) => {
    const el = document.getElementById(id)
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) activeSection.value = id },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
    )
    obs.observe(el)
    observers.push(obs)
  })
})

onUnmounted(() => observers.forEach((o) => o.disconnect()))

const closeMenu = () => { isMenuOpen.value = false }
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm"
  >
    <div class="container-xl flex items-center justify-between h-16 md:h-20">
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center flex-shrink-0">
        <!-- <img src="../assets/IMG_1794.PNG" width="180" alt="Yevroprotokol" class="h-10 md:h-12 w-auto object-contain" /> -->
        <span class="font-black italic text-xl xl:text-2xl tracking-tight">
          <span
            class="bg-gradient-to-r from-black via-blue-700 to-blue-600 bg-clip-text text-transparent"
          >
            evroprotokol
          </span>
          <span
            class="bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-700 bg-clip-text text-transparent"
          >
            24
          </span>
        </span>
      </NuxtLink>

      <!-- Desktop Nav -->
      <nav class="hidden xl:flex items-center gap-5">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          :class="[
            'relative font-semibold text-sm xl:text-base transition-colors duration-200 group',
            activeSection === link.href.replace('#', '')
              ? 'text-primary-700'
              : 'text-gray-500 hover:text-primary-700',
          ]"
        >
          {{ link.label }}
          <span
            :class="[
              'absolute -bottom-1 left-0 h-0.5 rounded-full bg-primary-700 transition-all duration-300',
              activeSection === link.href.replace('#', '')
                ? 'w-full'
                : 'w-0 group-hover:w-full',
            ]"
          />
        </a>
      </nav>

      <!-- Lang + Phone (desktop) -->
      <div class="hidden xl:flex items-center gap-3">
        <LangSwitcher />
        <a
          href="tel:+998776410641"
          class="flex items-center gap-2.5 bg-primary-700 hover:bg-primary-800 text-white px-5 py-2.5 rounded-xl font-bold text-base transition-colors shadow-sm"
        >
        <svg
          class="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
        +998 77 641 06 41
        </a>
      </div>

      <!-- Mobile right side: lang + phone + hamburger -->
      <div class="flex xl:hidden items-center gap-2">
        <LangSwitcher />
        <a
          href="tel:+998776410641"
          class="flex items-center gap-1.5 bg-primary-700 text-white px-3 py-2 rounded-lg font-bold text-sm"
          aria-label="Qo'ng'iroq qilish"
        >
          <svg
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <span class="hidden sm:inline">+998 77 641 06 41</span>
        </a>

        <button
          @click="isMenuOpen = !isMenuOpen"
          class="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
          aria-label="Menyuni ochish"
        >
          <svg
            v-if="!isMenuOpen"
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            v-else
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Backdrop -->
    <div
      v-if="isMenuOpen"
      class="xl:hidden fixed inset-0 top-16 z-40 bg-black/30"
      @click="closeMenu"
      aria-hidden="true"
    />

    <!-- Mobile Menu -->
    <div
      class="xl:hidden overflow-hidden bg-white shadow-lg relative z-50"
      :style="{
        maxHeight: isMenuOpen ? '400px' : '0px',
        borderTop: isMenuOpen ? '1px solid #f3f4f6' : 'none',
        transition: 'max-height 0.3s ease',
      }"
    >
      <nav class="container-xl flex flex-col py-4 gap-1">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          @click="closeMenu"
          :class="[
            'font-semibold px-3 py-3 rounded-lg transition-colors flex items-center gap-2',
            activeSection === link.href.replace('#', '')
              ? 'bg-primary-50 text-primary-700'
              : 'text-gray-600 hover:bg-gray-50 hover:text-primary-700',
          ]"
        >
          <span
            :class="[
              'w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors',
              activeSection === link.href.replace('#', '') ? 'bg-primary-700' : 'bg-gray-300',
            ]"
          />
          {{ link.label }}
        </a>
        <a
          href="tel:+998776410641"
          @click="closeMenu"
          class="flex items-center justify-center gap-2 bg-primary-700 text-white px-4 py-3 rounded-xl font-bold text-base mt-3"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          +998 77 641 06 41
        </a>
      </nav>
    </div>
  </header>
</template>
