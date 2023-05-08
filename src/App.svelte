<script>
  // import svelteLogo from './assets/svelte.svg'
  import AppDesktop from "./AppDesktop.svelte";
  import AppMobile from "./AppMobile.svelte";
  import MediaQuery from "./MediaQuery.svelte";
</script>

<main>
  <MediaQuery query="(min-width: 800px)" let:matches>
    {#if matches}
      <AppDesktop />      
    {/if}
  </MediaQuery>
  
  <!-- <MediaQuery query="(min-width: 480px) and (max-width: 1200px)" let:matches>
    {#if matches}
      <MobileApp />
    {/if}
  </MediaQuery> -->
  
  <MediaQuery query="(max-width: 800px)" let:matches>
    {#if matches}
      <div class="app-mobile">
        <AppMobile />
      </div>
    {/if}
  </MediaQuery> 
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

</style>
