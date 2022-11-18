import { find } from '@laufire/utils/collection';

const half = 0.5;

const Directions = {
	left: { x: -1, y: 0, opposite: 'right', border: 0, axis: 'x' },
	right: { x: 1, y: 0, opposite: 'left', border: 100, axis: 'x' },
	top: { x: 0, y: -1, opposite: 'bottom', border: 0, axis: 'y' },
	bottom: { x: 0, y: 1, opposite: 'top', border: 100, axis: 'y' },
};

const getCollidingPosition = (shape, { distance, backgroundSize }) => {
	const newPosition = moveNext(shape, distance);
	const { size, direction } = shape;
	const { x, y } = Directions[direction];

	newPosition.x += x * (size * half);
	newPosition.y += y * (size * half);

	return find(newPosition, (value) =>
		value < 0 || value > backgroundSize);
};

const getBounceDistance = (
	shape, collidingPosition
	, { backgroundSize }
) => {
	const { direction, size } = shape;
	const { axis, x, y, border } = Directions[direction];
	const overflowValue = collidingPosition % backgroundSize;

	return shape[axis] - ((x || y)
		* (border - overflowValue - size * half));
};

const bounceBack = (
	shape, collidingPosition, config
) => {
	const { opposite } = Directions[shape.direction];

	return {
		...moveNext({
			...shape,
			direction: opposite,
			life: shape.life--,
		},
		getBounceDistance(
			shape, collidingPosition, config
		)),
	};
};

const moveNext = (shape, distance) => {
	const { x, y } = Directions[shape.direction];

	return {
		...shape,
		x: shape.x + (x * distance),
		y: shape.y + (y * distance),
	};
};

const MovementManager = {
	move: ({ state: { shapes = [] }, config }) =>
		shapes.map((shape) => {
			const collidingPosition = getCollidingPosition(shape, config);
			const { distance } = config;

			return {
				...shape,
				...collidingPosition
					? bounceBack(
						shape, collidingPosition, config
					)
					: moveNext(shape, distance),
			};
		}).filter((shape) =>
			shape.life),
};

export default MovementManager;
