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
	if (!isValid(end) || !isValid(initial)) return [0, []];

	let queue = new Queue();
	queue.enqueue([initial]) // Array inside an array, [[], [], []]

	while (!queue.isEmpty()) {
		let currPath = queue.dequeue(); // Get Position
		let [x, y] = currPath[currPath.length - 1] // Get the current position which is the last array

		if (x === end[0] && y === end[1]) {
			return [currPath.length, currPath];
		}

		// Loops through Every moves until it found one
		moves.forEach(([dx, dy]) => {
			let newPos = [x + dx, y + dy];
			if (isValid(newPos)) {
				queue.enqueue(currPath.concat([newPos]));
			}
		}) 
	}

	return [0, []];
}

function printTravail(res) {
	if (res[0] === 0) {
		console.log('Something is invalid with your input!');
		return;
	}
	console.log(`You made it in ${res[0]} moves! Here's your path:`);
	res[1].forEach((arr) => {
		console.log(arr);
	});
}

printTravail(knightTravails([3, 3], [9, 3]));
printTravail(knightTravails([5, 3], [7, 0]));
printTravail(knightTravails([1, 7], [2, 5]));
printTravail(knightTravails([0, 1], [1, 6]));
printTravail(knightTravails([5, 2], [4, 4]));
