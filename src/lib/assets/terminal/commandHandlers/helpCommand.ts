import { terminal } from '../terminal';

export const helpCommand = () => {
	terminal.write([
		{
			type: 'boldUnderline',
			content: 'Command List'
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
			content: 'ls [-a] - '
		},
		{
			type: 'line',
			content: 'List files in this directory, add the -a to show all files.'
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
	terminal.write([
		{
			type: 'bold',
			content: 'cd <path> '
		},
		{
			type: 'line',
			content: 'Navigate to a different directory. Use ../ to go back.'
		}
	]);
};
