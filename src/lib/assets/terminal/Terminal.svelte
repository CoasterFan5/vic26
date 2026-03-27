<script lang="ts">
	import { handleCommand } from './commandHandlers/index';
	import LineRenderer from './LineRenderer.svelte';
	import type { LineComponent } from './LineType';
	import { lines, terminal } from './terminal';

	const username = 'dan@it.glimpse.com';

	let inputValue = $state('');
	let terminalElement: HTMLDivElement | undefined = $state(undefined);

	const scrollToBottom = () => {
		if (terminalElement) {
			terminalElement.scrollTop = terminalElement.scrollHeight;
		}
	};

	lines.subscribe(() => {
		scrollToBottom();
	});
</script>

<svelte:window
	onkeypress={(e) => {
		// special handlers
		if (e.key.length != 1) {
			return;
		}
		inputValue += e.key;
		e.preventDefault();
	}}
	onkeydown={(e) => {
		const k = e.key.toLowerCase();
		if (k == 'enter') {
			terminal.write([
				{
					type: 'user',
					content: `${username} % `
				},
				{
					type: 'line',
					content: inputValue
				}
			]);
			handleCommand(inputValue);
			inputValue = '';
		}
		if (k == 'backspace') {
			inputValue = inputValue.substring(0, inputValue.length - 1);
		}
		if (k == 'c' && e.ctrlKey) {
			inputValue = '';
		}
	}}
/>

<div class="terminal" bind:this={terminalElement}>
	{#each $lines as line, index (index)}
		<span class="line">
			<LineRenderer
				{line}
				onMount={() => {
					scrollToBottom();
				}}
			/>
		</span>
	{/each}
	<span class="line">
		<span class="white"> {username} %&nbsp</span><span>{inputValue}</span>
	</span>
</div>

<style lang="scss">
	.terminal {
		display: flex;
		flex-direction: column;
		align-items: start;
		justify-content: start;
		height: 100vh;
		width: 100%;
		overflow-y: auto;
		padding: 0.5rem;
		box-sizing: border-box;
	}

	.white {
		color: var(--white);
	}
</style>
