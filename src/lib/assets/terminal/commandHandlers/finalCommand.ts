import { terminal } from '../terminal';

export const finalCommand = (params: string[]) => {
	if (params.length < 1) {
		terminal.writeBasicString('Trace log:');
		terminal.writeBasicString('[0:31] Jared@tempt.optical: mkaccount logs@it.glimpse.com');
		terminal.writeBasicString('[0:32] Jared@tempt.optical: mkfile .secrets.md');
		terminal.writeBasicString('[0:34] Jared@tempt.optical: mkfile mission.md');
		terminal.writeBasicString(
			'[0:37] Jared@tempt.optical: snd -- "I have planted the seed, here to hoping Dan finds the secrets"'
		);
		terminal.writeBasicString(
			'[0:38] Jared@tempt.optical: snd -- "Dan has accessed the mission doc, signing off to spectate"'
		);

		terminal.write([{ type: 'bold', content: 'End Trace Log' }]);
		terminal.write([{ type: 'bold', content: 'Other comand uses:' }]);
		terminal.write([
			{ type: 'bold', content: 'scihy release' },
			{
				type: 'line',
				content: 'Release glimpse optical data to tempt inc'
			}
		]);
		terminal.write([
			{ type: 'bold', content: 'scihy secure' },
			{
				type: 'line',
				content: 'Delete traces and secure data'
			}
		]);
	}
	if (params[0] == 'secure') {
		terminal.writeBasicString('Data secured. Goodbye Dan.');
		terminal.writeBasicString('Glimpse Optical thanks you for your contribution.');
		terminal.writeBasicString('While we would love to keep you around, you simply know too much.');
	}
	if (params[0] == 'release') {
		terminal.writeBasicString('Data released. Goodbye Dan.');
		terminal.writeBasicString('You played the part of a pawn especially well.');
		terminal.writeBasicString('Glimpse Optical is destroyed and you will take the fall.');
	}
};
