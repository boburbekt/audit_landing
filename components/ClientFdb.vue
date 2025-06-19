<template>
  <div class="container mx-auto px-4 py-16 relative overflow-hidden">
    <!-- Clean background with animated shapes -->
    <div class="absolute inset-0 bg-gray-50"></div>
    <div class="absolute inset-0">
      <div class="absolute top-20 left-10 w-20 h-20 bg-green-300 rounded-full opacity-20 animate-pulse"></div>
      <div class="absolute bottom-20 right-10 w-32 h-32 bg-emerald-300 rounded-full opacity-20"></div>
      <div class="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-300 rounded-full opacity-20 animate-ping animation-delay-2000"></div>
      <div class="absolute top-1/3 right-1/4 w-24 h-24 bg-teal-300 rounded-full opacity-15 animate-pulse animation-delay-3000"></div>
    </div>

    <div class="relative z-10">
      <!-- Header with enhanced styling -->
      <div class="text-center mb-12">
        <h2 class="text-4xl lg:text-5xl font-bold mb-6 relative">
          <span class="bg-gradient-to-r from-green-600 via-emerald-500 to-blue-600 bg-clip-text text-transparent">
            Mijozlar fikri
          </span>
          <div class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full animate-pulse"></div>
        </h2>
        <p class="text-gray-600 text-lg mt-6">Bizning mijozlarimizning fikr-mulohazalari</p>
      </div>

      <!-- Main carousel container -->
      <div 
        class="relative flex items-center justify-center"
        @mouseenter="pauseAutoplay"
        @mouseleave="resumeAutoplay"
      >
        <!-- Navigation buttons with enhanced design -->
        <button
          @click="prev"
          class="absolute left-4 z-20 p-4 bg-white/90 backdrop-blur-sm shadow-xl rounded-full hover:bg-white hover:scale-110 transition-all duration-300 group border border-gray-200"
        >
          <span class="w-6 h-6 text-gray-700 group-hover:text-green-600 transition-colors" >
            <
          </span>
        </button>

        <!-- Testimonial card with green border and transition effects -->
        <div class="w-[85%] lg:w-[70%] relative">
          <Transition name="slide-fade" mode="out-in">
            <div 
              :key="activeIndex"
              class="relative p-8 rounded-3xl shadow-lg border-2 border-green-400 bg-white transform transition-all duration-500 hover:shadow-2xl hover:border-green-500 "
            >
              <!-- Hover glow effect -->
              <div class="absolute inset-0 bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-teal-500/10 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              
              <!-- Floating elements -->
              <div class="absolute -top-4 -right-4 w-8 h-8 bg-green-100 rounded-full animate-bounce animation-delay-500"></div>
              <div class="absolute -bottom-2 -left-2 w-6 h-6 bg-emerald-100 rounded-full animate-ping animation-delay-1500"></div>

              <div class="relative z-10">
                <!-- Company header with enhanced animation -->
                <div class="flex items-center fade-in-up flex-wrap">
                  <div class="text-6xl mr-6 w-[30%] flex align-center justify-center img-content mx-auto">
                    <img width="250" height="250" :src="testimonials[activeIndex].logo" alt="">
                  </div>
                  <div class="w-[60%] text-content mx-auto">
                    <h3 class="text-2xl font-bold text-gray-800 mb-2">
                      {{ testimonials[activeIndex].company }}
                    </h3>
                    <p class="text-gray-600 text-sm bg-gray-100 px-3 py-1 rounded-full border">
                      {{ testimonials[activeIndex].date }} | {{ testimonials[activeIndex].category }}
                    </p>
                     <p class="text-gray-700 text-lg leading-relaxed font-medium">
                    "{{ testimonials[activeIndex].testimonial }}"
                  </p>
                  <div class="flex items-center justify-between fade-in-up animation-delay-600">
                 <div class="flex">
                   <span
                     v-for="(star, index) in renderStars(testimonials[activeIndex].rating)"
                     :key="index"
                     class="text-yellow-500 text-2xl mr-1 animate-pulse"
                     :style="{ animationDelay: `${index * 0.1}s` }"
                   >
                     <template v-if="star === 'full'">★</template>
                     <template v-else-if="star === 'half'">★</template>
                     <template v-else>☆</template>
                   </span>
                   <span class="ml-2 text-gray-600 font-semibold">
                     {{ testimonials[activeIndex].rating }}/5.0
                   </span>
                 </div>
                 <!-- Play/Pause button -->
                 <button
                   @click="toggleAutoplay"
                   class="p-2 bg-gray-100 border rounded-full hover:bg-gray-200 transition-all duration-300"
                 >
                 <svg v-if="isPlaying" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <rect x="6" y="4" width="4" height="16" fill="black"/>
                      <rect x="14" y="4" width="4" height="16" fill="black"/>
                  </svg>
                 <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <polygon points="6,4 20,12 6,20" fill="black"/>
                 </svg>
                 </button>
               </div>
                  </div>
                </div>

                <!-- Testimonial text -->
                <div class="mb-6 fade-in-up animation-delay-400">
                 
                </div>
               
              </div>
            </div>
          </Transition>
        </div>

        <button
          @click="next"
          class="absolute right-4 z-20 p-4 bg-white/90 backdrop-blur-sm shadow-xl rounded-full hover:bg-white hover:scale-110 transition-all duration-300 group border border-gray-200"
        >
          <span class="w-6 h-6 text-gray-700 group-hover:text-green-600 transition-colors" >
            >
          </span>
        </button>
      </div>

      <!-- Enhanced dot indicators -->
      <div class="flex mt-8 justify-center space-x-4">
        <button
          v-for="(testimonial, index) in testimonials"
          :key="testimonial.id"
          @click="setActive(index)"
          class="relative transition-all duration-300 focus:outline-none"
          :class="activeIndex === index 
            ? 'w-12 h-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full' 
            : 'w-4 h-4 bg-gray-400 hover:bg-gray-600 rounded-full'"
        >
          <div 
            v-if="activeIndex === index"
            class="absolute inset-0 bg-white/30 rounded-full animate-pulse"
          ></div>
        </button>
      </div>

      <!-- Progress bar -->
      <div class="mt-6 mx-auto w-64 h-1 bg-gray-300 rounded-full overflow-hidden">
        <div 
          class="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full transition-all duration-300"
          :style="{ width: `${((activeIndex + 1) / testimonials.length) * 100}%` }"
        ></div>
      </div>

      <!-- Instructions -->
      <div class="text-center mt-8 text-gray-600 text-sm">
        <p>← → klavishalar bilan boshqaring | Space tugmasi bilan to'xtatish/davom ettirish</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import dori from '../assets/img/dori darmon.png'
