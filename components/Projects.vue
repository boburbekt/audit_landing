<script>
import TestimonialsSection from './ClientFdb.vue';
export default {
  components: {
    TestimonialsSection
  }
};
</script>
<template>
  <!-- Biz haqimizda bo'limi -->
  <section id="loyihalar" class="py-20 bg-gradient-to-br from-slate-50 via-white to-green-50/30 relative overflow-hidden">
    <!-- Background decorative elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-green-400/10 to-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-blue-400/10 to-green-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16" data-aos="fade-up">
        <h2 class="text-4xl lg:text-5xl font-bold mb-6">
          <span class="bg-gradient-to-r from-green-600 via-emerald-500 to-blue-600 bg-clip-text text-transparent">
            Biz haqimizda
          </span>
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Biznesingizni raqamlashtirish va avtomatlashtirish sohasida ishonchli hamkoringiz
        </p>
      </div>

      <!-- Statistics Grid -->
     <div class="grid lg:grid-cols-2 gap-12 items-center">
  <!-- text  -->
  <div>
    <p class="text-lg text-gray-600 leading-relaxed">
      "AUD-IT SOFT" MChJ 2022-yilda tashkil etilgan bo'lib, asosan hisob-kitob jarayonlarini optimallashtirish va avtomatlashtirishga ixtisoslashgan dasturchilar jamoasidan iborat. Bizning jamoamiz, dasturlash bilan birga buxgalteriya va auditga oid bilimlarni doimiy ravishda o'zlashtirib boradi. Bizdagi bilim va sizdagi tajriba aynan manashu yerda uyg'unlashadi.
    </p>
  </div>

  <!-- Grid  -->
  <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
    <!-- Card -->
    <div class="bg-white rounded-3xl p-6 shadow-lg border border-gray-100 hover:border-green-300 transition-all group hover:-translate-y-1">
      <div class="flex items-center space-x-4 mb-2">
        <div class="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div class="text-3xl font-bold text-green-700 counter" data-target="5">5+</div>
      </div>
      <div class="text-gray-600 text-sm">Yil tajriba</div>
    </div>

    <!-- Card -->
    <div class="bg-white rounded-3xl p-6 shadow-lg border border-gray-100 hover:border-blue-300 transition-all group hover:-translate-y-1">
      <div class="flex items-center space-x-4 mb-2">
        <div class="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
          </svg>
        </div>
        <div class="text-3xl font-bold text-blue-700 counter" data-target="150">100+</div>
      </div>
      <div class="text-gray-600 text-sm">Mamnun mijozlar</div>
    </div>

    <!-- Card -->
    <div class="bg-white rounded-3xl p-6 shadow-lg border border-gray-100 hover:border-purple-300 transition-all group hover:-translate-y-1">
      <div class="flex items-center space-x-4 mb-2">
        <div class="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
          </svg>
        </div>
        <div class="text-3xl font-bold text-purple-700 counter" data-target="12">10+</div>
      </div>
      <div class="text-gray-600 text-sm">Malakali mutaxassis</div>
    </div>

    <!-- Card -->
    <div class="bg-white rounded-3xl p-6 shadow-lg border border-gray-100 hover:border-orange-300 transition-all group hover:-translate-y-1">
      <div class="flex items-center space-x-4 mb-2">
        <div class="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
          </svg>
        </div>
        <div class="text-3xl font-bold text-orange-700 counter" data-target="200">10+</div>
      </div>
      <div class="text-gray-600 text-sm">Bajarilgan loyihalar</div>
    </div>
  </div>
</div>
</div>


      <!-- Mission & Vision -->
      <div class="grid lg:grid-cols-2 gap-12 items-center" v-if="false">
        <div class="space-y-8" data-aos="fade-right">
          <div>
            <p class="text-lg text-gray-600 leading-relaxed">
              "AUD-IT SOFT" MChJ 2022-yilda tashkil etilgan bo'lib, asosan hisob-kitob jarayonlarini optimallashtirish va avtomatlashtirishga ixtisoslashgan dasturchilar jamoasidan iborat. Bizning jamoamiz, dasturlash bilan birga buxgalteriya va auditga oid bilimlarni doimiy ravishda o'zlashtirib boradi. Bizdagi bilm va sizdagi tajriba aynan manashu yerda uyg'unlashadi.
            </p>
          </div>
       
        </div>
        
        <div class="relative" data-aos="fade-left">
          <div class="relative w-full h-80 lg:h-96 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-700 group">
            <div class="absolute inset-0 bg-gradient-to-br from-green-600/90 via-blue-600/80 to-emerald-600/90">
              <!-- Team collaboration mockup -->
              <div class="absolute inset-6 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                <!-- Team avatars -->
                <div class="flex items-center justify-center space-x-4 mb-6">
                  <div class="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                    <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
                    </svg>
                  </div>
                  <div class="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center">
                    <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
                    </svg>
                  </div>
                  <div class="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                    <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
                    </svg>
                  </div>
                </div>
                
                <!-- Connection lines -->
                <div class="relative mb-6">
                  <svg class="w-full h-16" viewBox="0 0 200 60">
                    <defs>
                      <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style="stop-color:#10b981;stop-opacity:1" />
                        <stop offset="50%" style="stop-color:#3b82f6;stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#8b5cf6;stop-opacity:1" />
                      </linearGradient>
                    </defs>
                    <path d="M20 30 Q100 10 180 30" stroke="url(#lineGradient)" stroke-width="2" fill="none" class="animate-pulse"/>
                    <path d="M20 30 Q100 50 180 30" stroke="url(#lineGradient)" stroke-width="2" fill="none" class="animate-pulse" style="animation-delay: 0.5s"/>
                  </svg>
                </div>
                
                <!-- Success metrics -->
                <div class="grid grid-cols-3 gap-3 text-center">
                  <div class="p-2 bg-green-50 rounded-lg">
                    <div class="text-lg font-bold text-green-600">98%</div>
                    <div class="text-xs text-green-600">Muvaffaqiyat</div>
                  </div>
                  <div class="p-2 bg-blue-50 rounded-lg">
                    <div class="text-lg font-bold text-blue-600">24/7</div>
                    <div class="text-xs text-blue-600">Qo'llab-quvvatlash</div>
                  </div>
                  <div class="p-2 bg-purple-50 rounded-lg">
                    <div class="text-lg font-bold text-purple-600">100%</div>
                    <div class="text-xs text-purple-600">Kafolat</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TestimonialsSection />

  </section> 
</template>
 <style scoped>

  </style>