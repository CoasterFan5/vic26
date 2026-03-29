import { getAccounts } from '../accounts/secrets';
import { loginAccount, type AccountState } from '../accounts/accountState';
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

	switch (username) {
		case 'logs@it.glimpse.com': {
			if (password == getAccounts().logAccount.password) {
				loginAccount({
					username,
					themeState: 'amber',
					clearance: 1
				});
				terminal.writeBasicString(`Login successful. Welcome, ${username}.`);
				return;
			}
			break;
		}
		case getAccounts().adminAccount.email: {
			if (password == getAccounts().adminAccount.password) {
				loginAccount({
					username,
					themeState: 'red',
					clearance: 2
				});
				terminal.writeBasicString(`Login successful. Welcome, ${username}.`);
				return;
			}
		}
	}

	terminal.write([
		{
			type: 'error',
			content: 'Invalid username or password.'
		}
	]);
	return;
};