import client from '../assets/img/clnt.png'
import invicta from '../assets/img/121212.png'
import bulut from '../assets/img/Bulut.png'

// Reactive data
const activeIndex = ref(0)
const isPlaying = ref(true)
const isHovered = ref(false)
let autoplayInterval = null

// Testimonials data
const testimonials = ref([
  {
    id: 0,
    company: '"Farg\'ona Dori-Darmon" AJ',
    date: '20 Aprel 2025',
    category: 'Audit Apteka',
    rating: 4.8,
    testimonial: 'AUD-IT SOFT kompaniyasi bilan hamkorlik qilganimizdan juda mamnunmiz. Ularning professional yondashuvi va sifatli xizmatlari bizning ishimizni yanada samarali qildi.',
    logo: dori
  },
  {
    id: 1,
    company: '"Nazirabegim" MCHJ',
    date: '29 Noyabr 2024',
    category: 'RESAUD',
    rating: 4.5,
    testimonial: 'AUD-IT SOFT bilan hamkorligimiz natijasida biznes jarayonlarimiz ancha soddalashdi. Jamoaning texnik qo\'llab-quvvatlashi a\'lo darajada.',
    logo: client
  },
  {
    id: 2,
    company: '"Fergana Invicta Pharm"',
    date: '16 May 2024',
    category: 'ERP',
    rating: 5.0,
    testimonial: 'Jamoaning professionalligi, texnik qo\'llab-quvvatlashdagi tezkorligi va mijozlarga bo\'lgan e\'tibori bizni juda mamnun qildi.',
    logo: invicta
  },
  {
    id: 3,
    company: '"Fergana Medical Sentr"',
    date: '7 May 2025',
    category: 'Audit Apteka',
    rating: 4.3,
    testimonial: 'Kompaniya jamoasi o\'z ishiga mas\'uliyat bilan yondashadi. Barcha talablarimiz o\'z vaqtida va sifatli bajarildi.',
    logo: client
  },
  {
    id: 4,
    company: '"Bulut Textile" MCHJ',
    date: '19 Avgust 2022',
    category: 'ERP',
    rating: 4.9,
    testimonial: 'Jamoa o\'z ishiga professional yondashadi. Texnik yechimlar zamonaviy va samarali. Tavsiya etamiz!',
    logo: bulut
  }
])

