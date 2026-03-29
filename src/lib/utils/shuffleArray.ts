export function shuffleArray<T>(arr: T[]) {
	const c = [...arr];
	const newArray = [];

	while (c.length > 0) {
		const r = Math.floor(Math.random() * c.length);
		newArray.push(c.splice(r, 1)[0]);
	}
	return newArray;
}
