import { lines, terminal } from './terminal';

export const handleCommand = (cmd: string) => {
	const c = cmd.split(' ')[0];
	if (commands[c]) {
		commands[c]();
	}
};

const commands: Record<string, VoidFunction> = {
	help: () => {
		terminal.write([
			{
				type: 'line',
				content: 'Help Menu'
			}
		]);
		terminal.write([
			{
				type: 'bold',
				content: 'help - '
			},
			{
				type: 'line',
				content: 'Shows this'
			}
		]);
		terminal.write([
			{
				type: 'bold',
				content: 'clear - '
			},
			{
				type: 'line',
				content: 'Clear the terminal'
			}
		]);

		console.log('help');
	},
	clear: () => {
		lines.update(() => {
			return [];
		});
		terminal.write([
			{
				type: 'line',
				content: 'Terminal cleared'
			}
		]);
	}
};
