<script lang="ts">
	import LineRenderer from './LineRenderer.svelte';
	import type { LineComponent } from './LineType';

	const lines: LineComponent[] = [
		[{ type: 'line', content: 'Glimpse Inc Termial System (c) 2026 Glimpse Inc.' }],
		[{ type: 'line', content: 'Glimpse Inc Warden will kick you from this system in 60 seconds' }],
		[{ type: 'line', content: 'Type help and press enter for help' }]
	];

	let inputValue = $state('');
</script>

<svelte:window
	onkeypress={(e) => {
		// special handlers
		if (e.key.length != 1) {
			return;
		}

		inputValue += e.key;
	}}
	onkeydown={(e) => {
		const k = e.key.toLowerCase();
		console.log(k);
		if (k == 'backspace') {
			inputValue = inputValue.substring(0, inputValue.length - 1);
		}
		if (k == 'c' && e.ctrlKey) {
			inputValue = '';
		}
	}}
/>

<div class="terminal">
	{#each lines as line, index (index)}
		<span class="line">
			<LineRenderer {line} />
		</span>
	{/each}
	<span class="line">
		<span class="white"> dan@it.glimpse.com %&nbsp</span><span>{inputValue}</span>
	</span>
</div>

<style lang="scss">
	.terminal {
		display: flex;
		flex-direction: column;
		align-items: start;
		justify-content: start;
	}

	.white {
		color: var(--white);
	}
</style>
