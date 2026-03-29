import { shuffleArray } from '$lib/utils/shuffleArray';
import { names } from './nameList';

export const generateAccounts = () => {
	accounts.generated = true;

	const rn = Math.floor(Math.random() * 85 + 10);
	const logPass = `secret${rn}`;

	accounts.logAccount.password = logPass;
	accounts.logAccount.passwordBase64 = btoa(logPass);

	const adminPasswordNumber = Math.floor(Math.random() * 8000 + 1000);
	const adminPassword = `admin${adminPasswordNumber}!`;

	const shuffledNames = shuffleArray(names);

	accounts.adminAccount.password = adminPassword;
	accounts.adminAccount.passwordBase64 = btoa(adminPassword);
	accounts.adminAccount.username = shuffledNames[0];
	accounts.adminAccount.email = `${shuffledNames[0]}@it.glimpse.com`;
	accounts.fakeAccount1.username = shuffledNames[1];
	accounts.fakeAccount1.email = `${shuffledNames[1]}@it.glimpse.com`;
	accounts.fakeAccount2.username = shuffledNames[2];
	accounts.fakeAccount2.email = `${shuffledNames[2]}@it.glimpse.com`;
};

export const getAccounts = () => {
	if (!accounts.generated) {
		generateAccounts();
	}
	return accounts;
};

const accounts = {
	generated: false,
	logAccount: {
		password: '',
		passwordBase64: ''
	},
	adminAccount: {
		username: '',
		email: '',
		password: '',
		passwordBase64: ''
	},
	fakeAccount1: {
		username: '',
		email: ''
	},
	fakeAccount2: {
		username: '',
		email: ''
	}
};
