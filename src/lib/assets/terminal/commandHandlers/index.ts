import { lsCommand } from '../fileRouting/ls';
import { readFile } from '../fileRouting/readFile';
import { lines, terminal } from '../terminal';
import { helpCommand } from './helpCommand';
import { loginCommand } from './loginCommand';

export const handleCommand = (cmd: string) => {
	const parsed = cmd.split(' ');
	const c = parsed[0];
	const params = parsed.slice(1);
	if (commands[c]) {
		commands[c](params);
	} else {
		terminal.write([
			{
				type: 'error',
				content: 'Command not found'
			}
		]);
	}
};

const commands: Record<string, (params: string[]) => void> = {
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
	ls: (params) => {
		lsCommand(params);
	},
	cat: readFile,
	open: readFile,
	read: readFile,
	login: loginCommand
};
