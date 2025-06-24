<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50/30">
    <!-- Background decorations -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-green-400/20 to-emerald-500/20 rounded-full blur-xl animate-pulse"></div>
      <div class="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-blue-400/15 to-green-400/15 rounded-full blur-2xl animate-bounce"></div>
      <div class="absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-r from-emerald-400/20 to-blue-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-8">
      <!-- Profile Header -->
      <div class="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 mb-8" data-aos="fade-up">
        <div class="flex items-center justify-between mb-6">
          <div class="flex items-center space-x-6">
            <!-- Avatar -->
            <div class="w-24 h-24 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg">
              {{ userInfo.username.charAt(0).toUpperCase() }}
            </div>
            
            <!-- User Info -->
            <div>
              <h1 class="text-3xl font-bold text-gray-800 mb-2">{{ userInfo.username }}</h1>
              <p class="text-gray-600">Tizimga kirish vaqti: {{ formatDate(userInfo.loginTime) }}</p>
            </div>
          </div>

          <!-- Logout Button -->
          <button
            @click="logout"
            class="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Chiqish
          </button>
        </div>

        <!-- User Stats -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200">
            <div class="flex items-center space-x-3">
              <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <p class="text-sm text-blue-600 font-medium">Faol sessiyalar</p>
                <p class="text-2xl font-bold text-blue-700">1</p>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-2xl border border-green-200">
            <div class="flex items-center space-x-3">
              <div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <p class="text-sm text-green-600 font-medium">Oxirgi faollik</p>
                <p class="text-2xl font-bold text-green-700">Hozir</p>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-2xl border border-purple-200">
            <div class="flex items-center space-x-3">
              <div class="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </div>
              <div>
                <p class="text-sm text-purple-600 font-medium">Profil holati</p>
                <p class="text-2xl font-bold text-purple-700">Faol</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Dashboard Content -->
      <div class="grid grid-cols-2 sm:grid-cols-1 gap-2">
        <!-- Left Column - Quick Actions -->
        <div class="lg:col-span-1">
          <!-- Quick Actions -->
          <div class="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-6" data-aos="fade-up" data-aos-delay="100">
            <h2 class="text-xl font-bold text-gray-800 mb-4">Tezkor amallar</h2>
            <div class="space-y-3">
              <NuxtLink 
                to="/#xizmatlar"
                class="flex items-center space-x-3 p-3 rounded-xl hover:bg-green-50 transition-colors group"
              >
                <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200">
                  <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <span class="font-medium text-gray-700">Xizmatlar</span>
              </NuxtLink>

              <NuxtLink 
                to="/#tolovlar"
                class="flex items-center space-x-3 p-3 rounded-xl hover:bg-blue-50 transition-colors group"
              >
                <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200">
                  <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                  </svg>
                </div>
                <span class="font-medium text-gray-700">Narxlar</span>
              </NuxtLink>

              <NuxtLink 
                to="/#aloqa"
                class="flex items-center space-x-3 p-3 rounded-xl hover:bg-purple-50 transition-colors group"
              >
                <div class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200">
                  <svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                  </svg>
                </div>
                <span class="font-medium text-gray-700">Aloqa</span>
              </NuxtLink>
            </div>
          </div>

          <!-- Recent Activity -->
          <div class="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-6" data-aos="fade-up" data-aos-delay="200" v-if="false">
            <h2 class="text-xl font-bold text-gray-800 mb-4">So'nggi faollik</h2>
            <div class="space-y-3">
              <div class="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                <span class="text-sm text-gray-600">Tizimga kirish</span>
                <span class="text-xs text-gray-400 ml-auto">{{ formatTime(userInfo.loginTime) }}</span>
              </div>
              <div class="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span class="text-sm text-gray-600">Profil ko'rildi</span>
                <span class="text-xs text-gray-400 ml-auto">Hozir</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column - Main Content -->
        <div class="lg:col-span-2 space-y-6">
          <!-- Welcome Message -->
          <div class="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-3xl shadow-2xl p-8" data-aos="fade-up" data-aos-delay="300">
            <h2 class="text-2xl font-bold mb-4">Xush kelibsiz, {{ userInfo.username }}!</h2>
            <p class="text-green-100 mb-6">AUD-IT SOFT tizimiga muvaffaqiyatli kirdingiz. Bu yerda siz bizning barcha xizmatlarimiz va mahsulotlarimiz bilan tanishishingiz mumkin.</p>
            <div class="flex space-x-4">
              <NuxtLink 
                to="/#xizmatlar"
                class="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300"
              >
                Xizmatlarni ko'rish
              </NuxtLink>
              <NuxtLink 
                to="/#tolovlar"
                class="border border-white/30 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Narxlar
              </NuxtLink>
            </div>
          </div>

          <!-- System Info -->
          <div class="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-6" data-aos="fade-up" data-aos-delay="400" v-if="false">
            <h2 class="text-xl font-bold text-gray-800 mb-4">Tizim ma'lumotlari</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="bg-gray-50 rounded-xl p-4">
                <div class="flex items-center justify-between">
                  <span class="text-sm font-medium text-gray-600">Tizim versiyasi</span>
                  <span class="text-sm font-bold text-gray-800">v2.1.0</span>
                </div>
              </div>
              <div class="bg-gray-50 rounded-xl p-4">
                <div class="flex items-center justify-between">
                  <span class="text-sm font-medium text-gray-600">Oxirgi yangilanish</span>
                  <span class="text-sm font-bold text-gray-800">2024-01-15</span>
                </div>
              </div>
              <div class="bg-gray-50 rounded-xl p-4">
                <div class="flex items-center justify-between">
                  <span class="text-sm font-medium text-gray-600">Serverning holati</span>
                  <span class="flex items-center space-x-2">
                    <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span class="text-sm font-bold text-green-600">Faol</span>
                  </span>
                </div>
              </div>
              <div class="bg-gray-50 rounded-xl p-4">
                <div class="flex items-center justify-between">
                  <span class="text-sm font-medium text-gray-600">Texnik yordam</span>
                  <span class="text-sm font-bold text-blue-600">24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// User information
const userInfo = ref({
  username: '',
  loginTime: new Date()
})

// Get user info from localStorage or route params
// onMounted(() => {
//   const route = useRoute()
//   const storedUser = process.client ? localStorage.getItem('userInfo') : null
  
//   if (storedUser) {
//     userInfo.value = JSON.parse(storedUser)
//   } else if (route.query.user) {
//     userInfo.value = {
//       username: route.query.user,
//       loginTime: new Date()
//     }
//   } else {
//     // Redirect to home if no user data
//     navigateTo('/')
//   }
// })

// Format date
const formatDate = (date) => {
  return new Date(date).toLocaleDateString('uz-UZ', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

// Format time only
const formatTime = (date) => {
  return new Date(date).toLocaleTimeString('uz-UZ', {
    hour: '2-digit',
    minute: '2-digit'
  })
}

// Logout function
const logout = () => {
  if (process.client) {
    localStorage.removeItem('userInfo')
  }
  navigateTo('/')
}

// SEO
useHead({
  title: 'Profil - AUD-IT SOFT',
  meta: [
    { name: 'description', content: 'Foydalanuvchi profili va boshqaruv paneli' }
  ]
})
</script>