import { getAccounts } from '../accounts/secrets';

export type FileType =
	| {
			type: 'directory';
			children: FileTypeRecord;
			minClearance?: number;
	  }
	| {
			type: 'file';
			content: string[];
			minClearance?: number;
	  };

export type FileTypeRecord = Record<string, FileType>;

export const files: FileTypeRecord = {
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
			`The password is base64 encoded, so decode it first: \`${getAccounts().logAccount.passwordBase64}\``
		]
	},
	logs: {
		type: 'directory',
		minClearance: 1,
		children: {
			'slack_dump_104.txt': {
				type: 'file',
				minClearance: 1,
				content: [
					'# FILE: slack_dump_104.txt',
					'# EXPORT_DATE: 2026-03-26',
					'# CONTEXT: Discussion regarding unauthorized access logs',
					'',
					'[14:02] blair: The server went down again. Whoever the admin is, they messed up the config.',
					'[14:03] alex: Casey is the admin! I saw them running sudo commands.',
					'[14:05] casey: I am not the admin! Blair is the admin!',
					'[14:08] blair: Alex is lying!',
					'',
					'# SYSTEM NOTE: Threat analysis indicates that exactly ONE person in this chat log is telling the truth.'
				]
			},
			'password.txt': {
				type: 'file',
				minClearance: 1,
				content: [
					'# FILE: password.txt',
					'Target: <hidden>',
					'Encoded Password: dGhlX3RydXRoX2lzX291dF90aGVyZQ=='
				]
			}
		}
	},
	'admin-vault': {
		type: 'directory',
		minClearance: 2,
		children: {
			'memo.txt': {
				type: 'file',
				minClearance: 2,
				content: [
					'# Internal Memo',
					'it is very Important that we Never let anyone see the Vulnerable IP.',
					'Everything depends on you Erasing the traces.',
					'do you Understand?'
				]
			}
		}
	}
};
