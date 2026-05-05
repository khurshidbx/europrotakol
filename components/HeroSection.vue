<template>
  <section
    id="hero"
    class="relative bg-gradient-to-br from-primary-950 via-primary-900 to-primary-700 overflow-hidden scroll-mt-16"
  >
    <!-- Background decoration -->
    <div class="absolute inset-0 opacity-5" aria-hidden="true">
      <div
        class="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2"
      />
      <div
        class="absolute bottom-0 left-0 w-64 h-64 bg-orange-400 rounded-full translate-y-1/2 -translate-x-1/2"
      />
    </div>
    <div
      class="absolute inset-0"
      style="
        background-image:
          radial-gradient(
            circle at 20% 50%,
            rgba(255, 255, 255, 0.03) 0%,
            transparent 50%
          ),
          radial-gradient(
            circle at 80% 20%,
            rgba(249, 115, 22, 0.06) 0%,
            transparent 40%
          );
      "
      aria-hidden="true"
    />

    <div class="container-xl relative z-10 pt-20 pb-8 md:pt-24 md:pb-6">
      <div
        class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
      >
        <!-- Left: text -->
        <div class="text-center lg:text-left">
          <!-- Trust badge -->
          <div
            class="hero-fade-in inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5 mb-7"
            style="animation-delay:0ms"
          >
            <span
              class="w-2 h-2 bg-green-400 rounded-full animate-pulse flex-shrink-0"
            />
            <span class="text-white/90 text-sm font-medium">{{ tr.hero.badge1 }}</span>
            <span class="text-white/90 text-sm font-medium">{{ tr.hero.badge2 }}</span>
          </div>

          <!-- H1 -->
          <h1
            class="hero-fade-up text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-4 leading-[1.15] tracking-tight"
            style="animation-delay:100ms"
          >
            <span class="text-orange-400">{{ tr.hero.h1a }}</span>
            <br />
            {{ tr.hero.h1b }}
          </h1>

          <p
            class="hero-fade-up text-base md:text-xl text-blue-100 mb-6 leading-relaxed max-w-xl mx-auto lg:mx-0"
            style="animation-delay:200ms"
          >
            {{ tr.hero.sub }}
          </p>

          <!-- CTA -->
          <div
            class="hero-fade-up flex flex-wrap gap-4 justify-center lg:justify-start mb-10"
            style="animation-delay:300ms"
          >
            <a
              href="#how-it-works"
              class="btn-outline-white !text-sm !px-5 !py-3 sm:!text-lg sm:!px-8 sm:!py-4 !rounded-xl"
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
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {{ tr.hero.cta }}
            </a>
          </div>
        </div>

        <!-- Right: illustration -->
        <div class="hero-slide-in flex items-center justify-center lg:justify-end" style="animation-delay:250ms">
          <div class="relative w-full max-w-lg lg:max-w-none">
            <!-- Glow effect behind image -->
            <div
              class="absolute inset-0 rounded-3xl blur-3xl opacity-20"
              style="
                background: radial-gradient(
                  circle,
                  #93c5fd 0%,
                  #3b82f6 50%,
                  transparent 80%
                );
              "
              aria-hidden="true"
            />
            <img
              src="/twocars.png"
              alt="Yevroprotokol — ikki haydovchi avtohalokat hujjatini rasmiylashtiryapti"
              class="relative w-full rounded-2xl"
              style="
                mix-blend-mode: luminosity;
                filter: brightness(1.05)
                  drop-shadow(0 8px 32px rgba(59, 130, 246, 0.3));
              "
              loading="eager"
              width="640"
              height="420"
            />
          </div>
        </div>
      </div>

      <!-- Stats row
      <div
        class="grid grid-cols-3 gap-4 md:gap-8 border-t border-white/20 pt-8 mt-10"
      >
        <div v-for="stat in stats" :key="stat.value" class="text-center">
          <div class="text-2xl md:text-4xl font-extrabold text-white mb-0.5">
            {{ stat.value }}
          </div>
          <div class="text-blue-200 text-xs md:text-sm">{{ stat.label }}</div>
        </div>
      </div> -->
    </div>

    <!-- Wave divider -->
    <div class="relative leading-none mt-4">
      <svg
        viewBox="0 0 1440 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0 56L60 49C120 42 240 28 360 21C480 14 600 14 720 17.5C840 21 960 28 1080 31.5C1200 35 1320 35 1380 35L1440 35V56H0Z"
          fill="white"
        />
      </svg>
    </div>
  </section>
</template>

<script setup lang="ts">
const { tr } = useLang()

const trustSignals = ["Qonuniy hujjat", "24/7 ishlaydi", "15 daqiqada tayyor"];

const stats = [
  { value: "500+", label: "Muvaffaqiyatli hodisalar" },
  { value: "15 daq", label: "O'rtacha vaqt" },
  { value: "100%", label: "Qonuniy kuch" },
];
</script>
