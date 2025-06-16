<template>
  <div
    :class="[
      'w-full rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 flex flex-col justify-between relative overflow-hidden',
      'transform transition-all duration-500 ease-out hover:scale-105 hover:-translate-y-3',
      'border-3 hover:shadow-2xl group cursor-pointer min-h-[420px] sm:min-h-[450px]',
      highlight 
        ? 'bg-gradient-to-br from-emerald-500 via-green-500 to-teal-600 text-white border-emerald-400 hover:shadow-emerald-500/30' 
        : 'bg-white text-gray-800 border-emerald-400 hover:border-emerald-500 hover:shadow-emerald-500/20'
    ]"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <!-- Animated Background Overlay -->
    <div 
      :class="[
        'absolute inset-0 opacity-0 transition-opacity duration-500',
        'bg-gradient-to-r from-transparent via-white/10 to-transparent',
        'transform -translate-x-full group-hover:translate-x-full group-hover:opacity-100'
      ]"
      style="transition: transform 0.8s ease-in-out;"
    ></div>

    <!-- Popular Badge -->
    <div 
      v-if="false" 
      class="absolute -top-2 sm:-top-3 right-4 sm:right-6 bg-gradient-to-r from-amber-400 to-orange-500 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg transform rotate-3 animate-pulse"
    >
       Mashhur
    </div>

    <div class="relative z-10 flex-1 flex flex-col">
      <!-- Price Section -->
      <div class="text-center mb-4 sm:mb-6">
        <span 
          :class="[
            'text-3xl sm:text-4xl lg:text-5xl font-bold block mb-2 transition-all duration-300 transform',
            'group-hover:scale-110',
            highlight ? 'text-white' : 'text-emerald-600'
          ]"
        >
          {{ price }}
        </span>
      </div>

      <!-- Title -->
      <h4 
        :class="[
          'text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 text-center transition-colors duration-300 leading-tight',
          highlight ? 'text-white' : 'text-gray-800 group-hover:text-emerald-600'
        ]"
      >
        {{ title }}
      </h4>

      <!-- Icon Section -->
      <div class="mb-4 sm:mb-6 lg:mb-8 flex justify-center">
        <div 
          :class="[
            'relative p-2 sm:p-3 lg:p-4 rounded-full transition-all duration-500 transform',
            'group-hover:scale-110',
            highlight 
              ? 'bg-white/20 backdrop-blur-sm' 
              : 'bg-gradient-to-br from-emerald-100 to-green-100 group-hover:from-emerald-200 group-hover:to-green-200'
          ]"
        >
          <img 
            v-if="icon"
            :src="icon" 
            alt="Icon" 
            class="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 transition-transform duration-300 group-hover:scale-110" 
          />
          <div 
            v-else
            :class="[
              'w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110',
              highlight ? 'bg-white/30' : 'bg-emerald-200'
            ]"
          >
            <svg class="w-6 h-6 sm:w-8 sm:h-8" :class="highlight ? 'text-white' : 'text-emerald-600'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
            </svg>
          </div>
          
          <!-- Animated Ring -->
          <div 
            :class="[
              'absolute inset-0 rounded-full border-2 border-dashed animate-spin',
              highlight ? 'border-white/30' : 'border-emerald-300',
              'transition-opacity duration-300',
              isHovered ? 'opacity-100' : 'opacity-0'
            ]"
            style="animation-duration: 3s;"
          ></div>
        </div>
      </div>

      <!-- Features List -->
      <ul class="space-y-2 sm:space-y-3 text-sm sm:text-base mb-6 sm:mb-8 flex-1">
        <li 
          v-for="(feature, index) in features" 
          :key="index"
          :class="[
            'flex items-start transition-all duration-300 transform',
            'hover:translate-x-1 sm:hover:translate-x-2 relative pl-6 sm:pl-7 leading-relaxed',
            highlight ? 'text-white/90' : 'text-gray-700'
          ]"
          :style="{ 'animation-delay': `${index * 100}ms` }"
        >
          <!-- Custom Checkmark -->
          <span 
            :class="[
              'absolute left-0 top-0.5 w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 flex-shrink-0',
              highlight 
                ? 'bg-white/20 text-white' 
                : 'bg-emerald-100 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white'
            ]"
          >
            ✓
          </span>
          <span class="flex-1">{{ feature }}</span>
        </li>
      </ul>
    </div>

    <!-- CTA Button -->
    <div class="mt-auto relative z-10">
      <NuxtLink
        :to="getDetailRoute()"
        :class="[
          'block w-full text-center px-4 sm:px-6 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg',
          'border-2 transition-all duration-300 transform relative overflow-hidden',
          'hover:scale-105 active:scale-95 group/btn no-underline touch-manipulation',
          highlight
            ? 'border-white text-white hover:bg-white hover:text-emerald-600 hover:shadow-lg'
            : 'border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white hover:shadow-lg hover:shadow-emerald-500/30'
        ]"
      >
        <!-- Button Ripple Effect -->
        <span 
          class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"
        ></span>
        
        <span class="relative z-10 flex items-center justify-center gap-2">
          Batafsil
          <svg 
            class="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover/btn:translate-x-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </span>
      </NuxtLink>
    </div>

    <!-- Decorative Elements -->
    <div 
      :class="[
        'absolute top-2 sm:top-4 left-2 sm:left-4 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-500',
        highlight ? 'bg-white/30' : 'bg-emerald-200',
        'group-hover:scale-150 group-hover:animate-ping'
      ]"
    ></div>
    <div 
      :class="[
        'absolute bottom-2 sm:bottom-4 right-2 sm:right-4 w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-700',
        highlight ? 'bg-white/20' : 'bg-emerald-100',
        'group-hover:scale-200 group-hover:animate-pulse'
      ]"
    ></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  title: String,
  price: String,
  icon: String,
  features: Array,
  highlight: Boolean
})

const isHovered = ref(false)

// Route generation based on title
const getDetailRoute = () => {
  const slug = props.title.toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
  return `/products?type=${slug}`
}
</script>

<style scoped>
/* Custom animations */
@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

.animate-shimmer {
  animation: shimmer 2s infinite;
}

/* Enhance existing Tailwind animations */
.group:hover .animate-spin {
  animation-duration: 2s;
}

/* Custom border width for Tailwind */
.border-3 {
  border-width: 3px;
}

/* Enhanced shadow effects */
.hover\:shadow-2xl:hover {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

/* Smooth transforms */
* {
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

/* Remove default link underline */
.no-underline {
  text-decoration: none;
}

/* Touch optimization */
.touch-manipulation {
  touch-action: manipulation;
}

/* Mobile-specific adjustments */
@media (max-width: 640px) {
  .group:hover .hover\:scale-105 {
    transform: scale(1.02);
  }
  
  .group:hover .hover\:-translate-y-3 {
    transform: translateY(-1px);
  }
}
</style>