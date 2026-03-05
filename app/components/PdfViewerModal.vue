<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="modelValue"
        class="fixed inset-0 z-50 flex flex-col bg-gray-900/80 backdrop-blur-sm"
        @keydown.esc="$emit('update:modelValue', false)"
        @click.self="$emit('update:modelValue', false)"
      >
        <!-- Header bar -->
        <div class="flex items-center justify-between px-4 py-3 bg-gray-900 text-white shrink-0">
          <span class="text-sm font-medium truncate max-w-[70vw]">{{ title }}</span>
          <div class="flex items-center gap-3">
            <a
              :href="src"
              download
              class="flex items-center gap-1.5 text-xs text-gray-300 hover:text-white transition-colors"
            >
              <Icon
                name="mdi:download-outline"
                class="w-4 h-4"
              />
              Download
            </a>
            <button
              class="text-gray-300 hover:text-white transition-colors"
              aria-label="Schließen"
              @click="$emit('update:modelValue', false)"
            >
              <Icon
                name="mdi:close"
                class="w-5 h-5"
              />
            </button>
          </div>
        </div>

        <!-- PDF viewer -->
        <div class="flex-1 overflow-auto flex justify-center bg-gray-800 py-4 px-2">
          <div class="w-full max-w-4xl">
            <VuePdfEmbed
              :source="src"
              :width="pdfWidth"
              class="shadow-2xl"
            />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent, onMounted, onUnmounted } from "vue";

const VuePdfEmbed = defineAsyncComponent(() => import("vue-pdf-embed"));

defineProps<{
  modelValue: boolean
  src: string
  title: string
}>();

defineEmits<{
  "update:modelValue": [value: boolean]
}>();

const pdfWidth = ref(800);

function updateWidth() {
  pdfWidth.value = Math.min(window.innerWidth - 32, 800);
}

onMounted(() => {
  updateWidth();
  window.addEventListener("resize", updateWidth);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateWidth);
});
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.2s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
