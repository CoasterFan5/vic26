export type LineType = 'user' | 'line' | 'bold';

export type LineComponent = {
	content: string;
	type: LineType;
}[];

export type Lines = LineComponent[];
