import { terminal } from '../terminal';

export const finalCommand = (params: string[]) => {
	if (params.length < 1) {
		terminal.writeBasicString('Trace log:');
		terminal.writeBasicString('[0:31] Jared@tempt.optical: mkaccount logs@it.glimpse.com');
		terminal.writeBasicString('[0:32] Jared@tempt.optical: touch .secrets.md');
		terminal.writeBasicString('[0:34] Jared@tempt.optical: touch mission.md');
		terminal.writeBasicString(
			'[0:37] Jared@tempt.optical: snd -- "I have planted the seed, here to hoping Jared grants us access"'
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
	}
	if (params[0] == 'release') {
		terminal.writeBasicString('Data released. Goodbye Dan.');
	}
};
