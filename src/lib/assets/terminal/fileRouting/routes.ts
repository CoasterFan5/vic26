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
			'Someone from tempt optical breached our servers and stole important info regarding Glimpse Optical',
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
			'slack_dump.txt': {
				type: 'file',
				minClearance: 1,
				content: [
					'Channel: IT general',
					`[14:02] ${getAccounts().fakeAccount1.email}: The server went down again. Whoever the admin is, they messed up the config.`,
					`[attatchment] cat_gasping.jpg`,
					`[14:03] ${getAccounts().adminAccount.email}: I am not the admin.`,
					`[14:03] ${getAccounts().fakeAccount1.email} Only one of us is telling the truth`,
					`[15:30] ${getAccounts().fakeAccount2.email}: ${getAccounts().adminAccount.username} and ${getAccounts().fakeAccount1.username} are both telling the truth. ${getAccounts().adminAccount.username} is not the admin.`
				]
			},
			'password.txt': {
				type: 'file',
				minClearance: 1,
				content: [
					'Target: <hidden>',
					`Encoded Password: ${getAccounts().adminAccount.passwordBase64}`
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
					'there is a Secret command hidden within the system.',
					'it allows you to access highly sensative logs and Company data.',
					'It is essential that it is not released to anyone.',
					'i Hope you understand',
					'thank You'
				]
			}
		}
	}
};
