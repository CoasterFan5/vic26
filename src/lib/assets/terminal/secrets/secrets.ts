export const generateSecrets = () => {
	secrets.generated = true;

	const rn = Math.floor(Math.random() * 85 + 10);
	const logPass = `secret${rn}`;

	secrets.logAccount.password = logPass;
	secrets.logAccount.passwordBase64 = btoa(logPass);
};

export const getSecrets = () => {
	if (!secrets.generated) {
		generateSecrets();
	}
	return secrets;
};

const secrets = {
	generated: false,
	logAccount: {
		password: '',
		passwordBase64: ''
	}
};
