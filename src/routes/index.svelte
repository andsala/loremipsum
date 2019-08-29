<script>
  import LoremBlock from '../components/LoremBlock.svelte'
  import FilterForm from '../components/FilterForm.svelte'
</script>

<style>

</style>

<svelte:head>
  <title>Lorem Ipsum</title>
</svelte:head>

<h1 class="f-headline">Lorem Ipsum</h1>

<details>
  <summary>Options</summary>
  <FilterForm/>
</details>

<LoremBlock/>

