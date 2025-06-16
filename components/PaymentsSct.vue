<template>
  <section class="py-16 bg-gray-100" id="tolovlar">
    <div class="max-w-4xl mx-auto text-center mb-12">
      <h4 class="text-3xl font-semibold text-gray-800 mb-4">
        Bizda eng yaxshi oldindan buyurtma narxlari!
      </h4>
      <img src="/assets/img/heading-line-dec.png" alt="Heading Line" class="mx-auto mb-2">
      <p class="text-gray-600">
        Narxlar premium tariflarga moslab yozilgan. Narxlar o'zgarishi mumkin.
      </p>
    </div>

    <!-- Cards -->
    <div class="flex flex-wrap justify-center gap-6 px-4">
      <div class="w-[30%] md:w-full">
        <PricingCard
          title="AUDIT APTEKA"
          price="$320"
          icon=""
          :features="[
            'Dori vositalari hisoboti',
            'Ombor boshqaruvi',
            'Filiallar nazorati',
            'Qulay va zamonaviy interfeys'
          ]"
        />
      </div>

      <div class="w-[30%] md:w-full">
        <PricingCard
          title="AUDIT CAFE"
          price="$400"
          :icon="lap"
          :features="[
            'Ofitsiantlar roli',
            'Stol rezervatsiyasi',
            'Analitik hisobotlar',
            'Qulay va zamonaviy interfeys'
          ]"
          highlight
        />
      </div>

      <div class="w-[30%] md:w-full">
        <PricingCard
          title="AUDIT ERP"
          price="$800"
          :icon="lap"
          :features="[
            'Zavod va ishlab chiqarish korxonalari uchun tizim',
            'Ishlab chiqarish',
            'Buyurtma zanjiri',
            'Hisobotlar moduli'
          ]"
        />
      </div>
    </div>
  </section>
</template>

<script >
import lap from '../assets/img/laptop.png'
import PricingCard from './PricingCard.vue'


export default {
  components :{
    PricingCard
  },
  data() {
    return {
      lap: lap
    }
  },
};
</script>
