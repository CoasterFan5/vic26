<script lang="ts">
	import { accountState, logoutAccount, type ThemeState } from './accounts/accountState';
	import { handleCommand } from './commandHandlers/index';
	import LineRenderer from './LineRenderer.svelte';
	import { lines, terminal } from './terminal';

	const historyList: string[] = [];
	let historyIndex = -1;

	let username = $state('dan@it.glimpse.com');
	let theme: ThemeState = $state('green');
	accountState.subscribe((v) => {
		username = v.username;
		theme = v.themeState;
	});

	const SESSION_DURATION_SECONDS = 60;

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

	let sessionEnd = $state(true);
	let countdownSeconds = $state(SESSION_DURATION_SECONDS);

	let i = setInterval(() => {});

	const initTerminal = () => {
		if (!sessionEnd) {
			return;
		}

		logoutAccount();
		terminal.clear();
		inputValue = '';
		countdownSeconds = SESSION_DURATION_SECONDS;
		terminal.writeDefaultLines();
		sessionEnd = false;
		clearInterval(i);
		i = setInterval(() => {
			countdownSeconds -= 1;
			if (countdownSeconds <= 0) {
				sessionEnd = true;
				clearInterval(i);
				terminal.clear();
				terminal.write([
					{ type: 'error', content: 'Session ended by IDS Warden. Press any key to reconnect.' }
				]);
			}
		}, 1_000);
	};

	initTerminal();
</script>

<svelte:window
	onpaste={(e) => {
		if (sessionEnd) {
			e.preventDefault();
			return;
		}

		const pasted = e.clipboardData?.getData('text') ?? '';
		inputValue += pasted;
		e.preventDefault();
	}}
	onkeypress={(e) => {
		if (sessionEnd) {
			e.preventDefault();
			return;
		}
		// special handlers
		if (e.key.length != 1) {
			return;
		}
		inputValue += e.key;
	}}
	onkeydown={(e) => {
		if (sessionEnd) {
			initTerminal();
			e.preventDefault();
			return;
		}

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
			historyList.unshift(inputValue);
			historyIndex = -1;
			inputValue = '';
		}
		if (k == 'backspace') {
			inputValue = inputValue.substring(0, inputValue.length - 1);
		}
		if (k == 'c' && e.ctrlKey) {
			inputValue = '';
		}
		if (k == 'arrowup') {
			historyIndex += 1;
			inputValue = historyList[historyIndex];
		}
		if (k == 'arrowdown') {
			historyIndex -= 1;
			inputValue = historyList[historyIndex];
		}
	}}
/>

<div
	class="terminal"
	bind:this={terminalElement}
	class:green={theme == 'green'}
	class:amber={theme == 'amber'}
>
	{#if !sessionEnd}
		<div class="countdown-badge">
			<span class="warning">Warden kick in {countdownSeconds}s</span>
		</div>
	{/if}
	{#each $lines as line, index (index)}
		<span class="line">
			<LineRenderer
				{line}
				{theme}
				onMount={() => {
					scrollToBottom();
				}}
			/>
		</span>
	{/each}
	{#if !sessionEnd}
		<span class="line">
			<LineRenderer
				line={[
					{ type: 'user', content: `${username} % ` },
					{
						type: 'line',
						content: inputValue
					}
				]}
				{theme}
			/>
		</span>
	{/if}
</div>

<style lang="scss">
	.green {
		background: black;
	}

	.amber {
		background: #1e140a;
	}

	.terminal {
		position: relative;
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

	.warning {
		color: var(--yellow);
	}

	.countdown-badge {
		position: fixed;
		top: 0.5rem;
		right: 0.5rem;
		padding: 0.2rem 0.5rem;
		border: 1px solid var(--yellow);
		background: color-mix(in srgb, var(--background) 85%, var(--yellow) 15%);
		opacity: 0.95;
		pointer-events: none;
		z-index: 1000;
	}
</style>
