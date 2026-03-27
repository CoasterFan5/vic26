import { terminal } from '../terminal';
import { files } from './routes';

export const lsCommand = (params: string[]) => {
	let showSecrets = false;
	if (params.includes('-a')) {
		showSecrets = true;
	}

	for (const key in files) {
		if (key.startsWith('.') && !showSecrets) {
			continue;
		}

		terminal.write([
			{
				type: 'line',
				content: key
			}
		]);
	}
};
