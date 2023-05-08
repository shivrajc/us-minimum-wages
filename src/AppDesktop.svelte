<script>
  // import svelteLogo from './assets/svelte.svg'

  import Map from "./lib/Map.svelte";

</script>

<main>
  <div class="header">
    <div class="title-text">
      <p class="title">Workers making minimum wage or less</p>
      <p class="sub-title">% of workers earning federal minimum wage in each US state - 2015 to 2021</p>
    </div>
  </div>
  <div class="viz-container">
    <Map />
  </div>
  <footer>
    <span>
    <a href="https://twitter.com/shivrajc">@shivrajc</a>  |  Source: Bureau of Labor Statistics
    </span>
  </footer>
</main>

<style>
  main {
    width: 1400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .header {
    height: 60px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .title-text {
    position: relative;
    top: 56px;
    left: 60px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  }

  .title {
    font-size: 2.6rem;
    font-weight: 700;
    text-align: center;
    color: hsl(177, 4%, 16%) 
  }

  .sub-title {
    font-size: 1.1rem;
    font-weight: 400;
    text-align: center;
    color: hsl(177, 2%, 40%) 
  }

  footer {
    position: relative;
  }

  footer span {
    position: relative;
    top: 140px;
    font-size: 12px;
    color: hsl(177, 2%, 60%) ;
    font-weight: 400;
  }

  footer a, a:visited {
    color: hsl(177, 2%, 60%)
  }
</style>
