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
  <section class='searchBox'>
    <div class="search"></div>
  </section>
</template>

<style lang="scss">
  .searchBox {
    .search {
      --pagefind-ui-scale: 1;
      --pagefind-ui-primary: #034ad8;
      --pagefind-ui-text: var(--foreground);
      --pagefind-ui-background: transparent;
      --pagefind-ui-border: var(--button-hover-border);
      --pagefind-ui-tag: var(--foregroundSub);
      --pagefind-ui-border-width: 2px;
      --pagefind-ui-border-radius: 8px;
      --pagefind-ui-image-border-radius: 8px;
      --pagefind-ui-image-box-ratio: 3 / 2;
      --pagefind-ui-font: ZenMaru;
    }
  }
</style>
