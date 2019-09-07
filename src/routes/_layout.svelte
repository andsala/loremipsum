<script>
  export let segment;
</script>

<style>
  @import "../style/style.scss";
</style>

<main class="container min-vh-100">
  <slot></slot>
</main>

<footer class="container py-5">
  <div class="row">
    <div class="col-md order-md-last pt-4 text-md-right">
      Built with
      <a href="https://svelte.dev/" target="_blank" rel="noreferrer">svelte</a>
      <a href="https://github.com/lukehaas/getlorem" target="_blank" rel="noreferrer">getlorem</a>
      <a href="https://iconsvg.xyz/" target="_blank" rel="noreferrer">iconsvg</a>
    </div>
    <div class="col-md pt-4">
      &copy; <a href="https://andsala.dev/" target="_blank">Andrea Salamone</a>
    </div>
  </div>
</footer>
