export type LineType = 'user' | 'line';

export type LineComponent = [
	{
		content: string;
		type: LineType;
	}
];

export type Lines = LineComponent[];
