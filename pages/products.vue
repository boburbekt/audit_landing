<template>
  <div class="font-sans text-gray-800 scroll-smooth">
    <!-- Product Detail Section -->
    <section class="relative min-h-screen py-5 bg-gradient-to-br from-slate-50 via-white to-green-50/30">
      <!-- Background decorations -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-green-400/20 to-emerald-500/20 rounded-full blur-xl animate-pulse"></div>
        <div class="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-blue-400/15 to-green-400/15 rounded-full blur-2xl animate-bounce"></div>
        <div class="absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-r from-emerald-400/20 to-blue-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>

      <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <!-- Breadcrumb -->
        <nav class="mb-8" data-aos="fade-up">
          <ol class="flex items-center space-x-2 text-sm">
            <li>
              <NuxtLink to="/" class="text-green-600 hover:text-green-700 transition-colors">
                Asosiy
              </NuxtLink>
            </li>
            <li class="text-gray-400">/</li>
            <li>
              <NuxtLink to="/#tolovlar" class="text-green-600 hover:text-green-700 transition-colors">
                Narxlar
              </NuxtLink>
            </li>
            <li class="text-gray-400">/</li>
            <li class="text-gray-600">{{ productData?.title }}</li>
          </ol>
        </nav>

        <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <!-- Left Side - Product Image -->
          <div class="relative" data-aos="fade-up-right">
            <div class="relative w-full h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-700 group">
              <div class="absolute inset-0 bg-gradient-to-br from-blue-600/90 via-green-600/80 to-emerald-600/90">
                <!-- Enhanced Dashboard mockup -->
                <div class="absolute inset-6 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                  <!-- Header -->
                  <div class="flex items-center justify-between mb-6">
                    <div class="flex items-center space-x-3">
                      <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div class="text-xs text-gray-500 font-mono">{{ productData?.title }}</div>
                  </div>
                  
                  <!-- Product-specific mockup content -->
                  <div v-if="slug === 'audit-apteka'" class="space-y-4">
                    <div class="grid grid-cols-2 gap-3">
                      <div class="bg-gradient-to-r from-blue-50 to-cyan-50 p-3 rounded-xl border border-blue-200">
                        <div class="text-xs text-blue-600 font-semibold mb-1">Dorilar</div>
                        <div class="text-lg font-bold text-blue-700">1,247</div>
                      </div>
                      <div class="bg-gradient-to-r from-green-50 to-emerald-50 p-3 rounded-xl border border-green-200">
                        <div class="text-xs text-green-600 font-semibold mb-1">Sotuvlar</div>
                        <div class="text-lg font-bold text-green-700">+18%</div>
                      </div>
                    </div>
                    
                    <div class="bg-gray-50 rounded-xl p-3 border">
                      <div class="text-xs text-gray-600 mb-2">Apteka filiallar</div>
                      <div class="flex items-center space-x-2">
                        <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span class="text-xs">Filial 1 - Faol</span>
                      </div>
                      <div class="flex items-center space-x-2 mt-1">
                        <div class="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                        <span class="text-xs">Filial 2 - Faol</span>
                      </div>
                    </div>
                  </div>

                  <div v-else-if="slug === 'audit-cafe'" class="space-y-4">
                    <div class="grid grid-cols-2 gap-3">
                      <div class="bg-gradient-to-r from-orange-50 to-red-50 p-3 rounded-xl border border-orange-200">
                        <div class="text-xs text-orange-600 font-semibold mb-1">Stollar</div>
                        <div class="text-lg font-bold text-orange-700">24/30</div>
                      </div>
                      <div class="bg-gradient-to-r from-purple-50 to-pink-50 p-3 rounded-xl border border-purple-200">
                        <div class="text-xs text-purple-600 font-semibold mb-1">Buyurtmalar</div>
                        <div class="text-lg font-bold text-purple-700">47</div>
                      </div>
                    </div>
                    
                    <div class="bg-gray-50 rounded-xl p-3 border">
                      <div class="text-xs text-gray-600 mb-2">Ofitsiantlar</div>
                      <div class="flex items-center space-x-2">
                        <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span class="text-xs">Ahmad - Faol</span>
                      </div>
                      <div class="flex items-center space-x-2 mt-1">
                        <div class="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                        <span class="text-xs">Olim - Band</span>
                      </div>
                    </div>
                  </div>

                  <div v-else class="space-y-4">
                    <div class="grid grid-cols-2 gap-3">
                      <div class="bg-gradient-to-r from-indigo-50 to-blue-50 p-3 rounded-xl border border-indigo-200">
                        <div class="text-xs text-indigo-600 font-semibold mb-1">Ishlab chiqarish</div>
                        <div class="text-lg font-bold text-indigo-700">89%</div>
                      </div>
                      <div class="bg-gradient-to-r from-emerald-50 to-teal-50 p-3 rounded-xl border border-emerald-200">
                        <div class="text-xs text-emerald-600 font-semibold mb-1">Buyurtmalar</div>
                        <div class="text-lg font-bold text-emerald-700">156</div>
                      </div>
                    </div>
                    
                    <div class="bg-gray-50 rounded-xl p-3 border">
                      <div class="text-xs text-gray-600 mb-2">Zavod liniyalari</div>
                      <div class="flex items-end justify-between space-x-1 h-12">
                        <div class="bg-gradient-to-t from-indigo-500 to-indigo-400 rounded-t w-3 h-8 animate-pulse"></div>
                        <div class="bg-gradient-to-t from-blue-500 to-blue-400 rounded-t w-3 h-10 animate-pulse delay-100"></div>
                        <div class="bg-gradient-to-t from-emerald-500 to-emerald-400 rounded-t w-3 h-12 animate-pulse delay-200"></div>
                        <div class="bg-gradient-to-t from-teal-500 to-teal-400 rounded-t w-3 h-9 animate-pulse delay-300"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Side - Product Details -->
          <div class="space-y-8" data-aos="fade-up-left">
            <!-- Title and Price -->
            <div class="space-y-4">
              <h1 class="text-4xl lg:text-5xl font-bold">
                <span class="bg-gradient-to-r from-green-600 via-emerald-500 to-green-600 bg-clip-text text-transparent">
                  {{ productData?.title }}
                </span>
              </h1>
              
              <div class="flex items-center space-x-4">
                <span class="text-3xl lg:text-4xl font-bold text-emerald-600">
                  {{ productData?.price }}
                </span>
              </div>
            </div>

            <!-- Description -->
            <div class="space-y-4">
              <h3 class="text-xl font-semibold text-gray-800">Tavsif</h3>
              <p class="text-gray-600 text-lg leading-relaxed">
                {{ productData?.description }}
              </p>
            </div>

            <!-- Features -->
            <div class="space-y-4">
              <h3 class="text-xl font-semibold text-gray-800">Asosiy xususiyatlar</h3>
              <ul class="space-y-3">
                <li 
                  v-for="(feature, index) in productData?.features" 
                  :key="index"
                  class="flex items-center space-x-3 text-gray-700"
                >
                  <span class="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold">
                    ✓
                  </span>
                  <span>{{ feature }}</span>
                </li>
              </ul>
            </div>

          
          </div>
        </div>
      </div>
    </section>
    <div class="w-[80%] mx-auto my-4">
          <!-- Technical Specs -->
            <div class="space-y-4">
              <h3 class="text-xl font-semibold text-gray-800">Texnik xususiyatlar</h3>
              <div class="bg-gray-50 rounded-xl p-6 space-y-3">
                <div v-for="(spec, key) in productData?.specs" :key="key" class="flex items-center justify-between border-b border-gray-200 pb-2">
                  <span class="font-medium text-gray-600">{{ key }}</span>
                  <span class="text-gray-800">{{ spec }}</span>
                </div>
              </div>
            </div>
            <!-- CTA Buttons -->
            <div class="flex justify-center align-center gap-4 pt-6">
              <a 
                href="tel:+998781138806" 
                class="group relative bg-gradient-to-r from-green-600 via-green-700 to-emerald-800 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-500 hover:from-green-500 hover:via-green-600 hover:to-emerald-700 hover:scale-105 shadow-2xl hover:shadow-3xl hover:shadow-green-500/30 overflow-hidden flex items-center justify-center space-x-3 w-[45%]"
              >
                <span class="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                <svg class="relative z-10 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span class="relative z-10">Buyurtma berish</span>
              </a>

              <NuxtLink 
                to="/#aloqa"
                class="border-2 border-green-600 text-green-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-green-600 hover:text-white transition-all duration-300 text-center flex items-center justify-center space-x-2 w-[45%]"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                </svg>
                <span>Aloqa</span>
              </NuxtLink>
            </div>
    </div>
  </div>
