<template>
     <!-- Premium CTA Button (Aloqa) -->
      <div 
        :class="[
          'relative group bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white px-6 py-3 rounded-xl font-semibold text-lg transition-all duration-500 hover:from-green-500 hover:via-green-600 hover:to-emerald-700 hover:scale-110 hover:rotate-1 shadow-lg hover:shadow-2xl hover:shadow-green-500/25 overflow-hidden',
          
        ]" @click="$refs.modal.openModal()"
      >
        <!-- Animated background overlay -->
        <span 
          :class="[
            'absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-600 transition-opacity duration-500',
           
          ]"
        ></span>
        
        <!-- Shimmer effect -->
        <span class="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
        
        <!-- Button text -->
        <button  class="relative z-10 flex items-center space-x-2" >
          <span>Kirish</span>
          <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </button >
      </div>
 
</template>

<script setup>
import { ref } from 'vue'
import Modal from '~/components/Modal.vue'

// Reactive data
const username = ref('')
const password = ref('')
const modal = ref(null)

// Methods




</script>

<style scoped>
</style>