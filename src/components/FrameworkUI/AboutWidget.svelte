<script lang='ts'>
  export let siteUrl: string;
  export let githubUrl: string;
  export let icon: string;
  export let themeColor: string;
  export let themeDark: boolean;

  if (themeDark) {
    themeText: white;
  } else {
    themeText: black;
  }
</script>

<div class='widgetSlot'>
  <div>
    <img alt='ロゴ' src={icon}>
  </div>
  <div class='linkSlot'>
    <a class='viewSite' style="--theme-color: {themeColor}" target='_blank' href={siteUrl}>
      <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#1f1f1f"><path d="M352-192q-9-11-14.5-24t-5.5-28q0-32 23-54.5t55-22.5l22-22q8-8 18-12t21-4q23 0 38.5 15.5T525-305v17q0 18 14 31t32 13q14 0 25.5-8.5T613-275l10-32q8-23 28-37.5t45-14.5h71q11-28 17.5-58.5T791-480q0-91-46.5-165T622-758v36q0 20-14 34.5T574-673h-49v72q0 20-14 34.5T477-552h-48v76q0 18-13.5 31T384-432q-13 0-24-7t-16-18l-70-95h-39v48q0 29-19.5 49.5T167-432q13 81 62.5 144.5T352-192Zm210-216q-15 0-26-10.5T525-444q0-15 11-25.5t26-10.5h48q15 0 25.5 10.5T646-444q0 15-10.5 25.5T610-408h-48Zm69-122q-14-5-20.5-19t-1.5-28l15-45q5-14 18.5-21t27.5-2q14 5 20.5 18.5T692-599l-15 47q-5 14-18.5 20.5T631-530ZM477-96q-79 0-149-30t-122.5-82.5Q153-261 123-331T93-480q0-80 30-149.5t82.5-122Q258-804 328-834t149-30q80 0 149.5 30t122 82.5Q801-699 831-629.5T861-480q0 79-30 149t-82.5 122.5Q696-156 626.5-126T477-96Z"/></svg>
      サイトを表示
    </a>
    <a class='viewGitHub' target='_blank' href={githubUrl}>
      <svg height="20" viewBox="0 0 100 100" className="mediaLogo" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="currentColor"/></svg>
      GitHubで見る
    </a>
  </div>
</div>

<style lang='scss'>
  .widgetSlot {
    width: 100%;
    display: flex;
    background: linear-gradient(135deg, white, white);
    box-sizing: border-box;

    .linkSlot {
      display: block;
      width: 100%;
      box-sizing: border-box;

      a {
        display: flex;
        text-align: center;
        justify-content: center;
        align-items: center;
        margin: 8px;
        box-sizing: border-box;
        padding: 8px;
        border-radius: 9px;
        .siteIcon {
          height: 20px;
        }
      }

      .viewSite {
        background-color: var(--theme-color);
      }

      .viewGitHub {
        background-color: black;
        color: white;
      }
    }
  }
</style>