</template>

<script setup>

const route = useRoute()
const slug = route.query.type

// Product data based on slug
const productData = computed(() => {
  const products = {
    'audit-apteka': {
      title: 'AUDIT APTEKA',
      price: '$320',
      oldPrice: '$450',
      description: 'Apteka biznesingizni to\'liq avtomatlashtiruvchi professional tizim. Dori vositalari, ombor boshqaruvi va filiallar nazoratini bir joyda boshqaring.',
      features: [
        'Dori vositalari hisoboti va nazorati',
        'Ombor boshqaruvi va inventarizatsiya',
        'Filiallar nazorati va monitoring',
        'Qulay va zamonaviy interfeys',
        'Real-time hisobotlar',
        'Mobil ilova bilan integratsiya',
        'Xavfsizlik va ma\'lumotlar himoyasi'
      ],
      specs: {
        'Foydalanuvchilar soni': 'Cheksiz',
        'Filiallar soni': '10 tagacha',
        'Ma\'lumotlar bazasi': 'Cloud/Local',
        'Texnik yordam': '24/7',
        'Yangilanish': 'Bepul (1 yil)',
        'Integratsiya': 'API mavjud'
      }
    },
    'audit-cafe': {
      title: 'AUDIT CAFE',
      price: '$400',
      oldPrice: '$550',
      description: 'Restoran va kafe biznesingizni zamonaviy usulda boshqarish uchun professional tizim. Buyurtmalar, ofitsiantlar va stol rezervatsiyasini oson boshqaring.',
      features: [
        'Ofitsiantlar roli va vazifalari',
        'Stol rezervatsiyasi tizimi',
        'Analitik hisobotlar va statistika',
        'Qulay va zamonaviy interfeys',
        'Mobil buyurtma tizimi',
        'Oshxona bilan bog\'lanish',
        'Mijozlar ma\'lumotlar bazasi'
      ],
      specs: {
        'Stollar soni': 'Cheksiz',
        'Ofitsiantlar': '20 tagacha',
        'Menyu elementlari': 'Cheksiz',
        'Texnik yordam': '24/7',
        'Yangilanish': 'Bepul (1 yil)',
        'Mobil ilova': 'Android/iOS'
      }
    },
    'audit-erp': {
      title: 'AUDIT ERP',
      price: '$800',
      oldPrice: '$1200',
      description: 'Zavod va ishlab chiqarish korxonalari uchun to\'liq ERP tizimi. Ishlab chiqarish jarayonlarini, buyurtma zanjirini va resurslarni professional darajada boshqaring.',
      features: [
        'Zavod va ishlab chiqarish boshqaruvi',
        'Ishlab chiqarish rejalashtirish',
        'Buyurtma zanjiri boshqaruvi',
        'Hisobotlar va analytics moduli',
        'Xodimlar boshqaruvi',
        'Moliya va buxgalteriya',
        'Sklad va logistika'
      ],
      specs: {
        'Modullar soni': '15+',
        'Foydalanuvchilar': 'Cheksiz',
        'Ma\'lumotlar hajmi': 'Cheksiz',
        'Texnik yordam': '24/7 Premium',
        'Yangilanish': 'Bepul (2 yil)',
        'Customization': 'To\'liq'
      }
    }
  }
  
  return products[slug] || products['audit-apteka']
})

// SEO
useHead({
  title: `${productData.value?.title} - AUD-IT SOFT`,
  meta: [
    { name: 'description', content: productData.value?.description }
  ]
})
</script>