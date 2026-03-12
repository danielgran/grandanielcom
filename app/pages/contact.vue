<template>
  <div>
    <SectionHeader description="So erreichen Sie mich">
      Kontakt
    </SectionHeader>

    <div class="space-y-6">
      <!-- Kontaktoptionen -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <a
          href="mailto:contact@grandaniel.com"
          class="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:shadow-md hover:border-accent-200 transition-all group"
        >
          <div class="flex items-center justify-center w-10 h-10 rounded-lg bg-accent-50 text-accent-600 group-hover:bg-accent-100 transition-colors">
            <Icon
              name="mdi:email-outline"
              class="w-5 h-5"
            />
          </div>
          <div>
            <p class="text-sm font-semibold text-gray-900">E-Mail</p>
            <p class="text-sm text-gray-500">contact@grandaniel.com</p>
          </div>
        </a>

        <a
          href="tel:+4915792399937"
          class="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:shadow-md hover:border-accent-200 transition-all group"
        >
          <div class="flex items-center justify-center w-10 h-10 rounded-lg bg-accent-50 text-accent-600 group-hover:bg-accent-100 transition-colors">
            <Icon
              name="mdi:phone-outline"
              class="w-5 h-5"
            />
          </div>
          <div>
            <p class="text-sm font-semibold text-gray-900">Telefon</p>
            <p class="text-sm text-gray-500">+49 157 92399937</p>
          </div>
        </a>

        <div class="flex items-center gap-4 p-4 rounded-xl border border-gray-100">
          <div class="flex items-center justify-center w-10 h-10 rounded-lg bg-accent-50 text-accent-600">
            <Icon
              name="mdi:map-marker-outline"
              class="w-5 h-5"
            />
          </div>
          <div>
            <p class="text-sm font-semibold text-gray-900">
              Standort
            </p>
            <p class="text-sm text-gray-500">
              90547 Stein
            </p>
          </div>
        </div>

        <a
          href="https://github.com/danielgran"
          target="_blank"
          rel="noopener"
          class="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:shadow-md hover:border-accent-200 transition-all group"
        >
          <div class="flex items-center justify-center w-10 h-10 rounded-lg bg-accent-50 text-accent-600 group-hover:bg-accent-100 transition-colors">
            <Icon
              name="mdi:github"
              class="w-5 h-5"
            />
          </div>
          <div>
            <p class="text-sm font-semibold text-gray-900">GitHub</p>
            <p class="text-sm text-gray-500">grandaniel</p>
          </div>
        </a>

        <a
          href="https://linkedin.com/in/grandaniel"
          target="_blank"
          rel="noopener"
          class="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:shadow-md hover:border-accent-200 transition-all group"
        >
          <div class="flex items-center justify-center w-10 h-10 rounded-lg bg-accent-50 text-accent-600 group-hover:bg-accent-100 transition-colors">
            <Icon
              name="mdi:linkedin"
              class="w-5 h-5"
            />
          </div>
          <div>
            <p class="text-sm font-semibold text-gray-900">LinkedIn</p>
            <p class="text-sm text-gray-500">grandaniel</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHead } from "#app";

useHead({ title: "Kontakt" });
</script>
