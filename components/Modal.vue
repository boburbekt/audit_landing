<template>
  <Transition name="fade">
    <div
      v-if="open"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
      @click.self="closeModal"
    >
      <div :class="['bg-white rounded-xl shadow-lg transition-all', modalSizeClass]">
        <button class="absolute top-2 right-2 text-black text-xl" @click="closeModal" v-if="false">
          
        </button>
        <div class="p-4 border-b">
          <slot name="header" />
        </div>
        <div class="">
          <slot name="body" />
        </div>
        <div class="p-4 border-t text-right">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, computed, watch, defineEmits, defineProps } from 'vue'

const emit = defineEmits(['open', 'close'])

const props = defineProps({
  size: {
    type: String,
    default: 'md',
  },
})

const open = ref(false)

const modalSizeClass = computed(() => {
  const size = props.size.toLowerCase()
  if (size === 'sm') return 'w-80'
  if (size === 'lg') return 'w-[768px]'
  return 'w-[425px]' // default md
})

function openModal() {
  open.value = true
  emit('open')
}

function closeModal() {
  open.value = false
  emit('close')
}

defineExpose({ openModal, closeModal })
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
