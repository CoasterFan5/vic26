import { terminal } from '../terminal';
import { files } from './routes';

export const lsCommand = () => {
	for (const key in files) {
		terminal.write([
			{
				type: 'line',
				content: key
			}
		]);
	}
};
