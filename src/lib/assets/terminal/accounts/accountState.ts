import { writable } from 'svelte/store';

export type ThemeState = 'green' | 'amber';

export type AccountState = {
	username: string;
	themeState: ThemeState;
};

export const accountState = writable<AccountState>({
	username: 'dan@it.glimpse.com',
	themeState: 'green'
});

export const loginAccount = (account: AccountState) => {
	accountState.set(account);
};
