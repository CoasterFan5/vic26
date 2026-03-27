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
			type: 'bold',
			content: 'clear - '
		},
		{
			type: 'line',
			content: 'Clear the terminal'
		}
	]);
};
