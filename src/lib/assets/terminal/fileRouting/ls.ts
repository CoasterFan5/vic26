import { get } from 'svelte/store';
import { accountState } from '../accounts/accountState';
import { terminal } from '../terminal';
import { getActiveDirectory } from './directoryManager';
import { getDirectoryAtPath } from './pathResolver';
import { type FileType } from './routes';

const hasAccess = (entry: FileType, clearance: number): boolean => {
	const required = entry.minClearance ?? 0;
	return clearance >= required;
};

export const lsCommand = (params: string[]) => {
	const showSecrets = params.includes('-a');
	const currentClearance = get(accountState).clearance;
	const activeDirectory = getActiveDirectory();

	const resolved = getDirectoryAtPath(activeDirectory, currentClearance);
	if (!resolved.ok) {
		terminal.write([
			{
				type: 'error',
				content: resolved.error
			}
		]);
		return;
	}

	const currentDirectory = resolved.directory;

	for (const key in currentDirectory) {
		if (key.startsWith('.') && !showSecrets) {
			continue;
		}

		const entry = currentDirectory[key];
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
