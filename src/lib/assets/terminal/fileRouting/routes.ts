type FileType =
	| {
			type: 'directory';
			children: FileTypeRecord;
	  }
	| {
			type: 'file';
			content: string;
	  };

type FileTypeRecord = Record<string, FileType>;

export const files: FileTypeRecord = {
	emails: {
		type: 'directory',
		children: {}
	},
	'readme.txt': {
		type: 'file',
		content: 'read'
	},
	'readme.md': {
		type: 'file',
		content: 'read 2'
	}
};
