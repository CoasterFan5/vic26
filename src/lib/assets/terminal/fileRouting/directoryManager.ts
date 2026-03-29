let activeDirectory: string[] = [];

export const getActiveDirectorySingleWord = () => {
	const l = activeDirectory.length;
	if (l < 1) {
		return '/';
	} else {
		return activeDirectory[l - 1];
	}
};

export const getActiveDirectory = () => {
	return activeDirectory;
};

export const setActiveDirectory = (nextDirectory: string[]) => {
	activeDirectory = [...nextDirectory];
};

export const resetActiveDirectory = () => {
	activeDirectory = [];
};
