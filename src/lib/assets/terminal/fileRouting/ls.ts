import { get } from 'svelte/store';
import { accountState } from '../accounts/accountState';
import { terminal } from '../terminal';
import { files, type FileType } from './routes';

const hasAccess = (entry: FileType, clearance: number): boolean => {
	const required = entry.minClearance ?? 0;
	return clearance >= required;
};

export const lsCommand = (params: string[]) => {
	const showSecrets = params.includes('-a');
	const currentClearance = get(accountState).clearance;

	for (const key in files) {
		if (key.startsWith('.') && !showSecrets) {
			continue;
		}

		const entry = files[key];
		if (!hasAccess(entry, currentClearance)) {
			continue;
		}

		terminal.write([
			{
				type: 'line',
				content: key
			}
		]);
	}
};
