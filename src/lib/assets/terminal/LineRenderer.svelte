<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { LineComponent, LineType } from './LineType';
	import type { ThemeState } from './accounts/accountState';

	const {
		line,
		onMount,
		theme
	}: {
		line: LineComponent;
		onMount?: VoidFunction;
		theme: ThemeState;
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
	<span class="line {theme}">
		&ZeroWidthSpace;{@render rendererMap[c.type](c.content)}
	</span>
{/each}

<style lang="scss">
	.green {
		color: var(--textGreen);
	}

	.amber {
		color: var(--textAmber);
	}

	/* global termianl styles */
	.error {
		color: #f54242;
	}
	.name {
		color: var(--white);
	}
	.bold {
		font-weight: 700;
	}
</style>
