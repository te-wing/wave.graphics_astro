<script>
  import { onMount } from "svelte";

  onMount(async () => {
    // 絶対importじゃなくて dynamic import
    await import(/* @vite-ignore */ "/_pagefind/pagefind-ui.js");
    new window.PagefindUI({
      element: "#search",
    });
  });
</script>

<div id="search"></div>

