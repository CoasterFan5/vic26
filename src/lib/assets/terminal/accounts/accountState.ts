import { writable } from 'svelte/store';

export type ThemeState = 'green' | 'amber' | 'red';

export type AccountState = {
	username: string;
	themeState: ThemeState;
	clearance: number;
};

const getInitialAccountState = () => {
	return {
		username: 'dan@it.glimpse.com',
		themeState: 'green',
		clearance: 0
	} as AccountState;
};

export const accountState = writable<AccountState>(getInitialAccountState());

export const loginAccount = (account: AccountState) => {
	accountState.set(account);
};

export const logoutAccount = () => {
	accountState.set(getInitialAccountState());
};
