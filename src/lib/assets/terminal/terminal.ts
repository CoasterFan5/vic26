import { writable } from 'svelte/store';
import type { LineComponent } from './LineType';

export const lines = writable<LineComponent[]>([
	[{ type: 'line', content: 'Glimpse Inc Termial System (c) 2026 Glimpse Inc.' }],
	[{ type: 'line', content: 'Glimpse Inc Warden will kick you from this system in 60 seconds' }],
	[{ type: 'line', content: 'Type help and press enter for help' }]
]);

export const terminal = {
	write: (line: LineComponent) => {
		lines.update((l) => {
			return [...l, line];
		});
	}
};
