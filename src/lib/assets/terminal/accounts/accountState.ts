import { writable } from 'svelte/store';

export type AuthAccount = {
	username: string;
};

export type AccountState = {
	isAuthenticated: boolean;
	account: AuthAccount;
	lastLoginAt: string | null;
};

export const accountState = writable<AccountState>({
	isAuthenticated: false,
	account: {
		username: 'dan@it.glimpse.com'
	},
	lastLoginAt: null
});

export const loginAccount = (username: string) => {
	accountState.set({
		isAuthenticated: true,
		account: { username },
		lastLoginAt: new Date().toISOString()
	});
};
