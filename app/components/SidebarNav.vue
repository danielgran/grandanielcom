<template>
  <div class="flex flex-col h-full">
    <!-- Profile Card -->
    <div class="flex flex-col items-center px-6 pt-8 pb-6">
      <div class="w-28 h-28 rounded-full bg-gray-200 border-4 border-white shadow-md overflow-hidden mb-4 flex items-center justify-center">
        <img
          v-if="!imgError"
          :src="'/images/profile.png'"
          alt="Daniel Gran, B. Eng."
          class="w-full h-full object-cover"
          @error="imgError = true"
        />
        <span
          v-else
          class="text-2xl font-bold text-gray-400 select-none"
        >DG</span>
      </div>
      <h2 class="text-lg font-bold text-gray-900 uppercase tracking-wider">
        Daniel Gran, B. Eng.
      </h2>
      <p class="text-sm text-accent-600 font-medium mt-1">
        Software Engineer
      </p>
    </div>

    <!-- Divider -->
    <div class="mx-6 border-t border-gray-200" />

    <!-- Navigation Links -->
    <nav class="flex-1 px-4 py-6">
      <ul class="space-y-1">
        <li
          v-for="link in navLinks"
          :key="link.to"
        >
          <NuxtLink
            :to="link.to"
            class="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors"
            :class="isActive(link.to)
              ? (link.highlight ? 'bg-yellow-50 text-yellow-700 border-l-[3px] border-yellow-500' : 'bg-accent-50 text-accent-700 border-l-[3px] border-accent-600')
              : (link.highlight ? 'text-yellow-600 hover:bg-yellow-50 hover:text-yellow-800' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900')"
            @click="$emit('navigate')"
          >
            <Icon
              :name="link.icon"
              class="w-4 h-4 shrink-0"
            />
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>
    </nav>

    <!-- Divider -->
    <div class="mx-6 border-t border-gray-200" />

    <!-- Social Links -->
    <div class="flex items-center justify-center gap-4 px-6 py-5">
      <a
        href="mailto:contact@grandaniel.com"
        class="text-gray-400 hover:text-accent-600 transition-colors"
        aria-label="Email"
      >
        <Icon
          name="mdi:email-outline"
          class="w-5 h-5"
        />
      </a>
      <a
        href="https://github.com/danielgran"
        target="_blank"
        rel="noopener"
        class="text-gray-400 hover:text-accent-600 transition-colors"
        aria-label="GitHub"
      >
        <Icon
          name="mdi:github"
          class="w-5 h-5"
        />
      </a>
      <a
        href="https://linkedin.com/in/grandaniel"
        target="_blank"
        rel="noopener"
        class="text-gray-400 hover:text-accent-600 transition-colors"
        aria-label="LinkedIn"
      >
        <Icon
          name="mdi:linkedin"
          class="w-5 h-5"
        />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";

defineEmits<{
  navigate: []
}>();

const route = useRoute();
const imgError = ref(false);

const navLinks = [
  { to: "/", label: "Über mich", icon: "mdi:account-outline" },
  { to: "/skills", label: "Kenntnisse", icon: "mdi:code-tags", highlight: true },
  { to: "/experience", label: "Berufserfahrung", icon: "mdi:briefcase-outline" },
  { to: "/education", label: "Ausbildung", icon: "mdi:school-outline" },
  { to: "/projects", label: "Projekte", icon: "mdi:folder-outline" },
  { to: "/achievements", label: "Erfolge", icon: "mdi:trophy-outline" },
  { to: "/hobbies", label: "Hobbys", icon: "mdi:heart-outline" },
  { to: "/publications", label: "Publikationen", icon: "mdi:file-document-outline" },
  { to: "/contact", label: "Kontakt", icon: "mdi:chat-outline" },
];

function isActive(to: string) {
  if (to === "/") return route.path === "/";
  return route.path.startsWith(to);
}
</script>
