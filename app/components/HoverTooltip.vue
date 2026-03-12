<template>
  <div
    class="hover-tooltip"
    @mouseenter="show = true"
    @mouseleave="show = false"
    @touchstart.passive="show = true"
    @touchend.passive="show = false"
  >
    <slot />
    <Transition name="tooltip">
      <div
        v-if="show && text"
        class="hover-tooltip-popup"
      >
        {{ text }}
        <div class="hover-tooltip-arrow" />
      </div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

defineProps<{
  text?: string
}>();

const show = ref(false);
</script>

<style lang="scss" scoped>
.hover-tooltip {
  position: relative;
  display: inline-flex;

  .hover-tooltip-popup {
    position: absolute;
    bottom: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    padding: 6px 10px;
    border-radius: 6px;
    background: #1f2937;
    color: #fff;
    font-size: 0.7rem;
    font-weight: 400;
    line-height: 1.4;
    white-space: normal;
    width: max-content;
    max-width: 200px;
    pointer-events: none;
    z-index: 50;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  .hover-tooltip-arrow {
    position: absolute;
    bottom: -4px;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    width: 8px;
    height: 8px;
    background: #1f2937;
  }
}

.tooltip-enter-active,
.tooltip-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}

.tooltip-enter-from,
.tooltip-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(4px);
}
</style>
