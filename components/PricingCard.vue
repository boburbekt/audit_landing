<template>
  <div
    :class="[
      'w-full md:w-[300px] rounded-xl shadow-lg p-6 flex flex-col justify-between',
      highlight ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white' : 'bg-white text-gray-800'
    ]"
  >
    <div>
      <span class="text-2xl font-bold block mb-2">{{ price }}</span>
      <h4 class="text-xl font-semibold mb-4">{{ title }}</h4>
      <div class="mb-4">
        <img :src="icon" alt="Icon" class="w-12 h-12 mx-auto" />
      </div>
      <ul class="space-y-2 text-sm">
        <li v-for="(feature, index) in features" :key="index">- {{ feature }}</li>
      </ul>
    </div>
    <div class="mt-6">
      <a
        href="#"
        :class="[
          'inline-block px-4 py-2 rounded border transition duration-300',
          highlight
            ? 'border-white text-white hover:bg-white hover:text-indigo-600'
            : 'border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white'
        ]"
      >
        Batafsil ->
      </a>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  price: String,
  icon: String,
  features: Array,
  highlight: Boolean
})
</script>
