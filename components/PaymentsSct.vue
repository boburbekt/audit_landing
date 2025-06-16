<template>
  <section class="py-8 sm:py-12 lg:py-16 bg-gray-100" id="tolovlar">
    <div class="max-w-7xl mx-auto text-center mb-8 sm:mb-12 px-4">
      <h4 class="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 mb-4">
        Bizda eng yaxshi oldindan buyurtma narxlari!
      </h4>
      <img src="/assets/img/heading-line-dec.png" alt="Heading Line" class="mx-auto mb-2 max-w-xs">
      <p class="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
        Narxlar premium tariflarga moslab yozilgan. Narxlar o'zgarishi mumkin.
      </p>
    </div>

    <!-- Cards Container -->
    <div class="max-w-7xl mx-auto px-4">
      <!-- -->
      <div class="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8">
        <div class="w-[30%] card-pay ">
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

        <div class="w-[30%] card-pay ">
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

        <div class="w-[30%] card-pay ">
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
    </div>
  </section>
</template>

<script>
import lap from '../assets/img/laptop.png'
import PricingCard from './PricingCard.vue'

export default {
  components: {
    PricingCard
  },
  data() {
    return {
      lap: lap
    }
  },
};
</script>
<style scoped lang="scss">
@media (max-width: 800px) {
  .flex{
    .card-pay{
      width: 80%;
    }
  }
}
</style>