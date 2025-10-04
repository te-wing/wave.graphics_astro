<script lang="ts">
  import { onMount } from 'svelte';

  let pathSegments: { name: string; path: string }[] = [];

  onMount(() => {
    if (typeof window !== 'undefined') {
      const pathname = window.location.pathname;

      const segments = pathname.split('/').filter(segment => segment.length > 0);

      let currentPathAccumulator = '';
      pathSegments = segments.map(segment => {
        // 現在の累積パスにセグメントを追加
        currentPathAccumulator += `/${segment}`;
        
        return {
          // 表示用の名前。ファイル名の場合は拡張子を除去（例：index.html -> index）
          name: segment.includes('.') ? segment.substring(0, segment.lastIndexOf('.')) : segment,
          // リンク先パス
          path: currentPathAccumulator
        };
      });
    }
  });

  // リンクをクリックしたときのナビゲーション関数
  const navigate = (path: string) => {
    window.location.href = path;
  };
</script>

<div>
  {#if pathSegments.length > 0}
    <p>
      <a href='/'>https://wave.graphics</a>
      <span>></span>
      {#each pathSegments as segment, i}
        {#if i > 0}
          <span> > </span>
        {/if}
        <a 
          href={segment.path} 
          on:click|preventDefault={() => navigate(segment.path)}
          class="path-segment-link"
        >
          {segment.name}
        </a>
      {/each}
    </p>
  {:else if typeof window !== 'undefined'}
    <a href='/'>https://wave.graphics</a>
  {:else}
    <p>パスを取得中です...</p>
  {/if}
</div>

<style lang='scss'>
  a, p, span {
    font-family: FiraCode;
  }
</style>