import Queue from './Queue';

const moves = [
	[-2, -1],
	[-2, 1],
	[-1, -2],
	[-1, 2],
	[1, -2],
	[1, 2],
	[2, -1],
	[2, 1],
];

const isValid = ([moveX, moveY]) => {
	return moveX < 8 && moveX >= 0 && moveY < 8 && moveY >= 0;
};

function knightTravails(initial, end) {
	let queue = new Queue();
	queue.enqueue([initial]);

	while (!queue.isEmpty()) {
		let path = queue.dequeue();
		let [x, y] = path[path.length - 1];

		if (x === end[0] && y === end[1]) {
			return [path.length - 1, path];
		}

		moves.forEach(([dx, dy]) => {
			let nextMove = [x + dx, y + dy];
			if (isValid(nextMove)) {
				queue.enqueue(path.concat([nextMove]));
			}
		});
	}

	return [0, []];
}

function printTravail(res) {
	console.log(`You made it in ${res[0]} moves! Here's your path:`);
	res[1].forEach((arr) => {
		console.log(arr);
	});
}

printTravail(knightTravails([3, 3], [4, 3]));
printTravail(knightTravails([5, 3], [7, 0]));
printTravail(knightTravails([1, 7], [2, 5]));
printTravail(knightTravails([0, 1], [1, 6]));
printTravail(knightTravails([5, 2], [4, 4]));
