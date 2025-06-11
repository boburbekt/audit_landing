<template>
  <section id="aloqa" class="py-20 bg-gray-100">
    <div class="max-w-2xl mx-auto text-center">
      <h2 class="text-3xl font-semibold mb-6">Aloqa</h2>
      <p>Email: info@example.com</p>
      <p>Telefon: +998 90 123 45 67</p>
      <form class="mt-6 grid gap-4" @submit.prevent="handleSubmit">
        <input type="text" placeholder="Ismingiz" class="p-2 border rounded" />
        <input type="email" placeholder="Email" class="p-2 border rounded" />
        <textarea placeholder="Xabar" rows="4" class="p-2 border rounded"></textarea>
        <button type="submit" class="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Yuborish</button>
      </form>
    </div>
  </section>
</template>

<script setup>
const handleSubmit = () => {
  // Form submit logic
  console.log('Form yuborildi')
}
</script>