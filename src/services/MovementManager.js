import { find } from '@laufire/utils/collection';

const half = 0.5;

const Directions = {
	left: { x: -1, y: 0, opposite: 'right', border: 0, axis: 'x' },
	right: { x: 1, y: 0, opposite: 'left', border: 100, axis: 'x' },
	top: { x: 0, y: -1, opposite: 'bottom', border: 0, axis: 'y' },
	bottom: { x: 0, y: 1, opposite: 'top', border: 100, axis: 'y' },
};

const getCollidingPosition = (shape, { speed, backgroundSize }) => {
	const newPosition = moveNext({ shape, speed });
	const { size, direction } = shape;
	const { x, y } = Directions[direction];

	newPosition.x += x * (size * half);
	newPosition.y += y * (size * half);

	return find(newPosition, (value) =>
		value < 0 || value > backgroundSize);
};

const getBounceSpeed = (
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
	const updatedShape = {
		...shape,
		direction: opposite,
	};
	const bounceSpeed = getBounceSpeed(
		shape, collidingPosition, config
	);

	return moveNext({
		shape: updatedShape,
		speed: bounceSpeed,
	});
};

const moveNext = ({ shape, speed }) => {
	const { x, y } = Directions[shape.direction];

	return {
		...shape,
		x: shape.x + (x * speed),
		y: shape.y + (y * speed),
	};
};

const MovementManager = {
	move: ({ state: { shapes = [] }, config }) =>
		shapes.map((shape) => {
			const collidingPosition = getCollidingPosition(shape, config);
			const { speed } = config;

			return {
				...shape,
				...collidingPosition
					? bounceBack(
						shape, collidingPosition, config
					)
					: moveNext({ shape, speed }),
			};
		}),

	reduceLife: ({ state: { shapes }, config }) => shapes.map((shape) => ({
		...shape,
		...getCollidingPosition(shape, config)
		&& { life: shape.life-- },
	})),

	remove: ({ state: { shapes }}) =>
		shapes.filter((shape) => shape.life),
};

export default MovementManager;
