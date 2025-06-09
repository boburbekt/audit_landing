<template>
  <div class="font-sans text-gray-800">
    <Header />

    <!-- Zamonaviy Hero Section -->
    <section id="hero" class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-green-50/30">
      <!-- Animated background elements -->
      <div class="absolute inset-0 overflow-hidden">
        <!-- Floating geometric shapes -->
        <div class="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-green-400/20 to-emerald-500/20 rounded-full blur-xl animate-pulse"></div>
        <div class="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-blue-400/15 to-green-400/15 rounded-full blur-2xl animate-bounce"></div>
        <div class="absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-r from-emerald-400/20 to-blue-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        
        <!-- Grid pattern overlay -->
        <div class="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 pt-1">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <!-- Chap tomon - Matn va button -->
          <div class="space-y-8 lg:space-y-10">
            <!-- Main heading with gradient -->
            <div class="space-y-6">
              <h1 class="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight">
                <span class="bg-gradient-to-r from-green-600 via-emerald-500 to-green-600 bg-clip-text text-transparent ">
                  Siz emas,
                </span>
                <br>
                <span class="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-clip-text text-transparent">
                  siz uchun
                </span>
                <br>
                <span class="">
                  bizning tizim ishlaydi.
                </span>
              </h1>
              
              <p class="text-xl lg:text-2xl text-gray-600 font-medium leading-relaxed">
                Biznesingizni to'liq avtomatlashtiring va vaqtingizni tejang
              </p>
            </div>

            <!-- Telefon button -->
            <div class="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <a 
                href="tel:+998781138806" 
                class="group relative bg-gradient-to-r from-green-600 via-green-700 to-emerald-800 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-500 hover:from-green-500 hover:via-green-600 hover:to-emerald-700 hover:scale-105 hover:rotate-1 shadow-2xl hover:shadow-3xl hover:shadow-green-500/30 overflow-hidden flex items-center space-x-3 "
              >
                <!-- Animated background overlay -->
                <span class="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                
                <!-- Shimmer effect -->
                <span class="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                
                <!-- Phone icon -->
                <svg class="relative z-10 w-6 h-6 transform group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                
                <!-- Button text -->
                <span class="relative z-10 flex flex-col items-start">
                  <span class="text-sm opacity-90">Qo'ng'iroq qiling</span>
                  <span class="text-lg font-bold">+998 78 113 88 06</span>
                </span>
                
                <!-- Pulse animation -->
                <span class="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping"></span>
              </a>
            </div>

            <!-- Statistics -->
            <div class="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200/50" v-if="false">
              <div class="text-center">
                <div class="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">100+</div>
                <div class="text-sm text-gray-600 mt-1">Mijozlar</div>
              </div>
              <div class="text-center">
                <div class="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">98%</div>
                <div class="text-sm text-gray-600 mt-1">Mamnunlik</div>
              </div>
              <div class="text-center">
                <div class="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">24/7</div>
                <div class="text-sm text-gray-600 mt-1">Xizmat</div>
              </div>
            </div>
          </div>

          <!-- O'ng tomon - Rasm va animatsiya -->
          <div class="relative lg:h-96">
            <div class="relative w-full h-80 lg:h-96 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-700 group">
              
              <!-- Zamonaviy korxona avtomatlashtirish rasmi -->
              <div class="absolute inset-0 bg-gradient-to-br from-blue-600/90 via-green-600/80 to-emerald-600/90">
                <!-- Dashboard mockup -->
                <div class="absolute inset-6 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                  <!-- Header -->
                  <div class="flex items-center justify-between mb-6">
                    <div class="flex items-center space-x-3">
                      <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div class="text-xs text-gray-500 font-mono">Biznes Dashboard</div>
                  </div>
                  
                  <!-- Analytics cards -->
                  <div class="grid grid-cols-2 gap-3 mb-4">
                    <div class="bg-gradient-to-r from-green-50 to-emerald-50 p-3 rounded-xl border border-green-200">
                      <div class="text-xs text-green-600 font-semibold mb-1">Sotuv</div>
                      <div class="text-lg font-bold text-green-700">
                        <span class="animate-pulse">+24%</span>
                      </div>
                    </div>
                    <div class="bg-gradient-to-r from-blue-50 to-cyan-50 p-3 rounded-xl border border-blue-200">
                      <div class="text-xs text-blue-600 font-semibold mb-1">Mijozlar</div>
                      <div class="text-lg font-bold text-blue-700">
                        <span class="animate-pulse">1,234</span>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Chart mockup -->
                  <div class="bg-gray-50 rounded-xl p-3 border">
                    <div class="flex items-end justify-between space-x-1 h-16">
                      <div class="bg-gradient-to-t from-green-500 to-green-400 rounded-t w-4 h-8 animate-pulse"></div>
                      <div class="bg-gradient-to-t from-blue-500 to-blue-400 rounded-t w-4 h-12 animate-pulse delay-100"></div>
                      <div class="bg-gradient-to-t from-emerald-500 to-emerald-400 rounded-t w-4 h-16 animate-pulse delay-200"></div>
                      <div class="bg-gradient-to-t from-green-500 to-green-400 rounded-t w-4 h-10 animate-pulse delay-300"></div>
                      <div class="bg-gradient-to-t from-blue-500 to-blue-400 rounded-t w-4 h-14 animate-pulse delay-500"></div>
                    </div>
                  </div>
                  
                  <!-- Status indicators -->
                  <div class="flex items-center justify-between mt-4 text-xs">
                    <div class="flex items-center space-x-2">
                      <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span class="text-gray-600">Avtomatik</span>
                    </div>
                    <div class="flex items-center space-x-2">
                      <div class="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-300"></div>
                      <span class="text-gray-600">Real-time</span>
                    </div>
                  </div>
                </div>
                
                <!-- Floating elements -->
                <div class="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full shadow-lg animate-bounce opacity-80"></div>
                <div class="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-r from-blue-400 to-green-400 rounded-full shadow-lg animate-pulse opacity-80"></div>
              </div>
              
              <!-- Glow effect -->
              <div class="absolute inset-0 bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
            </div>
            
            <!-- Floating tech icons -->
            <div class="absolute -top-8 -left-8 w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
              <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
              </svg>
            </div>
            
            <div class="absolute -bottom-8 -right-8 w-12 h-12 bg-white rounded-xl shadow-xl flex items-center justify-center group-hover:-rotate-12 transition-transform duration-500">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>

    <section id="xizmatlar" class="py-20 bg-white">
      <div class="max-w-5xl mx-auto text-center">
        <h2 class="text-3xl font-semibold mb-10">Xizmatlarimiz</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div class="p-6 border rounded">Websayt ishlab chiqish</div>
          <div class="p-6 border rounded">Mobil ilovalar</div>
          <div class="p-6 border rounded">Texnik qo'llab-quvvatlash</div>
        </div>
      </div>
    </section>

    <section id="loyihalar" class="py-20 bg-gray-50">
      <div class="max-w-5xl mx-auto text-center">
        <h2 class="text-3xl font-semibold mb-10">Loyihalarimiz</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="p-4 border rounded">Loyiha 1</div>
          <div class="p-4 border rounded">Loyiha 2</div>
          <div class="p-4 border rounded">Loyiha 3</div>
        </div>
      </div>
    </section>

    <section id="tolovlar" class="py-20 bg-white">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="text-3xl font-semibold mb-6">To'lovlar</h2>
        <p class="mb-4">Xizmatlar uchun to'lovlar online tarzda amalga oshiriladi.</p>
        <button class="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700">To'lov qilish</button>
      </div>
    </section>

    <section id="aloqa" class="py-20 bg-gray-100">
      <div class="max-w-2xl mx-auto text-center">
        <h2 class="text-3xl font-semibold mb-6">Aloqa</h2>
        <p>Email: info@example.com</p>
        <p>Telefon: +998 90 123 45 67</p>
        <form class="mt-6 grid gap-4">
          <input type="text" placeholder="Ismingiz" class="p-2 border rounded" />
          <input type="email" placeholder="Email" class="p-2 border rounded" />
          <textarea placeholder="Xabar" rows="4" class="p-2 border rounded"></textarea>
          <button type="submit" class="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Yuborish</button>
        </form>
      </div>
    </section>

    <footer class="text-center py-4 bg-gray-800 text-white">
      © 2025 Barcha huquqlar himoyalangan
    </footer>
  </div>
</template>

<script>
import Header from './components/header.vue'

export default {
  components: {
    Header
  }
}
</script>