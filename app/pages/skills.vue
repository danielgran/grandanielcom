<template>
  <div>
    <SectionHeader description="Technische Fähigkeiten und Kenntnisstufen">Kenntnisse</SectionHeader>

    <!-- Programmiersprachen -->
    <div class="mb-8">
      <h3 class="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Programmiersprachen</h3>
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3">
        <SkillCard
          name="TypeScript"
          icon="mdi:language-typescript"
          level="Fortgeschritten"
          :percentage="90"
        />
        <SkillCard
          name="JavaScript"
          icon="mdi:language-javascript"
          level="Fortgeschritten"
          :percentage="90"
        />
        <SkillCard
          name="Python"
          icon="mdi:language-python"
          level="Fortgeschritten"
          :percentage="85"
        />
        <SkillCard
          name="C / C++"
          icon="mdi:language-c"
          level="Mittel"
          :percentage="70"
        />
        <SkillCard
          name="Java"
          icon="mdi:language-java"
          level="Mittel"
          :percentage="70"
        />
        <SkillCard
          name="SQL"
          icon="mdi:database"
          level="Mittel"
          :percentage="75"
        />
      </div>
    </div>

    <!-- Frameworks -->
    <div class="mb-8">
      <h3 class="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Frameworks & Bibliotheken</h3>
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3">
        <SkillCard
          name="Vue.js"
          icon="mdi:vuejs"
          level="Fortgeschritten"
          :percentage="90"
        />
        <SkillCard
          name="React"
          icon="mdi:react"
          level="Fortgeschritten"
          :percentage="85"
        />
        <SkillCard
          name="Angular"
          icon="mdi:angular"
          level="Mittel"
          :percentage="70"
        />
        <SkillCard
          name=".NET"
          icon="mdi:dot-net"
          level="Mittel"
          :percentage="70"
        />
        <SkillCard
          name="Node.js"
          icon="mdi:nodejs"
          level="Fortgeschritten"
          :percentage="80"
        />
        <SkillCard
          name="Protobuf"
          icon="mdi:code-braces"
          level="Mittel"
          :percentage="60"
        />
      </div>
    </div>

    <!-- Datenbanken -->
    <div class="mb-8">
      <h3 class="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Datenbanken</h3>
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3">
        <SkillCard
          name="PostgreSQL"
          icon="mdi:elephant"
          level="Mittel"
          :percentage="75"
        />
        <SkillCard
          name="MySQL"
          icon="mdi:database"
          level="Mittel"
          :percentage="70"
        />
        <SkillCard
          name="MS SQL"
          icon="mdi:microsoft"
          level="Mittel"
          :percentage="65"
        />
        <SkillCard
          name="Redis"
          icon="mdi:memory"
          level="Mittel"
          :percentage="65"
        />
      </div>
    </div>

    <!-- DevOps & Tools -->
    <div class="mb-8">
      <h3 class="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">DevOps & Tools</h3>
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3">
        <SkillCard
          name="Git"
          icon="mdi:git"
          level="Fortgeschritten"
          :percentage="90"
        />
        <SkillCard
          name="Docker"
          icon="mdi:docker"
          level="Fortgeschritten"
          :percentage="85"
        />
        <SkillCard
          name="Kubernetes"
          icon="mdi:kubernetes"
          level="Mittel"
          :percentage="70"
        />
        <SkillCard
          name="Bash"
          icon="mdi:console"
          level="Fortgeschritten"
          :percentage="80"
        />
        <SkillCard
          name="vSphere"
          icon="mdi:server"
          level="Mittel"
          :percentage="65"
        />
        <SkillCard
          name="Proxmox"
          icon="mdi:server-network"
          level="Mittel"
          :percentage="65"
        />
      </div>
    </div>

    <!-- IDEs -->
    <div>
      <h3 class="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Entwicklungsumgebungen</h3>
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3">
        <SkillCard
          name="VS Code"
          icon="mdi:microsoft-visual-studio-code"
          level="Täglich"
          :percentage="95"
        />
        <SkillCard
          name="IntelliJ"
          icon="mdi:intellij-idea"
        />
        <SkillCard
          name="PyCharm"
          icon="mdi:code-braces-box"
        />
        <SkillCard
          name="WebStorm"
          icon="mdi:web"
        />
      </div>
    </div>
  </div>
</template>
