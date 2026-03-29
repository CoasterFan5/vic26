export type LineType = 'user' | 'line' | 'bold' | 'error' | 'boldUnderline';

export type LineComponent = {
	content: string;
	type: LineType;
}[];

export type Lines = LineComponent[];