// Methods
const setActive = (index) => {
  activeIndex.value = index
}

const next = () => {
  activeIndex.value = (activeIndex.value + 1) % testimonials.value.length
}

const prev = () => {
  activeIndex.value = (activeIndex.value - 1 + testimonials.value.length) % testimonials.value.length
}

const toggleAutoplay = () => {
  isPlaying.value = !isPlaying.value
  if (isPlaying.value && !isHovered.value) {
    startAutoplay()
  } else {
    stopAutoplay()
  }
}

const pauseAutoplay = () => {
  isHovered.value = true
  stopAutoplay()
}

const resumeAutoplay = () => {
  isHovered.value = false
  if (isPlaying.value) {
    startAutoplay()
  }
}

const startAutoplay = () => {
  stopAutoplay()
  autoplayInterval = setInterval(next, 4000)
}

const stopAutoplay = () => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval)
    autoplayInterval = null
  }
}

const renderStars = (rating) => {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 !== 0
  const stars = []
  
  for (let i = 0; i < fullStars; i++) stars.push('full')
  if (hasHalfStar) stars.push('half')
  while (stars.length < 5) stars.push('empty')
  
  return stars
}

// Keyboard navigation
const handleKeyPress = (e) => {
  if (e.key === 'ArrowLeft') prev()
  if (e.key === 'ArrowRight') next()
  if (e.key === ' ') {
    e.preventDefault()
    toggleAutoplay()
  }
}

// Lifecycle hooks
onMounted(() => {
  if (isPlaying.value) {
    startAutoplay()
  }
  window.addEventListener('keydown', handleKeyPress)
})

onUnmounted(() => {
  stopAutoplay()
  window.removeEventListener('keydown', handleKeyPress)
})
</script>

<style scoped>
/* Custom animation delays */
.animation-delay-200 {
  animation-delay: 0.2s;
}

.animation-delay-400 {
  animation-delay: 0.4s;
}

.animation-delay-500 {
  animation-delay: 0.5s;
}

.animation-delay-600 {
  animation-delay: 0.6s;
}

.animation-delay-1000 {
  animation-delay: 1s;
}

.animation-delay-1500 {
  animation-delay: 1.5s;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-3000 {
  animation-delay: 3s;
}

/* Fade in up animation */
.fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Slide fade transition */
.slide-fade-enter-active {
  transition: all 0.7s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s ease-in;
}

.slide-fade-enter-from {
  opacity: 0;
  transform: translateX(50px) scale(0.95);
}

.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-50px) scale(0.95);
}

/* Smooth transitions */
button {
  transition: all 0.3s ease;
}
@media (max-width: 800px) {
  .img-content{
    width: 80%;
  }
  .text-content{
    width: 100%;
  }
}
</style>