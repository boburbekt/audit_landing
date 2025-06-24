<template>
  <header 
    :class="[
      'bg-white/90 backdrop-blur-lg sticky top-0 z-50 transition-all duration-500 ',
      isScrolled ? 'shadow-2xl shadow-gray-200/50 border-b border-gray-100' : 'shadow-lg shadow-gray-100/50'
    ]"
  >
    <nav class="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-5" data-aos="fade-down">
      <!-- Logo with mobile responsive sizing -->
      <NuxtLink 
        to="/" 
        class="text-lg sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent hover:from-green-400 hover:to-green-600 transition-all duration-500 transform hover:scale-105"
      >
        AUD-IT SOFT
      </NuxtLink>

      <!-- Mobile Menu Button -->
      <button
        @click="toggleMobileMenu"
        class="md-flex hidden flex-col justify-center items-center w-8 h-8 space-y-1 group"
      >
        <span
          :class="[
            'w-6 h-0.5 bg-gray-700 rounded-full transition-all duration-300 group-hover:bg-green-600',
            isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
          ]"
        ></span>
        <span
          :class="[
            'w-6 h-0.5 bg-gray-700 rounded-full transition-all duration-300 group-hover:bg-green-600',
            isMobileMenuOpen ? 'opacity-0' : ''
          ]"
        ></span>
        <span
          :class="[
            'w-6 h-0.5 bg-gray-700 rounded-full transition-all duration-300 group-hover:bg-green-600',
            isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
          ]"
        ></span>
      </button>

      <!-- Desktop Navigation -->
      <div class="flex md-hidden items-center space-x-8">
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
        
        <!-- Narxlar menyu -->
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
        
        <!-- Aloqa menyu -->
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

        <!-- Desktop Login Button -->
        <div 
          :class="[
            'relative group bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white px-6 py-3 rounded-xl font-semibold text-lg transition-all duration-500 hover:from-green-500 hover:via-green-600 hover:to-emerald-700 hover:scale-110 hover:rotate-1 shadow-lg hover:shadow-2xl hover:shadow-green-500/25 overflow-hidden',
          ]" 
          @click="$refs.modal.openModal()"
        >
          <!-- Animated background overlay -->
          <span class="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-600 transition-opacity duration-500"></span>
          
          <!-- Shimmer effect -->
          <span class="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
          
          <!-- Button text -->
          <button class="relative z-10 flex items-center space-x-2">
            <span>Kirish</span>
            <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>

    <!-- Mobile Menu Overlay -->
    <div 
      :class="[
        'md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm transition-all duration-300 z-40 h-[100vh]']"
      v-show="isMobileMenuOpen"
      @click="closeMobileMenu"
    ></div>

    <!-- Mobile Navigation Menu -->
    <div 
      :class="[
        'md:hidden fixed top-0 right-0 h-[100vh] w-72 max-w-[85vw] bg-white backdrop-blur-lg shadow-2xl transform transition-transform duration-300 ease-out z-50 overflow-hidden',
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-[100%]'
      ]"
      style="overflow: hidden;"
    >
      <!-- Mobile Menu Header -->
      <div class="flex items-center justify-between p-4 border-b border-gray-100">
        <span class="text-lg font-bold bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
          Menyu
        </span>
        <button
          @click="closeMobileMenu"
          class="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors duration-200"
        >
          <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>

      <!-- Mobile Menu Items -->
      <div class="p-4 space-y-2 bg-white">
        <a 
          href="#hero"
          @click="setActiveAndClose('hero')"
          :class="[
            'flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 group',
            activeSection === 'hero' ? 'bg-green-50 text-green-600' : 'text-gray-700 hover:bg-gray-50 hover:text-green-600'
          ]"
        >
          <div class="w-2 h-2 rounded-full bg-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
          <span class="font-medium">Asosiy</span>
        </a>

        <a 
          href="#xizmatlar"
          @click="setActiveAndClose('xizmatlar')"
          :class="[
            'flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 group',
            activeSection === 'xizmatlar' ? 'bg-green-50 text-green-600' : 'text-gray-700 hover:bg-gray-50 hover:text-green-600'
          ]"
        >
          <div class="w-2 h-2 rounded-full bg-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
          <span class="font-medium">Xizmatlar</span>
        </a>

        <a 
          href="#loyihalar"
          @click="setActiveAndClose('loyihalar')"
          :class="[
            'flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 group',
            activeSection === 'loyihalar' ? 'bg-green-50 text-green-600' : 'text-gray-700 hover:bg-gray-50 hover:text-green-600'
          ]"
        >
          <div class="w-2 h-2 rounded-full bg-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
          <span class="font-medium">Loyihalar</span>
        </a>

        <a 
          href="#tolovlar"
          @click="setActiveAndClose('tolovlar')"
          :class="[
            'flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 group',
            activeSection === 'tolovlar' ? 'bg-green-50 text-green-600' : 'text-gray-700 hover:bg-gray-50 hover:text-green-600'
          ]"
        >
          <div class="w-2 h-2 rounded-full bg-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
          <span class="font-medium">Narxlar</span>
        </a>

        <a 
          href="#aloqa"
          @click="setActiveAndClose('aloqa')"
          :class="[
            'flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 group',
            activeSection === 'aloqa' ? 'bg-green-50 text-green-600' : 'text-gray-700 hover:bg-gray-50 hover:text-green-600'
          ]"
        >
          <div class="w-2 h-2 rounded-full bg-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
          <span class="font-medium">Aloqa</span>
        </a>

        <!-- Mobile Login Button -->
        <div class="pt-4 border-t border-gray-100 mt-4">
          <button
            @click="openModalAndClose"
            class="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3 px-4 rounded-lg font-medium transition-all duration-300 hover:from-green-500 hover:to-green-600 flex items-center justify-center space-x-2"
          >
            <span>Kirish</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </header>

  <!-- Modal -->
  <Modal ref="modal" size="md" @open="handleOpen" @close="handleClose">
    <template #body>
      <form 
        @submit.prevent="handleSubmit"
        class="backdrop-blur-lg rounded-xl border border-green-700 shadow-2xl p-6 sm:p-8 space-y-6 backdrop-blur-custom"
      >
        <!-- Title -->
        <h3 class="text-xl sm:text-2xl font-medium text-black tracking-wide">
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
    </template>
  </Modal>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Modal from '~/components/Modal.vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const modal = ref(null)
const username = ref('')
const password = ref('')
const activeSection = ref('')

const handleSubmit = () => {
  console.log('Login attempt:', {
    username: username.value,
    password: password.value
  })
}

const handleOpen = () => {
  console.log('opened')
}

const handleClose = () => {
  console.log('closed')
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  
}

const setActive = (id) => {
  activeSection.value = id
}

const setActiveAndClose = (id) => {
  activeSection.value = id
  closeMobileMenu()
}

const openModalAndClose = () => {
  closeMobileMenu()
  setTimeout(() => {
    modal.value?.openModal()
  }, 300)
}

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
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('scroll', onScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('scroll', onScroll)
})
</script>

<style scoped>
/* Custom styles for very small screens */
@media (max-width: 900px) {
  /* nav a{
    font-size: 15px;
  } */
}
@media (max-width: 768px) {
  .md-hidden{
    display: none;
    position: fixed;
    z-index: 99;
  }
  .md-flex{
    display: flex;
  }
}

/* Prevent body scroll when mobile menu is open */
.mobile-menu-open {
  overflow: hidden;
}
</style>