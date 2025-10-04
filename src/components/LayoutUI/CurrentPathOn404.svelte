<script lang="ts">
  import { onMount } from 'svelte';

  // 初期値は空にしておき、クライアントサイドでパスが設定されるまで待つ
  let currentPath = '';

  onMount(() => {
    // コンポーネントがブラウザでマウントされたときに実行される
    if (typeof window !== 'undefined') {
      // window.location.pathname はパス名（例: /not-found-page）を返す
      currentPath = window.location.pathname;
      currentPath = currentPath.replaceAll("/", " > ");
    }
  });
</script>

<div class="current-path-display">
  {#if currentPath}
    <p>https://wave.graphics<strong>{currentPath}</strong></p>
  {:else}
    <p>パスを取得中です...</p>
  {/if}
</div>