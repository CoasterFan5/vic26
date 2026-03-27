import { terminal } from '../terminal';

export const helpCommand = () => {
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
			content: 'ls - '
		},
		{
			type: 'line',
			content: 'List files in this directory'
		}
	]);
	terminal.write([
		{
			type: 'line',
			content: '  flags:'
		}
	]);
	terminal.write([
		{
			type: 'bold',
			content: '    -a '
		},
		{
			type: 'line',
			content: "Show files in this directory including those starting with '.'"
		}
	]);
	terminal.write([
		{
			type: 'bold',
			content: 'cat <file name> - '
		},
		{
			type: 'line',
			content: 'Read file'
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
	terminal.write([
		{
			type: 'bold',
			content: 'login <username> <password> - '
		},
		{
			type: 'line',
			content: 'Login to a different account.'
		}
	]);
};
