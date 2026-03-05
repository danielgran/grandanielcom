<template>
  <div>
    <SectionHeader description="Akademische Arbeiten und Veröffentlichungen">Publikationen</SectionHeader>

    <ul class="space-y-4">
      <li
        v-for="pub in publications"
        :key="pub.file"
        class="bg-white border border-gray-100 rounded-xl p-5 hover:shadow-md transition-shadow"
      >
        <div class="flex items-start gap-4">
          <div class="flex items-center justify-center w-10 h-10 rounded-lg bg-accent-50 text-accent-600 shrink-0 mt-0.5">
            <Icon
              name="mdi:file-document-outline"
              class="w-5 h-5"
            />
          </div>
          <div class="flex-1 min-w-0">
            <h3 class="text-base font-semibold text-gray-900">{{ pub.title }}</h3>
            <p class="text-xs text-gray-400 mt-0.5 mb-2">{{ pub.subtitle }}</p>
            <p class="text-sm text-gray-600 leading-relaxed mb-4">{{ pub.description }}</p>
            <div class="flex flex-wrap gap-2">
              <button
                class="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-accent-50 text-accent-700 hover:bg-accent-100 transition-colors"
                @click="open(pub)"
              >
                <Icon
                  name="mdi:eye-outline"
                  class="w-3.5 h-3.5"
                />
                Anzeigen
              </button>
              <a
                :href="pub.file"
                download
                class="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
              >
                <Icon
                  name="mdi:download-outline"
                  class="w-3.5 h-3.5"
                />
                Download
              </a>
            </div>
          </div>
        </div>
      </li>
    </ul>

    <ClientOnly>
      <PdfViewerModal
        v-model="modalOpen"
        :src="activePub?.file ?? ''"
        :title="activePub?.title ?? ''"
      />
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface Publication {
  title: string
  subtitle: string
  description: string
  file: string
}

const publications: Publication[] = [
  {
    title: "Performanceanalyse des React-Frameworks",
    subtitle: "Bachelorarbeit · Note 1,1 · TH Nürnberg, 2024",
    description: "Tiefgehende Analyse der React Rendering Engine und Reconciliation-Pipeline. Performancemessung mittels Zeitkomplexitätsmetriken und UX-Metriken aus der Praxis der Softwareentwicklung.",
    file: "/docs/Gran_React_Thesis_final.pdf",
  },
];

const modalOpen = ref(false);
const activePub = ref<Publication | null>(null);

function open(pub: Publication) {
  activePub.value = pub;
  modalOpen.value = true;
}
</script>
