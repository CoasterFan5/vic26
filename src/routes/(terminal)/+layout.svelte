<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '@fontsource-variable/geist-mono/wght.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}

<style lang="scss">
	:global(body) {
		--background: #000;
		--color: #03ff00;
		--white: #f4f4f4;

		font-family: 'Geist Mono Variable', monospace;
		background: var(--background);
		color: var(--color);
		height: 100dvh;
		margin: 0;
		padding: 0;
	}
</style>
