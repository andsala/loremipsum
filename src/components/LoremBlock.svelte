<script>
  import { loremContent, type } from '../stores/lorem.store'
</script>

{#if $loremContent}
	{#if $type == 'list'}
    <ul class="f4 measure-wide">
			{@html $loremContent}
    </ul>
	{:else}
		<div class="f4 measure-wide">
			{@html $loremContent}
		</div>
	{/if}
{/if}
