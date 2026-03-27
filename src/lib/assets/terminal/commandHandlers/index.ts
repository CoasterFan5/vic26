import { lsCommand } from '../fileRouting/ls';
import { lines, terminal } from '../terminal';
import { helpCommand } from './helpCommand';

export const handleCommand = (cmd: string) => {
	const c = cmd.split(' ')[0];
	if (commands[c]) {
		commands[c]();
	}
};

const commands: Record<string, VoidFunction> = {
	help: helpCommand,
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
	},
	ls: () => {
		lsCommand();
	}
};
