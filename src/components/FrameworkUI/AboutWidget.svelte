<script lang='ts'>
  export let siteUrl: string;
  export let githubUrl: string;
  export let icon: string;
</script>

<div class='widget'>
  <div>
    <img alt='ロゴ' src={icon}>
  </div>
  <div>
    <a target='_blank' href={siteUrl}>サイトを表示</a>
    <a target='_blank' href={githubUrl}>GitHubで見る</a>
  </div>
</div>

<style lang='scss'>
  .widget {
    display: flex;
  }
</style>