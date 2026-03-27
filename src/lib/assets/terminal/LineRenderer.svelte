<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { LineComponent, LineType } from './LineType';

	const {
		line,
		onMount
	}: {
		line: LineComponent;
		onMount?: VoidFunction;
	} = $props();

	const rendererMap: Record<LineType, Snippet<[string]>> = {
		line: contentRender,
		user: userRender,
		bold: boldRender,
		error: errorRender
	};

	$effect(() => {
		onMount?.();
	});
</script>

{#snippet contentRender(content: string)}
	{content}
{/snippet}

{#snippet userRender(content: string)}
	<span class="name">{content}</span>
{/snippet}

{#snippet boldRender(content: string)}
	<span class="bold">{content}</span>
{/snippet}

{#snippet errorRender(content: string)}
	<span class="error">{content}</span>
{/snippet}

{#each line as c, index (index)}
	&ZeroWidthSpace;{@render rendererMap[c.type](c.content)}
{/each}

<style lang="scss">
	.name {
		color: var(--white);
	}

	.bold {
		font-weight: 700;
	}

	.error {
		color: #f54242;
	}
</style>
