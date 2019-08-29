<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
  @import "~tachyons/css/tachyons.css";
</style>

<!--<Nav {segment}/>-->

<main class="center mw7-l mw-100 pa2">
	<slot></slot>
</main>
