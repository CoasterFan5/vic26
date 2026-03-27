export const generateAccounts = () => {
	accounts.generated = true;

	const rn = Math.floor(Math.random() * 85 + 10);
	const logPass = `secret${rn}`;

	accounts.logAccount.password = logPass;
	accounts.logAccount.passwordBase64 = btoa(logPass);
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
	}
};
