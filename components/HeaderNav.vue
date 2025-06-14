<template>
  <header 
    :class="[
      'bg-white/90 backdrop-blur-lg sticky top-0 z-50 transition-all duration-500',
      isScrolled ? 'shadow-2xl shadow-gray-200/50 border-b border-gray-100' : 'shadow-lg shadow-gray-100/50'
    ]"
   
  >
  <nav class="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-8 py-4 lg:py-5"  data-aos="fade-down"  >
    <!-- Logo with modern styling -->
    <NuxtLink 
      to="/" 
      class="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-green-600  to-green-400 bg-clip-text text-transparent hover:from-green-400 hover:to-green-600 transition-all duration-500 transform hover:scale-105"
    >
      AUD-IT SOFT
    </NuxtLink>

    <!-- Modern Desktop Navigation -->
    <div class="flex items-center space-x-8 lg:space-x-12">
      <!-- Asosiy menyu -->
      <a 
        href="#hero"
        @click="setActive('hero')"
        :class="[
          'text-gray-700 hover:text-green-600 font-semibold text-lg transition-all duration-400 relative group px-3 py-2 rounded-lg hover:bg-green-50/80',
          activeSection === 'hero' ? 'text-green-600 bg-green-50/80' : ''
        ]"
      >
        Asosiy

        <!-- underline -->
        <span
          :class="[
            'absolute -bottom-1 left-3 w-0 h-1 bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 transition-all duration-400 ease-out rounded-full',
            activeSection === 'hero' ? 'w-[calc(100%-1.5rem)]' : '',
            'group-hover:w-[calc(100%-1.5rem)]'
          ]"
        ></span>

        <!-- glow -->
        <span
          :class="[
            'absolute -bottom-1 left-3 w-0 h-1 bg-green-400 blur-md opacity-0 transition-all duration-400 ease-out',
            activeSection === 'hero' ? 'w-[calc(100%-1.5rem)] opacity-70' : '',
            'group-hover:w-[calc(100%-1.5rem)] group-hover:opacity-70'
          ]"
        ></span>

        <!-- dot -->
        <span
          :class="[
            'absolute -top-1 left-1/2 w-1 h-1 bg-green-400 rounded-full opacity-0 transition-all duration-500',
            activeSection === 'hero' ? 'opacity-100 -translate-y-2' : '',
            'group-hover:opacity-100 group-hover:-translate-y-2 group-hover:animate-bounce'
          ]"
        ></span>
      </a>

      <!-- Xizmatlar menyu -->
      <a 
        href="#xizmatlar" 
        @click="setActive('xizmatlar')"
        :class="[
          'text-gray-700 hover:text-green-600 font-semibold text-lg transition-all duration-400 relative group px-3 py-2 rounded-lg hover:bg-green-50/80',
          activeSection === 'xizmatlar' ? 'text-green-600 bg-green-50/80' : ''
        ]"
      >
        Xizmatlar
        
        <!-- underline -->
        <span 
          :class="[
            'absolute -bottom-1 left-3 w-0 h-1 bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 transition-all duration-400 ease-out rounded-full',
            activeSection === 'xizmatlar' ? 'w-[calc(100%-1.5rem)]' : '',
            'group-hover:w-[calc(100%-1.5rem)]'
          ]"
        ></span>
        
        <!-- glow -->
        <span 
          :class="[
            'absolute -bottom-1 left-3 w-0 h-1 bg-green-400 blur-md opacity-0 transition-all duration-400 ease-out',
            activeSection === 'xizmatlar' ? 'w-[calc(100%-1.5rem)] opacity-70' : '',
            'group-hover:w-[calc(100%-1.5rem)] group-hover:opacity-70'
          ]"
        ></span>
        
        <!-- dot -->
        <span 
          :class="[
            'absolute -top-1 left-1/2 w-1 h-1 bg-green-400 rounded-full opacity-0 transition-all duration-500',
            activeSection === 'xizmatlar' ? 'opacity-100 -translate-y-2' : '',
            'group-hover:opacity-100 group-hover:-translate-y-2 group-hover:animate-bounce'
          ]"
        ></span>
      </a>
      
      <!-- Loyihalar menyu -->
      <a 
        href="#loyihalar" 
        @click="setActive('loyihalar')"
        :class="[
          'text-gray-700 hover:text-green-600 font-semibold text-lg transition-all duration-400 relative group px-3 py-2 rounded-lg hover:bg-green-50/80',
          activeSection === 'loyihalar' ? 'text-green-600 bg-green-50/80' : ''
        ]"
      >
        Loyihalar
        
        <!-- underline -->
        <span 
          :class="[
            'absolute -bottom-1 left-3 w-0 h-1 bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 transition-all duration-400 ease-out rounded-full',
            activeSection === 'loyihalar' ? 'w-[calc(100%-1.5rem)]' : '',
            'group-hover:w-[calc(100%-1.5rem)]'
          ]"
        ></span>
        
        <!-- glow -->
        <span 
          :class="[
            'absolute -bottom-1 left-3 w-0 h-1 bg-green-400 blur-md opacity-0 transition-all duration-400 ease-out',
            activeSection === 'loyihalar' ? 'w-[calc(100%-1.5rem)] opacity-70' : '',
            'group-hover:w-[calc(100%-1.5rem)] group-hover:opacity-70'
          ]"
        ></span>
        
        <!-- dot -->
        <span 
          :class="[
            'absolute -top-1 left-1/2 w-1 h-1 bg-green-400 rounded-full opacity-0 transition-all duration-500',
            activeSection === 'loyihalar' ? 'opacity-100 -translate-y-2' : '',
            'group-hover:opacity-100 group-hover:-translate-y-2 group-hover:animate-bounce delay-150'
          ]"
        ></span>
      </a>
      
      <!-- To'lovlar menyu -->
      <a 
        href="#tolovlar" 
        @click="setActive('tolovlar')"
        :class="[
          'text-gray-700 hover:text-green-600 font-semibold text-lg transition-all duration-400 relative group px-3 py-2 rounded-lg hover:bg-green-50/80',
          activeSection === 'tolovlar' ? 'text-green-600 bg-green-50/80' : ''
        ]"
      >
        Narxlar
        
        <!-- underline -->
        <span 
          :class="[
            'absolute -bottom-1 left-3 w-0 h-1 bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 transition-all duration-400 ease-out rounded-full',
            activeSection === 'tolovlar' ? 'w-[calc(100%-1.5rem)]' : '',
            'group-hover:w-[calc(100%-1.5rem)]'
          ]"
        ></span>
        
        <!-- glow -->
        <span 
          :class="[
            'absolute -bottom-1 left-3 w-0 h-1 bg-green-400 blur-md opacity-0 transition-all duration-400 ease-out',
            activeSection === 'tolovlar' ? 'w-[calc(100%-1.5rem)] opacity-70' : '',
            'group-hover:w-[calc(100%-1.5rem)] group-hover:opacity-70'
          ]"
        ></span>
        
        <!-- dot -->
        <span 
          :class="[
            'absolute -top-1 left-1/2 w-1 h-1 bg-green-400 rounded-full opacity-0 transition-all duration-500',
            activeSection === 'tolovlar' ? 'opacity-100 -translate-y-2' : '',
            'group-hover:opacity-100 group-hover:-translate-y-2 group-hover:animate-bounce delay-200'
          ]"
        ></span>
      </a>
      
        <!-- To'lovlar menyu -->
      <a 
        href="#aloqa" 
        @click="setActive('aloqa')"
        :class="[
          'text-gray-700 hover:text-green-600 font-semibold text-lg transition-all duration-400 relative group px-3 py-2 rounded-lg hover:bg-green-50/80',
          activeSection === 'aloqa' ? 'text-green-600 bg-green-50/80' : ''
        ]"
      >
        Aloqa
        
        <!-- underline -->
        <span 
          :class="[
            'absolute -bottom-1 left-3 w-0 h-1 bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 transition-all duration-400 ease-out rounded-full',
            activeSection === 'aloqa' ? 'w-[calc(100%-1.5rem)]' : '',
            'group-hover:w-[calc(100%-1.5rem)]'
          ]"
        ></span>
        
        <!-- glow -->
        <span 
          :class="[
            'absolute -bottom-1 left-3 w-0 h-1 bg-green-400 blur-md opacity-0 transition-all duration-400 ease-out',
            activeSection === 'aloqa' ? 'w-[calc(100%-1.5rem)] opacity-70' : '',
            'group-hover:w-[calc(100%-1.5rem)] group-hover:opacity-70'
          ]"
        ></span>
        
        <!-- dot -->
        <span 
          :class="[
            'absolute -top-1 left-1/2 w-1 h-1 bg-green-400 rounded-full opacity-0 transition-all duration-500',
            activeSection === 'aloqa' ? 'opacity-100 -translate-y-2' : '',
            'group-hover:opacity-100 group-hover:-translate-y-2 group-hover:animate-bounce delay-200'
          ]"
        ></span>
      </a>
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
    </div>
  </nav>

  </header>
     <Modal ref="modal"  size="md" @open="handleOpen" @close="handleClose">
    
      <template #body>
