let activeDirectory: string[] = [];

export const getActiveDirectory = () => {
	return activeDirectory;
};

export const setActiveDirectory = (nextDirectory: string[]) => {
	activeDirectory = [...nextDirectory];
};

export const resetActiveDirectory = () => {
	activeDirectory = [];
};
