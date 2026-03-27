import { getSecrets } from '../secrets/secrets';

type FileType =
	| {
			type: 'directory';
			children: FileTypeRecord;
	  }
	| {
			type: 'file';
			content: string[];
	  };

type FileTypeRecord = Record<string, FileType>;

export const files: FileTypeRecord = {
	emails: {
		type: 'directory',
		children: {}
	},
	'mission.md': {
		type: 'file',
		content: [
			'# URGENT ',
			'Dan, something urgent has come up.',
			'Someone breached our servers and stole important info regarding Glimpse Optical',
			'I need you to find who stole the data, and report back to me.',
			'IDS Warden is on high alert; your connection will be severed every 60 seconds.',
			"I've left elevated access credentials hidden in this directory.",
			'- Jared'
		]
	},
	'.secrets.md': {
		type: 'file',
		content: [
			'# Hi Dan',
			'I know its strange that I am leaving secret files. Last one I promise.',
			'To access the access logs, you will need an account with log access perms',
			'I have generated one for you: `logs@it.glimpse.com`',
			`The password is base64 encoded, so decode it first: \`${getSecrets().logAccount.passwordBase64}\``
		]
	}
};
