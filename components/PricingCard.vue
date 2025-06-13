<template>
  <div
    :class="[
      'w-full md:w-[320px] rounded-2xl shadow-xl p-8 flex flex-col justify-between relative overflow-hidden',
      'transform transition-all duration-500 ease-out hover:scale-105 hover:-translate-y-3',
      'border-3 hover:shadow-2xl group cursor-pointer',
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
      class="absolute -top-3 right-6 bg-gradient-to-r from-amber-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg transform rotate-3 animate-pulse"
    >
       Mashhur
    </div>

    <div class="relative z-10">
      <!-- Price Section -->
      <div class="text-center mb-6">
        <span 
          :class="[
            'text-4xl font-bold block mb-2 transition-all duration-300 transform',
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
          'text-2xl font-bold mb-6 text-center transition-colors duration-300',
          highlight ? 'text-white' : 'text-gray-800 group-hover:text-emerald-600'
        ]"
      >
        {{ title }}
      </h4>

      <!-- Icon Section -->
      <div class="mb-8 flex justify-center">
        <div 
          :class="[
            'relative p-4 rounded-full transition-all duration-500 transform',
            'group-hover:scale-110',
            highlight 
              ? 'bg-white/20 backdrop-blur-sm' 
              : 'bg-gradient-to-br from-emerald-100 to-green-100 group-hover:from-emerald-200 group-hover:to-green-200'
          ]"
        >
          <img 
            :src="icon" 
            alt="Icon" 
            class="w-16 h-16 transition-transform duration-300 group-hover:scale-110" 
          />
          
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
      <ul class="space-y-3 text-base mb-8">
        <li 
          v-for="(feature, index) in features" 
          :key="index"
          :class="[
            'flex items-center transition-all duration-300 transform',
            'hover:translate-x-2 relative pl-6',
            highlight ? 'text-white/90' : 'text-gray-700'
          ]"
          :style="{ 'animation-delay': `${index * 100}ms` }"
        >
          <!-- Custom Checkmark -->
          <span 
            :class="[
              'absolute left-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300',
              highlight 
                ? 'bg-white/20 text-white' 
                : 'bg-emerald-100 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white'
            ]"
          >
            ✓
          </span>
          {{ feature }}
        </li>
      </ul>
    </div>

    <!-- CTA Button -->
    <div class="mt-auto relative z-10">
      <button
        :class="[
          'block w-full text-center px-6 py-4 rounded-xl font-semibold text-lg',
          'border-2 transition-all duration-300 transform relative overflow-hidden',
          'hover:scale-105 active:scale-95 group/btn',
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
            class="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </span>
      </button>
    </div>

    <!-- Decorative Elements -->
    <div 
      :class="[
        'absolute top-4 left-4 w-2 h-2 rounded-full transition-all duration-500',
        highlight ? 'bg-white/30' : 'bg-emerald-200',
        'group-hover:scale-150 group-hover:animate-ping'
      ]"
    ></div>
    <div 
      :class="[
        'absolute bottom-4 right-4 w-3 h-3 rounded-full transition-all duration-700',
        highlight ? 'bg-white/20' : 'bg-emerald-100',
        'group-hover:scale-200 group-hover:animate-pulse'
      ]"
    ></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  title: String,
  price: String,
  icon: String,
  features: Array,
  highlight: Boolean
})

const isHovered = ref(false)
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
</style>