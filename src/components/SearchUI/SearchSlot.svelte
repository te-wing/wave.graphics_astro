<script>
  import { onMount } from 'svelte';

  let searchTerm = '';
  let searchResults = [];
  let isPagefindLoaded = false;

  // onMountで，クライアント側で読み込んだ場合のみ実行
  onMount(() => {
    // Pagefindのグローバル関数 (window.pagefind) が存在するかチェック
    if (window.pagefind) {
      isPagefindLoaded = true;
    } else {
      // 厳密には、Pagefindのスクリプトは <head> で非同期にロードされるため、
      // ここでロード待ちのロジックが必要になる場合もありますが、
      // Astro + Pagefind の一般的な構成では既にロードが完了していることが多いです。
      // Pagefindのスクリプトタグが正しく追加されていれば、ほとんどの場合 'window.pagefind' は利用可能です。
      console.error("Pagefind is not loaded on the window object.");
    }
  });

  async function performSearch() {
    if (!isPagefindLoaded) {
      console.warn("Pagefind not ready yet.");
      return;
    }

    // window.pagefind を使用して検索APIを呼び出す
    try {
      const search = await window.pagefind.search(searchTerm);
      searchResults = search.results;
      console.log("Search results:", search.results);
    } catch (error) {
      console.error("Pagefind search error:", error);
    }
  }

  // searchTerm の変更を監視して自動で検索を実行する (またはボタンクリックで実行)
  $: if (searchTerm.length > 2) {
    performSearch();
  }
</script>

<input 
  type="text" 
  placeholder="検索..." 
  bind:value={searchTerm} 
  on:input={performSearch}
/>

{#if searchResults.length > 0}
  <ul>
    {#each searchResults as result}
      <li>
        <a href={result.url}>{result.meta.title || result.url}</a>
        <p>{result.excerpt}</p>
      </li>
    {/each}
  </ul>
{:else if searchTerm.length > 0 && isPagefindLoaded}
  <p>一致する結果は見つかりませんでした。</p>
{/if}

<style lang="scss">

</style>