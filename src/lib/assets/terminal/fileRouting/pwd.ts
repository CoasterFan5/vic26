import { terminal } from '../terminal';
import { getActiveDirectory } from './directoryManager';

export const pwd = () => {
	const p = `/${getActiveDirectory().join('/')}`;

	terminal.writeBasicString(p);
};
