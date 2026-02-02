<template>
  <div class="error-page">
    <div class="error-card">
      <span class="badge">Erro {{ error?.statusCode || 404 }}</span>
      <h1>Conteúdo não encontrado</h1>
      <p>O endpoint solicitado não existe nesta CDN.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ error: { statusCode?: number } | null }>();
</script>
