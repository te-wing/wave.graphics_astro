<script setup>
  import { onMounted } from "vue";
  import { PagefindUI } from "@pagefind/default-ui";
  import "@pagefind/default-ui/css/ui.css";

  onMounted(() => {
    new PagefindUI({
      element: ".search",
    });
  });
</script>

<template>
  <div class="search"></div>
</template>
