import { get } from 'svelte/store';
import { accountState } from '../accounts/accountState';
import { terminal } from '../terminal';
import { getActiveDirectory, setActiveDirectory } from './directoryManager';
import { getDirectoryAtPath } from './pathResolver';

const resolvePath = (inputPath: string | undefined, currentPath: string[]): string[] => {
	if (!inputPath || inputPath.trim() === '' || inputPath === '/') {
		return [];
	}

	const startsAtRoot = inputPath.startsWith('/');
	const rawParts = inputPath.split('/').filter((p) => p.length > 0);

	const result = startsAtRoot ? [] : [...currentPath];

	for (const part of rawParts) {
		if (part === '.') continue;
		if (part === '..') {
			if (result.length > 0) result.pop();
			continue;
		}
		result.push(part);
	}

	return result;
};

export const cdCommand = (params: string[]) => {
	const targetPath = params[0];
	const currentPath = getActiveDirectory();
	const accountClearance = get(accountState).clearance;

	if (!targetPath) {
		setActiveDirectory([]);
		return;
	}

	const resolvedPath = resolvePath(targetPath, currentPath);
	const result = getDirectoryAtPath(resolvedPath, accountClearance);

	if (!result.ok) {
		terminal.write([
			{
				type: 'error',
				content: result.error
			}
		]);
		return;
	}

	setActiveDirectory(resolvedPath);
};
