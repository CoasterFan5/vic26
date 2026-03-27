import { writable } from 'svelte/store';
import type { LineComponent } from './LineType';

export const lines = writable<LineComponent[]>([]);

export const terminal = {
	write: (line: LineComponent) => {
		lines.update((l) => {
			return [...l, line];
		});
	},
	clear: () => {
		lines.update(() => {
			return [];
		});
	},
	writeBasicString: (s: string) => {
		terminal.write([
			{
				type: 'line',
				content: s
			}
		]);
	},
	writeDefaultLines: () => {
		terminal.writeBasicString('Glimpse Inc Terminal System (c) 2026 Glimpse Inc.');
		terminal.writeBasicString('IDS Warden will kick you from this system in 60 seconds');
		terminal.writeBasicString('Type help and press enter for help');
		console.log('Wrote basic lines.');
	}
};
