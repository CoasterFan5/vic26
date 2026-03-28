import { get } from 'svelte/store';
import { accountState } from '../accounts/accountState';
import { terminal } from '../terminal';
import { files, type FileType } from './routes';
import { getActiveDirectory } from './directoryManager';

const hasAccess = (file: FileType, accountClearance: number): boolean => {
	const requiredClearance = file.minClearance ?? 0;
	return accountClearance >= requiredClearance;
};

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

	const currentAccount = get(accountState);
	const activeClearance = currentAccount.clearance;

	const ad = getActiveDirectory();
	let b = files;

	for (const key of ad) {
		const a = b[key];

		if (!a) {
			terminal.write([
				{
					type: 'error',
					content: 'Directory not found'
				}
			]);
			return;
		}

		if (a.type !== 'directory') {
			terminal.write([
				{
					type: 'error',
					content: 'Not a directory'
				}
			]);
			return;
		}

		if (!hasAccess(a, activeClearance)) {
			terminal.write([
				{
					type: 'error',
					content: 'Permission denied: Elevated access required.'
				}
			]);
			return;
		}

		b = a.children;
	}

	const targetName = params[0];
	const f = b[targetName];
	if (!f) {
		terminal.write([
			{
				type: 'error',
				content: 'File not found'
			}
		]);
		return;
	}

	if (!hasAccess(f, activeClearance)) {
		terminal.write([
			{
				type: 'error',
				content: 'Permission denied: Elevated access required.'
			}
		]);
		return;
	}

	if (f.type === 'directory') {
		terminal.write([
			{
				type: 'error',
				content: `${targetName} is a directory, not a file.`
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
};
