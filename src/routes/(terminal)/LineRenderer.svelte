<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { LineComponent, LineType } from './LineType';

	const {
		line
	}: {
		line: LineComponent;
	} = $props();

	const rendererMap: Record<LineType, Snippet<[string]>> = {
		line: contentRender,
		user: userRender
	};
</script>

{#snippet contentRender(content: string)}
	{content}
{/snippet}

{#snippet userRender(content: string)}
	{content}
{/snippet}

{#each line as c, index (index)}
	{@render rendererMap[c.type](c.content)}
{/each}
