<template>
  <div>
    <SectionHeader>Über mich</SectionHeader>

    <!-- Begrüßung + Bild -->
    <div class="flex flex-col lg:flex-row gap-8 mb-8">
      <!-- Text -->
      <div class="flex-1">
        <h2 class="text-xl lg:text-2xl font-light text-gray-800 mb-4">
          Hi, ich bin <span class="font-semibold">Daniel</span>
          <span class="ml-3 inline-block text-sm text-gray-500 mb-4">
            (a.k.a Bandi oder Dani)
          </span>
        </h2>
          <p class="text-gray-600 leading-relaxed">
          Software Engineer mit einem Bachelor of Engineering
          in Elektro- und Informationstechnik. Ich verbinde einen starken Software + Engineering-Hintergrund
          mit praktischer Infrastrukturerfahrung — von CI/CD-Pipelines und Containerisierung bis hin
          zur Full-Stack-Webentwicklung mit Vue.js, TypeScript, Python und .NET.
        </p>
      </div>

      <!-- Profilbild -->
      <div class="flex justify-center lg:justify-end shrink-0">
        <img
          :src="'/images/image.png'"
          alt="Daniel Gran"
          class="w-40 lg:w-44 aspect-[1/2] rounded-2xl object-cover object-top shadow-md"
        >
      </div>
    </div>

    <!-- Persönliche Daten -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
      <div class="flex items-center gap-3 text-sm">
        <Icon
          name="mdi:map-marker-outline"
          class="w-4 h-4 text-gray-400 shrink-0"
        />
        <span class="text-gray-600">90547 Stein</span>
      </div>
      <div class="flex items-center gap-3 text-sm">
        <Icon
          name="mdi:phone-outline"
          class="w-4 h-4 text-gray-400 shrink-0"
        />
        <a
          href="tel:+4915792399937"
          class="text-gray-600 hover:text-accent-600 transition-colors"
        >+49 157 92399937</a>
      </div>
      <div class="flex items-center gap-3 text-sm">
        <Icon
          name="mdi:email-outline"
          class="w-4 h-4 text-gray-400 shrink-0"
        />
        <a
          href="mailto:contact@grandaniel.com"
          class="text-gray-600 hover:text-accent-600 transition-colors"
        >contact@grandaniel.com</a>
      </div>
      <div class="flex items-center gap-3 text-sm">
        <Icon
          name="mdi:cake-variant-outline"
          class="w-4 h-4 text-gray-400 shrink-0"
        />
        <span class="text-gray-600">2001, Nürnberg</span>
      </div>
    </div>

    <!-- Sprachen -->
    <div>
      <h3 class="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">Sprachen</h3>
      <div class="flex flex-wrap gap-3">
        <div class="flex items-center gap-2 text-sm text-gray-600">
          <span class="font-medium">Deutsch</span>
          <span class="text-gray-400">— Muttersprache</span>
        </div>
        <div class="text-gray-300">|</div>
        <div class="flex items-center gap-2 text-sm text-gray-600">
          <span class="font-medium">Englisch</span>
          <span class="text-gray-400">— Verhandlungssicher</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHead } from "#app";

useHead({ title: "Personal Website" });
</script>
