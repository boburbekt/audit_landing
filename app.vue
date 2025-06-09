<template>
  <div class="font-sans text-gray-800">
    <Header />

    <section id="hero" class="h-screen flex items-center justify-center bg-blue-50">
      <div class="text-center">
        <h1 class="text-4xl font-bold mb-4">Biznesingiz uchun mukammal yechimlar</h1>
        <p class="text-lg mb-6">Tezkor, ishonchli va zamonaviy xizmatlar</p>
        <NuxtLink to="#xizmatlar" class="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Boshlash</NuxtLink>
      </div>
    </section>

    <section id="xizmatlar" class="py-20 bg-white">
      <div class="max-w-5xl mx-auto text-center">
        <h2 class="text-3xl font-semibold mb-10">Xizmatlarimiz</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div class="p-6 border rounded">Websayt ishlab chiqish</div>
          <div class="p-6 border rounded">Mobil ilovalar</div>
          <div class="p-6 border rounded">Texnik qo‘llab-quvvatlash</div>
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
        <h2 class="text-3xl font-semibold mb-6">To‘lovlar</h2>
        <p class="mb-4">Xizmatlar uchun to‘lovlar online tarzda amalga oshiriladi.</p>
        <button class="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700">To‘lov qilish</button>
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

<script >
import Header from './components/header.vue'
//  AOS.init();

</script>
