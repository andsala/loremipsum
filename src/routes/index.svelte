<script>
  import LoremBlock from '../components/LoremBlock.svelte'
  import FilterForm from '../components/FilterForm.svelte'
  import { mediaBreakpointIndex } from '../stores/style.store'
</script>

<style>

</style>

<svelte:head>
  <title>Lorem Ipsum</title>
</svelte:head>

<header class="row">
  <div class="offset-md-3 col my-5">
    <h1 class="display-3 font-weight-bold">Lorem Ipsum</h1>
  </div>
</header>

<div class="invisible"></div>

<div class="row flex-column flex-md-row">
  <div class="col-3 d-none d-md-block"></div>
  <div class="col col-md-3 order-md-last mb-3">
    <details open={$mediaBreakpointIndex >= 2}>
      <summary class="outline-0">Options</summary>
      <FilterForm/>
      <hr class="d-block d-md-none">
    </details>
  </div>
  <div class="col">
    <LoremBlock/>
  </div>
</div>

