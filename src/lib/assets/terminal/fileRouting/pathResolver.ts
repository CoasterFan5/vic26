import { files, type FileTypeRecord } from './routes';

const hasAccess = (minClearance: number | undefined, accountClearance: number): boolean => {
	return accountClearance >= (minClearance ?? 0);
};

export type DirectoryResolutionResult =
	| {
			ok: true;
			directory: FileTypeRecord;
	  }
	| {
			ok: false;
			error: string;
	  };

export const getDirectoryAtPath = (
	pathParts: string[],
	accountClearance: number
): DirectoryResolutionResult => {
	let current: FileTypeRecord = files;

	for (const part of pathParts) {
		const entry = current[part];

		if (!entry) {
			return { ok: false, error: 'Directory not found' };
		}

		if (entry.type !== 'directory') {
			return { ok: false, error: `${part} is not a directory` };
		}

		if (!hasAccess(entry.minClearance, accountClearance)) {
			return { ok: false, error: 'Permission denied: Elevated access required.' };
		}

		current = entry.children;
	}

	return { ok: true, directory: current };
};
