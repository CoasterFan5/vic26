import { getAccounts } from '../accounts/secrets';
import { loginAccount } from '../accounts/accountState';
import { terminal } from '../terminal';

export const loginCommand = (params: string[]) => {
	const username = params[0];
	const password = params[1];

	if (!username || !password) {
		terminal.write([
			{
				type: 'error',
				content: 'Usage: login <username> <password>'
			}
		]);
		return;
	}

	const accounts = getAccounts();
	const expectedUsername = 'logs@it.glimpse.com';
	const expectedPassword = accounts.logAccount.password;

	if (username !== expectedUsername || password !== expectedPassword) {
		terminal.write([
			{
				type: 'error',
				content: 'Invalid username or password.'
			}
		]);
		return;
	}

	loginAccount({
		username,
		themeState: 'amber',
		clearance: 1
	});

	terminal.write([
		{
			type: 'line',
			content: `Login successful. Welcome, ${username}.`
		}
	]);
};
