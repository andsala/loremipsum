<script>
  import { onMount, onDestroy } from 'svelte'
  import LoremBlock from '../components/LoremBlock.svelte'
  import FilterForm from '../components/FilterForm.svelte'
  import { mediaBreakpointIndex } from '../stores/style.store'
  import { loremContent } from '../stores/lorem.store'
  import ClipboardJS from 'clipboard'

  let clipboard = null;

  onMount(() => {
    clipboard = new ClipboardJS('.btn-clipboard');
  });

  onDestroy(() => {
    if (clipboard)
      clipboard.destroy();
  });
</script>

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
  <div class="col col-md-3 order-md-last mb-3 faded">
    <details open={$mediaBreakpointIndex>= 2}>
      <summary class="outline-0">Options</summary>
      <FilterForm/>
      <hr class="d-block d-md-none">
    </details>
  </div>

  <div class="col col-md-3 d-none d-md-block mb-3 text-right faded">
    <button class="btn btn-link btn-clipboard"
            title="Copy to clipboard"
            data-clipboard-text="#lorem-content">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-linejoin="round">
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
      </svg>
    </button>
    <button class="btn btn-link btn-clipboard"
            title="Copy HTML code to clipboard"
            data-clipboard-text={$loremContent}>
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-linejoin="round">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    </button>
  </div>

  <div class="col">
    <LoremBlock/>
  </div>
</div>