<div class="min-h-screen relative overflow-hidden flex items-center justify-center h-[500px]">
    <!-- Background Shapes -->
    <div class="absolute inset-0">
      <!-- Blue gradient shape -->
      <div class="absolute w-64 h-64 rounded-full bg-gradient-to-br from-blue-600 to-blue-400 opacity-80 -top-20 -left-20 "></div>
      <!-- Orange gradient shape -->
      <div class="absolute w-64 h-64 rounded-full bg-gradient-to-br from-green-700 to-green-400 opacity-80 -bottom-20 -right-8"></div>
    </div>

    <!-- Login Form -->
    <div class="relative z-10 w-full max-w-md mx-4 ">
      <form 
        @submit.prevent="handleSubmit"
        class="backdrop-blur-lg rounded-xl border border-green-700 shadow-2xl p-8 space-y-6 backdrop-blur-custom"
      >
        <!-- Title -->
        <h3 class="text-2xl font-medium text-black tracking-wide">
            Kirish uchun formani to'ldiring!
          </h3>
        <!-- Username Field -->
        <div class="space-y-2">
          <label 
            for="username" 
            class="block text-black font-medium text-base tracking-wide"
          >
            Login
          </label>
          <input
            type="text"
            id="username"
            v-model="username"
            placeholder="Login"
            class="w-full h-12 bg-gray/5 rounded border focus:border-green-600 outline-none px-3 text-black placeholder-gray-300 text-sm font-light focus:bg-gray/10 transition-all duration-200"
          />
        </div>

        <!-- Password Field -->
        <div class="space-y-2">
          <label 
            for="password" 
            class="block text-black font-medium text-base tracking-wide"
          >
            Parol
          </label>
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="Parol"
            class="w-full h-12 bg-gray/5 rounded border focus:border-green-600 outline-none px-3 text-black placeholder-gray-300 text-sm font-light focus:bg-gray/10 transition-all duration-200"
          />
        </div>

        <!-- Login Button -->
        <div class="pt-6">
          <button
            type="submit"
            class="w-full bg-white text-gray-900 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 hover:text-white transition-colors duration-300 cursor-pointer outline-none border border-green-700"
            
          >
            Kirish
          </button>
        </div>
      </form>
    </div>
  </div>
      </template>
    
    </Modal>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Login from './Login.vue'
import Modal from '~/components/Modal.vue'


const isScrolled = ref(false)
const modal = ref(null)
const username = ref('')
const password = ref('')



const handleSubmit = () => {
  console.log('Login attempt:', {
    username: username.value,
    password: password.value
  })
}
const handleOpen = () => {
  console.log('opened')
}

const handleClose = ()=> {
  console.log('closed')
}
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const activeSection = ref('')

const onScroll = () => {
  const sections = document.querySelectorAll('section[id]')
  const scrollY = window.scrollY + 100

  sections.forEach(section => {
    const top = section.offsetTop
    const height = section.offsetHeight
    const id = section.getAttribute('id')

    if (scrollY >= top && scrollY < top + height) {
      activeSection.value = id
    }
  })
}

onMounted(() => {
  window.addEventListener('scroll', onScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})

const setActive = (id) => {
  activeSection.value = id
}
</script>