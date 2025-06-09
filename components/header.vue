<template>
  <header 
    :class="[
      'bg-white/90 backdrop-blur-lg sticky top-0 z-50 transition-all duration-500',
      isScrolled ? 'shadow-2xl shadow-gray-200/50 border-b border-gray-100' : 'shadow-lg shadow-gray-100/50'
    ]"
  >
  
  <nav class="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-8 py-4 lg:py-5">
    <!-- Logo with modern styling -->
    <NuxtLink 
      to="/" 
      class="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-green-600  to-green-400 bg-clip-text text-transparent hover:from-green-400 hover:to-green-600 transition-all duration-500 transform hover:scale-105"
    >
      AUD-IT SOFT
    </NuxtLink>

    <!-- Modern Desktop Navigation -->
    <div class="flex items-center space-x-8 lg:space-x-12">
      <a 
        href="#hero" 
        class="text-gray-700 hover:text-green-600 font-semibold text-lg transition-all duration-400 relative group px-3 py-2 rounded-lg hover:bg-green-50/80"
      >
        Asosiy
        <!-- Modern animated underline with gradient - starts from text beginning -->
        <span class="absolute -bottom-1 left-3 w-0 h-1 bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 transition-all duration-400 ease-out group-hover:w-[calc(100%-1.5rem)] rounded-full"></span>
        <!-- Glow effect -->
        <span class="absolute -bottom-1 left-3 w-0 h-1 bg-green-400 blur-md opacity-0 transition-all duration-400 ease-out group-hover:w-[calc(100%-1.5rem)] group-hover:opacity-70"></span>
        <!-- Floating dots animation -->
        <span class="absolute -top-1 left-1/2 w-1 h-1 bg-green-400 rounded-full opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:-translate-y-2 group-hover:animate-bounce"></span>
      </a>
      
      <a 
        href="#xizmatlar" 
        class="text-gray-700 hover:text-green-600 font-semibold text-lg transition-all duration-400 relative group px-3 py-2 rounded-lg hover:bg-green-50/80"
      >
        Xizmatlar
        <!-- Modern animated underline with gradient - starts from text beginning -->
        <span class="absolute -bottom-1 left-3 w-0 h-1 bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 transition-all duration-400 ease-out group-hover:w-[calc(100%-1.5rem)] rounded-full"></span>
        <!-- Glow effect -->
        <span class="absolute -bottom-1 left-3 w-0 h-1 bg-green-400 blur-md opacity-0 transition-all duration-400 ease-out group-hover:w-[calc(100%-1.5rem)] group-hover:opacity-70"></span>
        <!-- Floating dots animation -->
        <span class="absolute -top-1 left-1/2 w-1 h-1 bg-green-400 rounded-full opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:-translate-y-2 group-hover:animate-bounce delay-75"></span>
      </a>
      
      <a 
        href="#loyihalar" 
        class="text-gray-700 hover:text-green-600 font-semibold text-lg transition-all duration-400 relative group px-3 py-2 rounded-lg hover:bg-green-50/80"
      >
        Loyihalar
        <!-- Modern animated underline with gradient - starts from text beginning -->
        <span class="absolute -bottom-1 left-3 w-0 h-1 bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 transition-all duration-400 ease-out group-hover:w-[calc(100%-1.5rem)] rounded-full"></span>
        <!-- Glow effect -->
        <span class="absolute -bottom-1 left-3 w-0 h-1 bg-green-400 blur-md opacity-0 transition-all duration-400 ease-out group-hover:w-[calc(100%-1.5rem)] group-hover:opacity-70"></span>
        <!-- Floating dots animation -->
        <span class="absolute -top-1 left-1/2 w-1 h-1 bg-green-400 rounded-full opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:-translate-y-2 group-hover:animate-bounce delay-150"></span>
      </a>
      
      <a 
        href="#tolovlar" 
        class="text-gray-700 hover:text-green-600 font-semibold text-lg transition-all duration-400 relative group px-3 py-2 rounded-lg hover:bg-green-50/80"
      >
        To'lovlar
        <!-- Modern animated underline with gradient - starts from text beginning -->
        <span class="absolute -bottom-1 left-3 w-0 h-1 bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 transition-all duration-400 ease-out group-hover:w-[calc(100%-1.5rem)] rounded-full"></span>
        <!-- Glow effect -->
        <span class="absolute -bottom-1 left-3 w-0 h-1 bg-green-400 blur-md opacity-0 transition-all duration-400 ease-out group-hover:w-[calc(100%-1.5rem)] group-hover:opacity-70"></span>
        <!-- Floating dots animation -->
        <span class="absolute -top-1 left-1/2 w-1 h-1 bg-green-400 rounded-full opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:-translate-y-2 group-hover:animate-bounce delay-200"></span>
      </a>
      
      <!-- Premium CTA Button -->
      <a 
        href="#aloqa" 
        class="relative group bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white px-6 py-3 rounded-xl font-semibold text-lg transition-all duration-500 hover:from-green-500 hover:via-green-600 hover:to-emerald-700 hover:scale-110 hover:rotate-1 shadow-lg hover:shadow-2xl hover:shadow-green-500/25 overflow-hidden"
      >
        <!-- Animated background overlay -->
        <span class="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
        <!-- Shimmer effect -->
        <span class="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
        <!-- Button text -->
        <span class="relative z-10 flex items-center space-x-2">
          <span>Aloqa</span>
          <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </span>
      </a>
    </div>
  </nav>

  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>