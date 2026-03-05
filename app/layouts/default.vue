<template>
  <div class="flex min-h-screen bg-white">
    <!-- Desktop Sidebar -->
    <aside class="sidebar-nav hidden lg:flex flex-col w-[280px] min-w-[280px] h-screen sticky top-0 bg-[#fafafa] border-r border-gray-200 overflow-y-auto">
      <SidebarNav />
    </aside>

    <!-- Mobile Header -->
    <MobileHeader
      class="lg:hidden"
      @toggle-nav="mobileNavOpen = !mobileNavOpen"
    />

    <!-- Mobile Nav Overlay -->
    <div
      class="fixed inset-0 z-40 mobile-nav-overlay"
      :class="mobileNavOpen ? 'is-open' : 'is-closed'"
    >
      <div
        class="absolute inset-0 bg-black/30"
        @click="mobileNavOpen = false"
      />
      <div
        class="mobile-nav-drawer absolute left-0 top-0 bottom-0 w-[280px] bg-[#fafafa] shadow-xl overflow-y-auto"
        :class="mobileNavOpen ? 'is-open' : 'is-closed'"
      >
        <SidebarNav @navigate="mobileNavOpen = false" />
      </div>
    </div>

    <!-- Main Content -->
    <main class="flex-1 min-w-0 lg:pt-0 pt-16">
      <div class="max-w-4xl mx-auto px-6 py-10 lg:px-12 lg:py-14">
        <slot />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

const mobileNavOpen = ref(false);

// Close mobile nav on route change
const route = useRoute();
watch(() => route.path, () => {
  mobileNavOpen.value = false;
});
</script>
