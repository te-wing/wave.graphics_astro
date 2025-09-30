<script>
  import { onMount } from "svelte";

  onMount(async () => {
    await import("/_pagefind/pagefind-ui.js");
    new window.PagefindUI({
      element: "#search",
    });
  });
</script>

<div id="search"></div>
