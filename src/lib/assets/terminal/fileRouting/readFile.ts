import { terminal } from '../terminal';
import { files } from './routes';
import { getActiveDirectory } from './directoryManager';

export const readFile = (params: string[]) => {
	if (params.length < 1) {
		terminal.write([
			{
				type: 'error',
				content: 'Did not specify file, use like this: read <fileName>'
			}
		]);
		return;
	}

	const ad = getActiveDirectory();
	let b = files;

	for (const key of ad) {
		const a = b[key];
		if (a.type != 'directory') {
			terminal.write([
				{
					type: 'error',
					content: 'Not a directory'
				}
			]);
			return;
		}
		b = a.children;
	}

	const f = b[params[0]];
	if (!f) {
		terminal.write([
			{
				type: 'error',
				content: 'File not found'
			}
		]);
		return;
	}

	if (f.type == 'directory') {
		terminal.write([
			{
				type: 'error',
				content: `${params[0]} is a directory, not a file.`
			}
		]);
		return;
	}

	for (const item of f.content) {
		terminal.write([
			{
				type: 'line',
				content: item
			}
		]);
	}

	return;
};
